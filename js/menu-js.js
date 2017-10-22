  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

var link = document.querySelector (".product-offer_btn");
var popup = document.querySelector (".modal-content");
var close = popup.querySelector(".modal-content--close");

link.addEventListener("click", function(event) {
    if (popup.classList.contains("modal-content--close")) {
    popup.classList.remove("main-nav--close");
    popup.classList.add("modal-content--show");
} else {
  popup.classList.add("modal-content--close");
  popup.classList.remove("modal-content--show");
}
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content--show");
});
