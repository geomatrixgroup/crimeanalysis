import { Injectable } from '@angular/core';
@Injectable()
export class Load3DService {
  private viewer:any;
  private height:number;
  constructor() {
    this.height=10000;
    Cesium.BingMapsApi.defaultKey='Ar5xntpmtDoZkRumcJHMUcQqWX4boLc5FN5GfLG99nWkKsmLSNM3CGEjJpo3WZRg';
    (<any>window).CESIUM_BASE_URL = '/assets/cesium';
   }
  loadBaseMap(center:[number,number],height:number){
    alert('PS:尝试使用QWEASD键和鼠标左键拖动，来查看镜头效果');
    let point = Cesium.Cartesian3.fromDegrees(center[0],center[1],this.height);
    this.viewer = new Cesium.Viewer('map', {
        scene3DOnly: true,
        homeButton: false,
        selectionIndicator: false,
        baseLayerPicker: false,
        animation: false,
        timeline: false,
        navigationHelpButton: false,
        fullscreenButton: false
    });
  
  //隐藏左下角默认的Cesium版权文本
  this.viewer._cesiumWidget._creditContainer.style.display='none';
  this.viewer.camera.setView({
    destination : point,
    orientation: {
            heading : Cesium.Math.toRadians(0), // 方向
            pitch : Cesium.Math.toRadians(-30.0),// 倾斜角度
            roll : Cesium.Math.toRadians(0)
        }
    });

    let scene=this.viewer.scene;
    let canvas=this.viewer.canvas;
    canvas.setAttribute('tabindex','0');
    canvas.onclick=function(){
        canvas.focus();
    };
    let ellipsoid=this.viewer.scene.globe.ellipsoid;
    scene.screenSpaceCameraController.enableRotate = false;
    scene.screenSpaceCameraController.enableTranslate = false;
    scene.screenSpaceCameraController.enableZoom = false;
    scene.screenSpaceCameraController.enableTilt = false;
    scene.screenSpaceCameraController.enableLook = false;

    let startMousePosition;
    let mousePosition;
    
    let flags={
        looking:false,
        moveForward:false,
        moveBackward:false,
        moveUp:false,
        moveDown:false,
        moveLeft:false,
        moveRight:false
    };
    let handler=new Cesium.ScreenSpaceEventHandler(canvas);
    handler.setInputAction(function(movement){
        flags.looking=true;
        mousePosition=startMousePosition=Cesium.Cartesian3.clone(movement.position);
    },Cesium.ScreenSpaceEventType.LEFT_DOWN);

    handler.setInputAction(function(movement) {
        mousePosition = movement.endPosition;
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    handler.setInputAction(function(position) {
        flags.looking = false;
    }, Cesium.ScreenSpaceEventType.LEFT_UP);

document.addEventListener('keydown', (e) =>{
    let flagName = this.getFlagForKeyCode(e.keyCode);
    if (typeof flagName !== 'undefined') {
        flags[flagName] = true;
    }
}, false);

document.addEventListener('keyup', (e) =>{
    let flagName = this.getFlagForKeyCode(e.keyCode);
    if (typeof flagName !== 'undefined') {
        flags[flagName] = false;
    }
}, false);

this.viewer.clock.onTick.addEventListener((clock)=> {
    let camera = this.viewer.camera;
    if (flags.looking) {
        let widtha = canvas.clientWidth;
        let heighta = canvas.clientHeight;

        // Coordinate (0.0, 0.0) will be where the mouse was clicked.
        let x = (mousePosition.x - startMousePosition.x) / widtha;
        let y = -(mousePosition.y - startMousePosition.y) / heighta;

        let lookFactor = 0.05;
        camera.lookRight(x * lookFactor);
        camera.lookUp(y * lookFactor);
    }

    // Change movement speed based on the distance of the camera to the surface of the ellipsoid.
    let cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
    let moveRate = cameraHeight / 100.0;

    if (flags.moveForward) {
        camera.moveForward(moveRate);
    }
    if (flags.moveBackward) {
        camera.moveBackward(moveRate);
    }
    if (flags.moveUp) {
        camera.moveUp(moveRate);
    }
    if (flags.moveDown) {
        camera.moveDown(moveRate);
    }
    if (flags.moveLeft) {
        camera.moveLeft(moveRate);
    }
    if (flags.moveRight) {
        camera.moveRight(moveRate);
    }
});

  }
getFlagForKeyCode(keyCode) {
    switch (keyCode) {
    case 'W'.charCodeAt(0):
        return 'moveForward';
    case 'S'.charCodeAt(0):
        return 'moveBackward';
    case 'Q'.charCodeAt(0):
        return 'moveUp';
    case 'E'.charCodeAt(0):
        return 'moveDown';
    case 'D'.charCodeAt(0):
        return 'moveRight';
    case 'A'.charCodeAt(0):
        return 'moveLeft';
    default:
        return undefined;
    }
}
  getCenterXY():[number,number]{
    let center3D=this.viewer.scene.globe.ellipsoid.cartesianToCartographic(this.viewer.camera.position);
    this.height=center3D.height;
    return [Cesium.Math.toDegrees(center3D.longitude),Cesium.Math.toDegrees(center3D.latitude)];
  }
}
