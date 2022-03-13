window.onscroll = function() {myFunction()};

let navbar = document.querySelector('.navbar');

let sticky = navbar.offsetTop;



function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  // function myFunction() {
  //   let x = document.getElementById("logo");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }