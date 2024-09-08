// Find the lowest number in the array.

const heights2 = [167, 190, 120, 165, 137];

function isHeight(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const lowestNum = isHeight(heights2);
console.log('The lowest number is:', lowestNum);

// Output => The lowest number is: 120