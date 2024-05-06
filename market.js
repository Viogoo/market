//перевірк арідключення
console.log('перевірка підключеного файлу скриптів market.js');



//отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");

//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv)
    console.log('поле classList:', itemsDiv.classList)
    } else {
        //вивід повідомлення про незнайдений блок
        console.log('блок товарів не знайдено')
    }


