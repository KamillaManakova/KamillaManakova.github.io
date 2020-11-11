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

'use strict';

(function () {
  var maskedInputs = document.querySelectorAll('input[data-inputmask]');

  var applyMask = function () {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute('data-inputmask')
      };

      IMask(input, maskOption);
    });
  };

  applyMask();

})();

function openForm() {
  document.getElementById("popup").style.display = "block";
  document.body.classList.add("without_scroll");
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("without_scroll");
}
