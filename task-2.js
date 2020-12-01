let total
const ordered = 99;

if (ordered <= 100) { 
    total = `Заказ оформлен, с вами свяжется менеджер`;
} else {
    total = `На складе недостаточно товаров!`;
}
console.log(total);