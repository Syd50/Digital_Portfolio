import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export { Home, About, Projects, Contact }

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const loader = new GLTFLoader();
loader.load('model.glb', (gltf) => {
    scene.add(gltf.scene);
}, undefined, (error) => {
    console.error('Error loading model:', error);
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

loader.load('model.glb', (gltf) => {
    console.log('Model loaded:', gltf);
    scene.add(gltf.scene);
});

camera={{ position: [0, 0, 10] }}

 