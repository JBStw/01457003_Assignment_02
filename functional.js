/* 處理+-按鈕*/
function minus_btns_dealing(index) {
    if(items_data[index].user_select_num > 0) {
        items_data[index].user_select_num--;
        select_nums[index].textContent = items_data[index].user_select_num;
        stocks[index].textContent = "庫存:" + items_data[index].stock;
    }
};

function add_btns_dealing(index) {
    if(items_data[index].stock > 0 && items_data[index].user_select_num < items_data[index].stock) {
        items_data[index].user_select_num++;
        select_nums[index].textContent = items_data[index].user_select_num;
        stocks[index].textContent = "庫存:" + items_data[index].stock;
    }
}

function put_to_shopping_car(index) {
    if(items_data[index].user_select_num > 0) {
        items_data[index].in_user_shopping_car += items_data[index].user_select_num;
        items_data[index].stock -= items_data[index].user_select_num;
        items_data[index].user_select_num = 0;
        select_nums[index].textContent = 0;
        stocks[index].textContent = "庫存:" + items_data[index].stock;
        if(is_item_in_shopping_car[index]==0) {
            is_item_in_shopping_car[index] = 1;
            user_cart_items_page.append(create_cart_item(index));
        }
        saveData();
        calculate_total();
        refresh_all_data();
    }
};

const topic_shopping_car = document.getElementById("topic_shopping_car");
const total_price = document.getElementById("total_price");
/*  處理total_price*/
function calculate_total() {
    price = 0;
    for (const item of items_data) {
        price += item.in_user_shopping_car * item.price;
    }
    total_price.textContent = "$" + price;
    if (price==0) {
        topic_shopping_car.textContent = "目前沒有商品在購物車中";
    } else {
        topic_shopping_car.textContent = "購物車內容";
    }
}

/*動態產生購物車的項目(產生一個)*/
function create_cart_item(index) {
    const item = items_data[index];
    const cart_item = document.createElement("div");
    cart_item.className = "cart_item";
    cart_item.id = "cart_item" + (index + 1);
    const img = document.createElement("img");
    img.src = "./picture/" + item.name + ".png";
    img.alt = "pic";

    const detail = document.createElement("div");
    detail.className = "cart_item_detail";
    const title = document.createElement("p");
    title.textContent = item.name + "  $" + item.price;

    const num_box = document.createElement("div");
    const num = document.createElement("p");
    num.textContent = "數量：" + item.in_user_shopping_car;
    num_box.appendChild(num);

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "刪除";
    delete_btn.addEventListener("click", function () {
        delete_cart_item(index);
    });

    detail.appendChild(title);
    detail.appendChild(num_box);
    detail.appendChild(delete_btn);
    cart_item.appendChild(img);
    cart_item.appendChild(detail);

    return cart_item;
}

function delete_cart_item(index) {
    const item = items_data[index];

    item.stock += item.in_user_shopping_car;
    item.in_user_shopping_car = 0;
    is_item_in_shopping_car[index] = 0;

    const stock_text = document.getElementById("item" + (index + 1) + "_stock");
    if (stock_text) {
        stock_text.textContent = "庫存:" + item.stock;
    }

    const cart_item = document.getElementById("cart_item" + (index + 1));
    if (cart_item) {
        cart_item.remove();
    }
    saveData();
    calculate_total();
    refresh_all_data();
}

function refresh_all_data() {
    for(let i=0; i<items_data.length; i++) {
        select_nums[i].textContent = items_data[i].user_select_num;
        stocks[i].textContent = "庫存:" + items_data[i].stock;
        if(items_data[i].stock > 0) {
            buy_single_item_btns[i].textContent = "加入購物車"
            buy_single_item_btns[i].disabled = false;
        } else {
            buy_single_item_btns[i].textContent = "Sold Out!"
            buy_single_item_btns[i].disabled = true;
        }
    }
}