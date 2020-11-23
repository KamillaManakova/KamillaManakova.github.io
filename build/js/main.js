function accordionFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("active") == -1) {
    x.className += " active";
  } else {
    x.className = x.className.replace(" active", "");
  }
}

function plusFunction(id) {
  var y = document.getElementById(id);
  if (y.className.indexOf("opened") == -1) {
    y.className += " opened";
  } else {
    y.className = y.className.replace(" opened", "");
  }
}

"use strict";

(function () {
  var maskedInputs = document.querySelectorAll("input[data-inputmask]");

  var applyMask = function () {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute("data-inputmask")
      };

      IMask(input, maskOption);
    });
  };

  applyMask();

})();

"use strict";

(function () {
  var KEYCODE = {
    esc: 27
  };

  var link = document.querySelector(".menu__button");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".popup__cancel");
  var form = popup.querySelector(".popup__form");
  var userName = popup.querySelector("#name");
  var phone = popup.querySelector("#phone");
  var query = popup.querySelector("#query");
  var isStorageSupport = true;
  var storage = {};

  var openPopup = function () {
    popup.classList.add("popup__show");
    document.body.classList.add("without_scroll");
  };

  var closePopup = function () {
    popup.classList.remove("popup__show");
    document.body.classList.remove("without_scroll");
  };

  try {
    storage.name = localStorage.getItem("name");
    storage.phone = localStorage.getItem("phone");
    storage.query = localStorage.getItem("query");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    openPopup();

    if (storage.name) {
      userName.value = storage.name;
      phone.value = storage.phone;
      query.value = storage.query;
      query.focus();
    } else {
      userName.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    closePopup();
  });

  form.addEventListener("submit", function () {
    if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("query", query.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === KEYCODE.esc) {
      evt.preventDefault();
      if (popup.classList.contains("popup__show")) {
        closePopup();
      }
    }
  });

  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });

})();

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
