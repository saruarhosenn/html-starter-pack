/*============ Loader ============*/
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/* ===== Scroll Back To Top ===== */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
    mybutton.style.right = "3rem";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.right = "-10rem";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ======== Mixitup ======== */
var containerEl = document.querySelector(".container");
var mixer = mixitup(containerEl);
