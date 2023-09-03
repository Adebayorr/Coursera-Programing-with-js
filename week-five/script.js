const dishData = [
    {
        name: 'Spaghetti',
        price: 25
    },
    {
        name: 'Taco',
        price: 25
    },
    {
        name: 'Hamburger',
        price: 25
    },
    {
        name: 'Sharwama',
        price: 25
    },
    {
        name: 'Chicken Biryani',
        price: 25
    }
];

const tax = 1.2;

function getPrices(taxBoolean) {

    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return
        }
        console.log("Dish: ", dishData[i].name, "Price: $", finalPrice)
    }

}


//check out the reamining challenge from final JavaScript course Test and build a recipe receipt HTML page