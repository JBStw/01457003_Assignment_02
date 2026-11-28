let items_data = [
    { name: "AE86", price: 2100, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "遙控越野車", price: 1800, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "四驅遙控車", price: 2400, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "布加迪", price: 3500, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "法拉利", price: 4300, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "p51d遙控飛機", price: 7400, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "飛狼遙控直升機", price: 8600, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "無人機", price: 23000, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
    { name: "迷你無人機", price: 15600, user_select_num: 0, stock: 10, in_user_shopping_car: 0 },
];

const saved = localStorage.getItem("items_data");
if (saved !== null) {
    items_data = JSON.parse(saved);
}

function saveData() {
    localStorage.setItem("items_data", JSON.stringify(items_data));
}