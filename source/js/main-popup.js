function openForm() {
  document.getElementById("popup").style.display = "block";
  document.body.classList.add("without_scroll");
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("without_scroll");
}
