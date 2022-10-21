const burger = document.querySelector(".burger");
const patty = document.querySelectorAll(".patty");
const burgerMenu = document.querySelector(".navBar ul");

burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("activate");
})