//перевірк арідключення
console.log('перевірка підключеного файлу скриптів market.js');



//отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");

let itemsArray = [

    {
        firstName: "Віталій",
        lastName: " Шатківський",
        age: 43,
        subject: "CS",
        photo: "",
        url: "",
    },

    {
        firstName: "Наталія ",
        lastName: " Венцель",
        age: 18,
        subject: "CS",
        photo: "",
        url: "", 
    },


    {
        firstName: "Наталія",
        lastName: " Кучер",
        age: 18,
        subject: "CS",
        photo: "",
        url: "", 
    },
]

//перевірка існування знайденого блоку
if (itemsDiv) {
itemsArray
.sort((a, b) => a.lastName.localeCompare(b.lastName))
.forEach((item, index) => {
    itemsDiv.innerHTML +=

    `
    <div class = "item">
    <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
    
    
    `
})



     // itemsArray.forEach((item) => {
     //     itemsDiv.innerHTML += `<div class = item>${item}</div>`
    // })


} else {
    //вивід повідомлення про незнайдений блок
    console.log('блок товарів не знайдено')
}

