window.onscroll = function () {
  myFunction();
};

const navbar = document.querySelector(".navbar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const hambergur = document.getElementById("hamburger");
const navUl = document.querySelector(".nav-list");

hambergur.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
