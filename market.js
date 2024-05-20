//перевірк арідключення
console.log('перевірка підключеного файлу скриптів market.js');



//отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");

let itemsArray = [

    {
        firstname: "Анжела",
        lastname: "Лознюк",
        age: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Наталія",
        lastname: "Зинюк",
        age: "Хімія і Біологія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Наталія",
        lastname: "Венцель",
        age: "Директор",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Лариса",
        lastname: "Забелло",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Ірина",
        lastname: "Глібко",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Ірина",
        lastname: "Боровська-Карандюк",
        age: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Василь",
        lastname: "Бабій",
        age: "Фізична культура",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Тарас",
        lastname: "Савінков",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Марія",
        lastname: "Медведєва",
        age: "Географія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Вікторія",
        lastname: "Нелипович",
        age: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Віталій",
        lastname: "Шатківський",
        age: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Іван",
        lastname: "Севрук",
        age: "Захист України",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Олена",
        lastname: "Чугунова",
        age: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Наталія",
        lastname: "Гончарук",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Діна",
        lastname: "Варганова",
        age: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/varhanova-dina-oleksandrivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Марія",
        lastname: "Гетманська",
        age: "Психолог",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Наталія",
        lastname: "Кучер",
        age: "Фізика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Олена",
        lastname: "Геча",
        age: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
        pro: "Профіль",
    },
  
]

//перевірка існування знайденого блоку
// if (itemsDiv) {
// itemsArray
// .sort((a, b) => a.lastName.localeCompare(b.lastName))
// .forEach((item, index) => {
//     itemsDiv.innerHTML +=
if (itemsDiv){
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML +=


    `
    <div class = "item">
             <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
             <p>Ім'я: ${item.lastname} ${item.firstname}</p>
             <p>Предмет: ${item.age}</p>
             <p><img src="${item.photo}" class= "user-photo"></p>
             <p href="https://lyceum.ztu.edu.ua/litsey/pedahohichnyy-kolektyv" class="link">${item.pro}</p>
             </div>
     `
})



     // itemsArray.forEach((item) => {
     //     itemsDiv.innerHTML += `<div class = item>${item}</div>`
    // })


} else {
    //вивід повідомлення про незнайдений блок
    console.log('блок товарів не знайдено')
}

