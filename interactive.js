const enter_shopping_page_btn = document.getElementById("enter_shopping_page_btn");
const header = document.querySelector("header");
const default_page = document.getElementById("default_page");
const shopping_page = document.getElementById("shopping_page");

enter_shopping_page_btn.addEventListener('click', function (event) {
    header.style.display = "none";
    default_page.style.display = "none";
    shopping_page.display = "flex";
});