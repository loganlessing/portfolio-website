// main.js
// Three.js model loading lives here once you have .glb files ready.
// Import Three.js from the importmap defined in portfolio.html.

// Example: load a GLB model into a canvas element
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//
// export function loadModel(canvasId, modelPath) {
//   const canvas = document.getElementById(canvasId);
//   if (!canvas) return;
//
//   const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
//   renderer.setSize(canvas.clientWidth, canvas.clientHeight);
//
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
//   camera.position.set(0, 1, 3);
//
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//
//   scene.add(new THREE.AmbientLight(0xffffff, 0.8));
//   scene.add(new THREE.DirectionalLight(0xffffff, 1));
//
//   const loader = new GLTFLoader();
//   loader.load(modelPath, (gltf) => {
//     scene.add(gltf.scene);
//   });
//
//   function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
//   }
//   animate();
// }

console.log('Portfolio loaded.');
