var img = document.querySelector('img');
var content = document.querySelector(".content");
var height = 0;
var height0 = 0;
var count = 0;
var lock = 0;

window.onload = function () {
  id = setInterval(BackTop, 0);
  start();
};

function BackTop() {
  var height = document.documentElement.scrollTop;
  console.log(height);
  if (height == 0) {
    clearInterval(id);
  } else {
    window.scrollTo(0, 0);
  }
}

window.onscroll = function () {
  if (lock) {
    height = document.documentElement.scrollTop;
    console.log(height);
    if (height > height0) {
      count = (count + 1) % 4;
      window.scrollTo(0, 10);
      start();
    }
    else {
      count = (count + 3) % 4;
      window.scrollTo(0, 10);
      start();
    }
    height0 = height;
    console.log("onscroll");
  }
  else {
    window.scrollTo(0, height)
  }
}

function start() {
  console.log("s");
  img.addEventListener("animationend", next);
  img.style.animation = "ani-out 0.5s";
  img.style.opacity = "0";
  content.style.animation = "ani-out 0.5s";
  content.style.opacity = "0";
  lock = 0;
  showContent(-1);
}

function next() {
  showimg(count);
  showContent(count);
  img = document.querySelector('img');
  img.removeEventListener("animationend", next);
  content.addEventListener("animationend", end);
  img.style.animation = "ani-in 0.5s";
  img.style.opacity = "100";
  content.style.animation = "ani-in 0.5s";
  content.style.opacity = "100";
  console.log("n");
}

function end() {
  console.log("e");
  content.removeEventListener("animationend", end);
  lock = 1;
  content.style.animation = "";
}

function showimg(index) {
  const p = document.querySelector('.section');
  console.log(p);
  switch (index) {
    case 0:
      p.innerHTML = `<img src="./img/anthony.jpg" alt="" id="img">`
      break;
    case 1:
      p.innerHTML = `<img src="./img/martin.jpg" alt="" id="img">`
      break;
    case 2:
      p.innerHTML = `<img src="./img/mehdi.jpg" alt="" id="img">`
      break;
    case 3:
      p.innerHTML = `<img src="./img/mathias.jpg" alt="" id="img">`
      break;
  }
}

function showContent(index) {
  const p = document.querySelector('.content');
  console.log(p);
  switch (index) {
    case 0:
      p.innerHTML = `[上下捲動]<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat eum distinctio officiis, corporisdoloremque ducimus alias ratione eius dolorum, doloribus labore dolore nobis magnam incidunt facere et. Obcaecatiducimus inventore deserunt? Expedita aspernatur suscipit iure libero, deleniti explicabo ea reiciendis est maximealias quos similique perspiciatis laboriosam ut rerum!`
      break;
    case 1:
      p.innerHTML = `[上下捲動]<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad veniam reprehenderit officia expedita sapiente quasi aspernatur odit ut, dicta tempore quas omnis cumque suscipit dolor nihil voluptas itaque excepturi doloribus.`
      break;
    case 2:
      p.innerHTML = `[上下捲動]<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam quis harum dolor laudantium aperiam soluta quibusdam aliquid architecto fugiat! Id minus praesentium necessitatibus tempore qui officia saepe placeat facere accusamus minima aspernatur perferendis iste similique, consequatur vero aliquid sequi.`
      break;
    case 3:
      p.innerHTML = `[上下捲動]<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat tempora nisi eum cupiditate, omnis aperiam voluptatum ex impedit, et quod eveniet commodi autem amet minus quas praesentium consequatur quidem eligendi ut? Temporibus placeat voluptatum repellendus veritatis natus illum delectus accusamus quis cumque repudiandae neque quo provident sapiente reprehenderit a, quas optio ut perspiciatis fugiat voluptatibus ipsum, dolores quaerat voluptate! Et.`
      break;
  }
}