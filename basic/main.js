import * as THREE from 'three';

// Steps to show something in the scene


// 1. Create a scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create an add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585',  emissive: '#468585' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// 6. Animate the scene

function animate()
{
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();