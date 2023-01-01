/*
===============
selector
===============
*/
let t1 = document.getElementById("scene_3d");

/*
===============
three js
===============
*/
let scene, renderer, camera;
let cube1, cube2, cube3, cube4, cube5, cube6, cube7;

/*
===============
animation
===============
*/
let mouseX = 0, mouseY = 0;
let mouseX0 = 0, mouseY0 = 0;





// 初始化場景、渲染器、相機、物體
function init() {
  // 建立場景
  scene = new THREE.Scene();

  // 建立渲染器
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight); // 場景大小
  // renderer.setSize(t1.offsetWidth, t1.offsetHeight); // 場景大小
  renderer.setClearColor(0x000000, 1.0); // 預設背景顏色
  renderer.shadowMap.enable = true; // 陰影效果

  // 將渲染器的 DOM 綁到網頁上
  // document.body.appendChild(renderer.domElement)
  t1.appendChild(renderer.domElement);

  // 建立相機
  // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera = new THREE.PerspectiveCamera(90, t1.offsetWidth / t1.offsetHeight, 0.1, 100);
  camera.position.set(0, -3, 15);
  camera.lookAt(0, -3, 0);

  // 建立光源
  let directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 0, 100);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  // let directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
  // scene.add(directionalLightHelper);

  // 建立物體
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 幾何體
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff }); // 材質
  cube1 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube1.position.set(0, 0, 0);
  scene.add(cube1);

  cube2 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube2.position.set(5, 0, 0);
  cube1.add(cube2);

  cube3 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube3.position.set(-5, 0, 0);
  cube1.add(cube3);

  cube4 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube4.position.set(0, 5, 0);
  cube1.add(cube4);

  cube5 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube5.position.set(0, -5, 0);
  cube1.add(cube5);

  cube6 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube6.position.set(0, 0, 5);
  cube1.add(cube6);

  cube7 = new THREE.Mesh(geometry, material); // 建立網格物件
  cube7.position.set(0, 0, -5);
  cube1.add(cube7);
}

// 建立動畫
function animate() {
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
}

// 渲染場景
function render() {
  cube1.rotation.y += (mouseX - mouseX0) * 0.01;
  cube1.rotation.x += (mouseY - mouseY0) * 0.01;
  mouseX0 = (mouseX - mouseX0) * 0.05 + mouseX0;
  mouseY0 = (mouseY - mouseY0) * 0.05 + mouseY0;
  animate();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

// 監聽螢幕寬高來做簡單 RWD 設定
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setSize(t1.offsetWidth, t1.offsetHeight); // 場景大小
});

t1.addEventListener('mousemove', function (event) {
  mouseX = (event.offsetX - t1.offsetWidth / 2) * 0.03;
  mouseY = (event.offsetY - t1.offsetHeight / 2) * 0.03;
  console.log(event.offsetX, event.offsetY);
});


t1.addEventListener('touchmove', function (event) {
  mouseX = (event.touches[0].clientX - t1.offsetWidth / 2) * 0.03;
  mouseY = (event.touches[0].clientY - t1.offsetHeight / 2) * 0.03;
  console.log(mouseX, mouseX);
});

init();
render();
