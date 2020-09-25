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
