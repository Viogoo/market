//перевірк арідключення
console.log('перевірка підключеного файлу скриптів market.js');



//отримання елементу з індифікатором items
// let itemsDiv = document.getElementById("items");

let itemsArray = [
    {
        "Name": "Мотокоса",
        "sale1": 5758,
        "sale2": 4758,
        "photo": "img/мотокоса1.jpg",
        "bonusSale": 5258
    },
    {
        "Name": "Мотокоса",
        "sale1": 5137,
        "sale2": 4137,
        "photo": "img/мотокоса2.jpg",
        "bonusSale": 4637
    },
    {
        "Name": "Мотокоса",
        "sale1": 5985,
        "sale2": 4985,
        "photo": "img/бензопила1.jpg",
        "bonusSale": 5485
    },
    {
        "Name": "Мотокоса",
        "sale1": 5342,
        "sale2": 4342,
        "photo": "img/бензопила2.jpg",
        "bonusSale": 4842
    },
    {
        "Name": "Мотокоса",
        "sale1": 5619,
        "sale2": 4619,
        "photo": "img/газонокосарка1.jpg",
        "bonusSale": 5119
    },
    {
        "Name": "Мотокоса",
        "sale1": 5876,
        "sale2": 4876,
        "photo": "img/газонокосарка2.jpg",
        "bonusSale": 5376
    },
    {
        "Name": "Мотокоса",
        "sale1": 5268,
        "sale2": 4268,
        "photo": "img/торплита1.jpg",
        "bonusSale": 4768
    },
    {
        "Name": "Мотокоса",
        "sale1": 5543,
        "sale2": 4543,
        "photo": "img/торплита2.jpg",
        "bonusSale": 5043
    },
   
  
]
let itemsDiv = document.getElementById("items");


itemsArray.forEach((item, index) => {
    itemsDiv.innerHTML += 
        `
        <div class="item">
                <p>${item.Name}</p>
                <div>
                    <img class="item-image" src="${item.photo}">
                </div>
                <div class="parts-pay">
                    <div><img src="img/mololapka.png">4</div>
                    <div><img src="img/pb.jfif">8</div>
                </div>
                <div class="price">
                    <div>
                        <span>${item.sale1}</span><sup>грн</sup>
                        
                        <span>${item.sale2}</span><sup>грн</sup>
                    </div>
                </div>

                <div class="bonus">
                    <div>Ціна за купоном</div>
                    <div >
                        <span class="bonus-div">${item.bonusSale} </span>
                        <sup>грн</sup>
                    </div>
                    
                    
                </div>


            </div>
        `;
});