function accordionFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("active") == -1) {
    x.className += " active";
  } else {
    x.className = x.className.replace(" active", "");
  }
}