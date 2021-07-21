window.addEventListener("scroll", reveals);

function reveals() {
  var reveal = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveal.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveal[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveal[i].classList.add("active");
    }
  }
}
