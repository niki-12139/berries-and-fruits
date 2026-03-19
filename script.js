// script.js

// Проверка загрузки
console.log("Сайт загружен");

// Обработка формы
document.querySelector("form")?.addEventListener("submit",function(e){

e.preventDefault();

console.log("Форма отправлена");

alert("Заказ оформлен");

});