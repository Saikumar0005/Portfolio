document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const navBar = document.querySelector(".nav-bar");
  
    ham.addEventListener("click", function () {
      navBar.classList.toggle("active");
    });
  });
  