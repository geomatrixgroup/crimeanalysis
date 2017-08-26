import { Injectable } from '@angular/core';
declare let Cesium:any;
@Injectable()
export class Load3DService {
  cesiumViewer:any;
  loadType:number;
  constructor() { }
  loadBaseMap(center:[number,number],height:number){
    let point = Cesium.Cartesian3.fromDegrees(center[0],center[1],height);
    this.cesiumViewer = new Cesium.Viewer('map', {
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
  this.cesiumViewer._cesiumWidget._creditContainer.style.display='none';
  this.cesiumViewer.camera.setView({
    destination : point,
    orientation: {
            heading : Cesium.Math.toRadians(0), // 方向
            pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
            roll : Cesium.Math.toRadians(0)
        }
    });
    let scene=this.cesiumViewer.scene;
    let canvas=this.cesiumViewer.canvas;
    canvas.setAttribute('tabindex','0');
    canvas.onclick=function(){
        canvas.focus();
    };
    let ellipsoid=this.cesiumViewer.scene.globe.ellipsoid;
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

this.cesiumViewer.clock.onTick.addEventListener((clock)=> {
    let camera = this.cesiumViewer.camera;
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

    let outlineOnly=this.cesiumViewer.entities.add({
        name:'Only outline not fill color',
        position:Cesium.Cartesian3.fromDegrees(center[0],center[1],height),
        box:{
            dimensions:new Cesium.Cartesian3(40000,40000,40000),
            fill:true,
            outline:true,
            outlineColor:Cesium.Color.RED
        }
    });
    this.cesiumViewer.flyTo(outlineOnly);

    setTimeout(()=>{
    let greenWall = this.cesiumViewer.entities.add({  
        name : 'Green wall from surface with outline',  
        wall : {  
            positions : Cesium.Cartesian3.fromDegreesArrayHeights(  
                [-107.0, 43.0, 100000.0,  
                -97.0, 43.0, 100000.0,  
                -97.0, 40.0, 100000.0,  
                -107.0, 40.0, 100000.0,  
                -107.0, 43.0, 100000.0]),  
            material : Cesium.Color.GREEN,  
            outline : true,  
            outlineColor : Cesium.Color.BLACK  
        }  
    });  

    this.cesiumViewer.flyTo(greenWall);
},5000);
    setTimeout(()=>{
        let glowingLine = this.cesiumViewer.entities.add({  
            name : '具有发光效果的线',  
            polyline : {  
                positions : Cesium.Cartesian3.fromDegreesArray(  
                    [-75, 37, -125, 37]  
                ),  
                width : 10,  
                material : new Cesium.PolylineGlowMaterialProperty({  
                    glowPower : 0.2,  
                    color : Cesium.Color.BLUE  
                })  
            }  
        });
    this.cesiumViewer.flyTo(glowingLine);
    },10000);

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
  get3DMap(){return this.cesiumViewer;}
}
