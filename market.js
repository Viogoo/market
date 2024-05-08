//перевірк арідключення
console.log('перевірка підключеного файлу скриптів market.js');



//отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");

//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу

  

        //вивід повідомлення про незнайдений блок
        console.log('блок товарів не знайдено')
    }


//Визначення масиву товарів
let itemsArray = ['', '', '', '']

console.log(itemsArray)



// Виведемо в консоль елементів масиву
for (let i = 0; i < itemsArray.length; i++){
    console.log(itemsArray[i])
}