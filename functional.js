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
        calculate_total();
    }
};

/*  處理total_price*/
function calculate_total() {
    price = 0;
    for (const item of items_data) {
        price += item.in_user_shopping_car * item.price;
    }
    total_price.textContent = "$" + price;
}