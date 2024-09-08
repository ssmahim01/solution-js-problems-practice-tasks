// Calculate the total budget required to buy electronics.

const costPerLaptop = 35000;
const costPerTablet = 15000;
const costPerMobile = 20000;

function calculateElectronicsBudget(numLaptops, numTablets, numMobiles){
    const costLaptops = numLaptops * costPerLaptop;
    const costTablets = numTablets * costPerTablet;
    const costMobiles = numMobiles * costPerMobile;

    const totalBudget = costLaptops + costTablets + costMobiles;
    return totalBudget;
}

const calculateBudget = calculateElectronicsBudget(1, 3, 5);
console.log('Total budget required:', calculateBudget, 'tk');

// Output => Total budget required: 180000 tk