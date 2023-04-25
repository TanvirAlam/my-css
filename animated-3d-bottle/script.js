
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 5);

const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 5);
camera.add(pointLight);
scene.add(camera);

const bottleGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
const bottleMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const bottle = new THREE.Mesh(bottleGeometry, bottleMaterial);
scene.add(bottle);

const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onCanvasMouseDown(event) {
  event.preventDefault();
  controls.enabled = true;
}

function onCanvasMouseUp() {
  controls.enabled = false;
}

canvas.addEventListener('mousedown', onCanvasMouseDown);
canvas.addEventListener('mouseup', onCanvasMouseUp);

animate();