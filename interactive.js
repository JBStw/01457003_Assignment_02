const enter_shopping_page_btn = document.getElementById("enter_shopping_page_btn");
const header = document.querySelector("header");
const default_page = document.getElementById("default_page");
const shopping_page = document.getElementById("shopping_page");
const nav = document.querySelector("nav");
const view_cart_items = document.getElementById("view_cart_items");
const user_cart_items_page = document.getElementById("user_cart_items_page");

let price_num = 0;
let is_item_in_shopping_car = [];
for (const item of items_data) {
    if(item.in_user_shopping_car > 0) {
        is_item_in_shopping_car.push(1);
        user_cart_items_page.append(create_cart_item(is_item_in_shopping_car.length-1));
    } else {
        is_item_in_shopping_car.push(0);
    }
}
calculate_total();

/*進入採購*/
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
const items_page_class = document.querySelectorAll(".items_page");

const cart_items_btn = document.getElementById("cart_items_btn");

const total_price_state = document.getElementById("total_price_state");
/*商品分頁*/
const normal_car_btn = document.getElementById("normal_car_btn");
normal_car_btn.addEventListener("click", function (event) {
    for(const page of items_page_class) {
        page.style.display = "none";
    }
    normal_car_groop.style.display = "flex";
    shopping_page.style.display = "flex";
    total_price_state.textContent = "查看清單";
});

const sports_car_btn = document.getElementById("sports_car_btn");
sports_car_btn.addEventListener("click", function (event) {
    for(const page of items_page_class) {
        page.style.display = "none";
    }
    sports_car_groop.style.display = "flex";
    shopping_page.style.display = "flex";
    total_price_state.textContent = "查看清單";
});

const airplain_btn = document.getElementById("airplain_btn");
airplain_btn.addEventListener("click", function (event) {
    for(const page of items_page_class) {
        page.style.display = "none";
    }
    airplain_groop.style.display = "flex";
    shopping_page.style.display = "flex";
    total_price_state.textContent = "查看清單";
});

const drone_btn = document.getElementById("drone_btn");
drone_btn.addEventListener("click", function (event) {
    for(const page of items_page_class) {
        page.style.display = "none";
    }
    drone_groop.style.display = "flex";
    shopping_page.style.display = "flex";
    total_price_state.textContent = "查看清單";
});
/*查看購物車*/
cart_items_btn.addEventListener("click", function (event) {
    if (shopping_page.style.display=="flex") {
        shopping_page.style.display = "none";
        view_cart_items.style.display = "flex";
        user_cart_items_page.style.display = "flex";
        total_price_state.textContent = "(按一下返回)";
    } else {
        shopping_page.style.display = "flex";
        user_cart_items_page.style.display = "none";
        total_price_state.textContent = "查看清單";
    }
})
/*商品+-細項處理*/
const minus_btns = [];
const add_btns = [];
const select_nums = [];
const stocks = [];
const buy_single_item_btns = [];

for (let i = 1; i <= items_data.length; i++) {
    minus_btns.push(document.getElementById("item" + i + "_minus"));
    add_btns.push(document.getElementById("item" + i + "_add"));
    select_nums.push(document.getElementById("item" + i + "_select_num"));
    stocks.push(document.getElementById("item" + i + "_stock"));
    buy_single_item_btns.push(document.getElementById("item" + i + "_buy"));
};

minus_btns.forEach((btn, index) => {
  if (btn) {
    btn.addEventListener("click", () => {
        minus_btns_dealing(index);
    });
  }
});

add_btns.forEach((btn, index) => {
  if (btn) {
    btn.addEventListener("click", () => {
        add_btns_dealing(index);
    });
  }
});

buy_single_item_btns.forEach((btn, index) => {
  if (btn) {
    btn.addEventListener("click", () => {
        put_to_shopping_car(index);
    });
  }
});

/*refresh功能*/
const refresh_btn = document.getElementById("refresh_btn");
refresh_btn.addEventListener("click", function (event) {
    refresh_all_data();
    calculate_total();
    saveData();
});