import * as THREE from 'three';



// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1.5;

// 3. Create and add an object

const geometry = new THREE.LatheGeometry();
const material = new THREE.MeshLambertMaterial({color: '#964B00', emissive: '#468585'});

const lathe = new THREE.Mesh(geometry, material);
scene.add(lathe);

// 4. Add Lightning
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the scene
function animate(){
	requestAnimationFrame(animate);

	lathe.rotation.x += 0.01;
	lathe.rotation.y += 0.02;

	renderer.render(scene, camera);

}

animate()

