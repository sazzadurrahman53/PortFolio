window.onscroll = scrollShowNav;
let navEle = document.getElementsByTagName("nav")[0];
let stickyTop = navEle.offsetTop;

function scrollShowNav() {
  if (window.pageYOffset >= stickyTop) {
    navEle.classList.add("fixed");
  } else {
    console.log("WOW");
    navEle.classList.remove("fixed");
  }
}

const hambergur = document.getElementById("hamburger");
const navUl = document.querySelector(".navlist");

hambergur.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
