// Returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
        const sum = phones.reduce((sum, phone) => sum + phone.price, 0);
        const average = sum / phones.length;
        return Math.round(average);
    }

const averagePhone = findAveragePhonePrice(phones);
console.log('The average price of phone', averagePhone);

// Output => The average price of phone 58167