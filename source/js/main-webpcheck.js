document.addEventListener("DOMContentLoaded", function() {
  testWebP(document.querySelector(".header-menu-fon"))
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add("webp-true") : elem.classList.add("webp-false")
  }
  console.log(webP)
}

document.addEventListener("DOMContentLoaded", function() {
  testWebP(document.querySelector(".header__item:last-child"))
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add("webp-true") : elem.classList.add("webp-false")
  }
  console.log(webP)
}

document.addEventListener("DOMContentLoaded", function() {
  testWebP(document.querySelector(".services__production"))
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add("webp-true") : elem.classList.add("webp-false")
  }
  console.log(webP)
}

document.addEventListener("DOMContentLoaded", function() {
  testWebP(document.querySelector(".services__montage"))
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add("webp-true") : elem.classList.add("webp-false")
  }
  console.log(webP)
}

document.addEventListener("DOMContentLoaded", function() {
  testWebP(document.querySelector(".services__complect"))
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add("webp-true") : elem.classList.add("webp-false")
  }
  console.log(webP)
}
