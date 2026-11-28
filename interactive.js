const enter_shopping_page_btn = document.getElementById("enter_shopping_page_btn");
const header = document.querySelector("header");
const default_page = document.getElementById("default_page");
const shopping_page = document.getElementById("shopping_page");
const nav = document.querySelector("nav");
const view_cart_items = document.getElementById("view_cart_items");

price_num = 0;

enter_shopping_page_btn.addEventListener('click', function (event) {
    header.style.display = "none";
    default_page.style.display = "none";
    shopping_page.style.display = "flex";
    nav.style.display = "flex";
    view_cart_items.style.display = "flex";
});

const normal_car_groop = document.getElementById("normal_car_groop");
const sports_car_groop = document.getElementById("sports_car_groop");
const airplain_groop = document.getElementById("airplain_groop");
const drone_groop = document.getElementById("drone_groop");
const items_page_class = document.querySelector(".items_page");

const normal_car_btn = document.getElementById("normal_car_btn");
normal_car_btn.addEventListener("click", function (event) {
    items_page_class.style.display = "none";
    normal_car_groop.style.display = "flex";
});

const sports_car_btn = document.getElementById("sports_car_btn");
normal_car_btn.addEventListener("click", function (event) {
    items_page_class.style.display = "none";
    sports_car_btn.style.display = "flex";
});

const airplain_btn = document.getElementById("sports_car_btn");
normal_car_btn.addEventListener("click", function (event) {
    items_page_class.style.display = "none";
    airplain_btn.style.display = "flex";
});

const drone_btn = document.getElementById("sports_car_btn");
normal_car_btn.addEventListener("click", function (event) {
    items_page_class.style.display = "none";
    drone_btn.style.display = "flex";
});

const cart_items_btn = document.getElementById("cart_items_btn");
const user_cart_items_page = document.getElementById("user_cart_items_page");
const total_price = document.getElementById("total_price");
const total_price_state = document.getElementById("total_price_state");
cart_items_btn.addEventListener("click", function (event) {
    if (shopping_page.style.display=="flex") {
        shopping_page.style.display = "none";
        view_cart_items.style.display = "flex";
        total_price_state.textContent = "(按一下返回)";
    } else {
        shopping_page.style.display = "flex";
        total_price_state.textContent = "查看清單";
    }
})