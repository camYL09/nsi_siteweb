// Overlay blanc
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var overlay = document.getElementById("overlay");
    var scrollPosition = window.scrollY;

    overlay.style.height = Math.min(scrollPosition, 100) + "px";
  });
});
