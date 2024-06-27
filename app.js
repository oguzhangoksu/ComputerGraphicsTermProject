import * as THREE from 'three';

var camera;
var stats;
var renderer;
var scene = new THREE.Scene();
var innerWidth=3*window.innerWidth/4;
var innerHeight=3*window.innerHeight/4;

//Main function
document.addEventListener("DOMContentLoaded", function(event) {
    createCamera();
    drawCube(0,-5,0);
    drawWall(-30,0,0,-10,"wall1.jpg");
    drawWall(30,0,0,10,"wall2.jpg");
    drawfloor(0,-10,10); 
    drawBall(-3,2,0);
    bucket(3,1,0);
    keyDown();
    directionalLight();
    ambientLight();
    animate();
    
});

// Creating Camera
function createCamera(fov,aspectRatio,near,far){
    scene = new THREE.Scene();
    fov = 60;
    aspectRatio = innerWidth / innerHeight;
    near = 10;
    far = 200;
    camera = new THREE.PerspectiveCamera( fov, aspectRatio, near, far );
    
    camera.position.set( 0, 10, 30 );
    camera.lookAt( 0, 0, 0 );
 
    // Handle fps stats
    stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
    renderer = new THREE.WebGLRenderer();
    //Ambient Light
    const al = new THREE.AmbientLight( 0xffffff, 0.5 );
    scene.add( al );
    
    renderer.setSize( innerWidth, innerHeight, true );
    renderer.setClearColor( "black", 1 ); // color of the background
    renderer.setPixelRatio( window.devicePixelRatio );
    let container=document.querySelector("#container")
    container.appendChild( renderer.domElement );
    
}

// Key Handle
function keyDown(){

    document.addEventListener("keydown",(event)=>{
        event.preventDefault();
        if(event.key=="ArrowUp"){
            camera.translateY(1);
        }
        else if(event.key=="ArrowDown"){
            camera.translateY(-1);
        }
        else if(event.key=="ArrowLeft"){
            camera.translateX(-1);
        }
        else if(event.key=="ArrowRight"){
            camera.translateX(1);
        }
        else if(event.key=="w"){
            camera.translateZ(-1);
        }
        else if(event.key=="s"){
            camera.translateZ(1);
        }
        else if(event.key=="q"){
            camera.rotateZ(0.1);
        }
        else if(event.key=="e"){
            camera.rotateZ(-0.1);
        }
        else if(event.key=="a"){
            camera.rotateY(0.1);
        }
        else if(event.key=="d"){
            camera.rotateY(-0.1);
        }
        else if(event.key=="z"){
            camera.rotateX(0.1);
        }
        else if(event.key=="x"){
            camera.rotateX(-0.1);
        }
        else if(event.key=="r"){
            camera.position.set( 0, 10, 30 );
            camera.lookAt( 0, 0, 0 );
        }
        console.log("camera position:",camera.position);
        
    })
}
// Cube
function drawCube(x,y,z){
    const loader = new THREE.ImageBitmapLoader();
    loader.load(
        // resource URL
        './textures/woodBox.jpg',
        
    
        // onLoad callback
        function ( imageBitmap ) {
            const texture = new THREE.CanvasTexture( imageBitmap );
            const material = new THREE.MeshPhongMaterial( {map:texture} );
            const geometry = new THREE.BoxGeometry( 10, 10, 10 );
            const cube = new THREE.Mesh( geometry, material );
            cube.position.z=z;
            cube.position.x=x;
            cube.position.y=y;
            cube.receiveShadow = true;
            scene.add( cube );
        },
    
        // onProgress callback currently not supported
        undefined,
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' ); 
        }
    );
}

// Ball
function drawBall(x,y,z){
    const loader = new THREE.ImageBitmapLoader();
    loader.load(
        // resource URL
        './textures/ball.jpg',
    
        // onLoad callback
        function ( imageBitmap ) {
            const texture = new THREE.CanvasTexture( imageBitmap );
            const material = new THREE.MeshPhongMaterial( {map:texture} );
            const geometry = new THREE.SphereGeometry( 2, 50, 50 );
            var ball = new THREE.Mesh( geometry, material );
            ball.position.z=z;
            ball.position.x=x;
            ball.position.y=y;
            scene.add( ball );
            // Animation of Ball
            function animate() {
   
                ball.rotation.x += 0.01;
                ball.rotation.y += 0.01;
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
            }
            animate();
            
            
        },
    
        // onProgress callback currently not supported
        undefined,
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' ); 
        }
    );
}

//Bucket
function bucket(x,y,z){

    const loader = new THREE.ImageBitmapLoader();
    loader.load(
        // resource URL
        './textures/water.jpg',
    
        // onLoad callback
        function ( imageBitmap ) {
            const texture = new THREE.CanvasTexture( imageBitmap );
            //Bucketw
            const bucketGeometry = new THREE.CylinderGeometry(1, 1.5, 2, 32);
            const bucketMaterial = new THREE.MeshPhongMaterial({ color: "gray" });
            const bucket = new THREE.Mesh(bucketGeometry, bucketMaterial);
            //Bucket water
            const bucketWater= new THREE.CircleGeometry(1.5, 30,1);
            const bucketWaterMaterial = new THREE.MeshPhongMaterial({map:texture});
            const water = new THREE.Mesh(bucketWater, bucketWaterMaterial);
            bucket.position.set(x, y, z);
            bucket.rotateX(Math.PI);
            water.rotateX(-Math.PI/2);
            water.position.set(x, y+1.009, z);
            // Add bucket, handle, and bottom to the scene
            scene.add(bucket);
            scene.add(water);
        },
    
        // onProgress callback currently not supported
        undefined,
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' ); 
        }
    );
  
}

//Wall
function drawWall(x,y,z,rotateY,pngname){
    const loader = new THREE.ImageBitmapLoader();
    loader.load(
        // resource URL
        `./textures/${pngname}`,
    
        // onLoad callback
        function ( imageBitmap ) {
            const texture = new THREE.CanvasTexture( imageBitmap );
            const material = new THREE.MeshPhongMaterial( { map: texture } ); 
            const geometry = new THREE.BoxGeometry( 5, 20, 40 ); 
            const wall = new THREE.Mesh( geometry, material ); 
            wall.position.x=x;
            wall.position.y=y;
            wall.position.z=z;
            wall.rotateY(Math.PI/rotateY);

            scene.add( wall );
        },
    
        // onProgress callback currently not supported
        undefined,
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' ); 
        }
    );
 
}

//floor
function drawfloor(x,y,z){
    const loader = new THREE.ImageBitmapLoader();
    loader.load(
        // resource URL
        './textures/floor2.jpg',
    
        // onLoad callback
        function ( imageBitmap ) {
            const texture = new THREE.CanvasTexture( imageBitmap );
            const material = new THREE.MeshPhongMaterial( { map: texture } );
            const geometry = new THREE.BoxGeometry( 100,80, 1 );
            const floor = new THREE.Mesh( geometry, material );
            floor.position.z=z;
            floor.position.y=y;
            floor.position.x=x;
            floor.rotateX(Math.PI/2);
            scene.add( floor );
        },
    
        // onProgress callback currently not supported
        undefined,
    
        // onError callback
        function ( err ) {
            console.log( 'An error happened' ); 
        }
    );

}

//Ambient Light
function ambientLight(){
    const range=document.querySelector("#range");
    const number=document.querySelector("#number");
    const checkbox=document.querySelector("#checkbox");
    
    checkbox.addEventListener("change",(event)=>{

        if(checkbox.checked){
            const al = new THREE.AmbientLight( 0xffffff, (range.value/100) );
            scene.add( al );
        }
        else{
            scene.children.forEach(element => {
                element.type=="AmbientLight" ? scene.remove(element) : null;
            });
        }
    })
    range.addEventListener("input",(event)=>{
        number.innerHTML=`${(range.value/100)}`;
        scene.children.forEach(element => {
            element.type=="AmbientLight" ? element.intensity=(range.value/100) : null;
        });
        
        
    })
    
}

//Directional Light
function directionalLight(){
    const range=document.querySelector("#range2");
    const number=document.querySelector("#number2");
    const checkbox=document.querySelector("#checkbox2");
    const numberX=document.querySelector("#numberX");
    const numberY=document.querySelector("#numberY");
    const numberZ=document.querySelector("#numberZ");
    const rangeX=document.querySelector("#rangeX");
    const rangeY=document.querySelector("#rangeY");
    const rangeZ=document.querySelector("#rangeZ");
    checkbox.addEventListener("change",(event)=>{

        if(checkbox.checked){
            const dl = new THREE.DirectionalLight( 0xffffff, 0.5 );
            dl.position.set( 0, 10,0);
            const dlHelper = new THREE.DirectionalLightHelper( dl, 1 );
            scene.add( dlHelper,dl );
        }
        else{
            const elements=[]
            for(let i=0;i<scene.children.length;i++){
                if(scene.children[i].type=="DirectionalLight" || scene.children[i].type=="DirectionalLightHelper"){
                    elements.push(scene.children[i])
                }
            }
            scene.remove(elements[1],elements[0])

        }
    })
    range.addEventListener("input",(event)=>{
        number.innerHTML=`${(range.value/100)}`;
        scene.children.forEach(element => {
            element.type=="DirectionalLight" ? element.intensity=(range.value/100) : null;
        });
        
        
    })

    // X Y Z 
    rangeX.addEventListener("input",(event)=>{
        numberX.innerHTML=`${rangeX.value-50}`;
        scene.children.forEach(element => {
            element.type=="DirectionalLight" ? element.position.x=(rangeX.value-50) : null;
            element.type=="DirectionalLightHelper" ? element.position.x=(rangeX.value-50) : null;
        });
        
        
    })
    rangeY.addEventListener("input",(event)=>{
        numberY.innerHTML=`${rangeY.value-50}`;
        scene.children.forEach(element => {
            element.type=="DirectionalLight" ? element.position.y=rangeY.value-50 : null;
            element.type=="DirectionalLightHelper" ? element.position.y=rangeY.value-50 : null;
        });
        
        
    })
    rangeZ.addEventListener("input",(event)=>{
        numberZ.innerHTML=`${rangeZ.value-50}`;
        scene.children.forEach(element => {
            element.type=="DirectionalLight" ? element.position.z=rangeZ.value-50 : null;
            element.type=="DirectionalLightHelper" ? element.position.z=rangeZ.value-50 : null;
        });
        
        
    })
}


function animate() {
   
    stats.begin();
    
    stats.end();
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}


