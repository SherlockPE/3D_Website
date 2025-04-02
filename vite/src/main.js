import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');


// 1. Create a scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f3f1f0');

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near plane
  1000 // far plane
);
camera.position.z = 5;

// 3. Create an Object

// const geometry = new THREE.RingGeometry(); 

// Dodecahedron
const dod_geometry = new THREE.DodecahedronGeometry();
const dod_material = new THREE.MeshBasicMaterial({ color: '#f958b4' });
const dodecahedron = new THREE.Mesh(dod_geometry, dod_material);

// Box
const box_geometry = new THREE.BoxGeometry(2, 0.1, 2);
const box_material = new THREE.MeshBasicMaterial({ color: '#6bbef0' });
const box = new THREE.Mesh(box_geometry, box_material);

box.position.y = -2;


scene.add(dodecahedron);
scene.add(box);

// 4. Create a Light

// const light = new THREE.SpotLight('#006769', 1);
const light = new THREE.SpotLight('#ffffff', 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Create a Renderer

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.render(scene, camera);


// document.body.appendChild(renderer.domElement);

// 6. Add Orbiter Controls
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.10; //0.05
controls.enableZoom = true;
controls.enablePan = true;

// 7. Animation Loop

function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  // box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();