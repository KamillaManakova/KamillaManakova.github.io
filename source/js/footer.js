var acc = document.getElementsByClassName("footer__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Переключение между добавлением и удалением класса "active",
    чтобы выделить кнопку, управляющую панелью */
    this.classList.toggle("active");

    /* Переключение между скрытием и отображением активной панели */
    var footer__panel = this.nextElementSibling;
    if (footer__panel.style.display === "block") {
      footer__panel.style.display = "none";
    } else {
      footer__panel.style.display = "block";
    }
  });
}