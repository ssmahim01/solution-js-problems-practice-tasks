// Find the friend with the smallest name.

const friendNames = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function isSmallName(names){
    let smallestName = names[0];
    for(let i = 0; i < names.length; i++){
        if(names[i].length < smallestName.length){
            smallestName = names[i];
        }
    }
    return smallestName;
}

const showResult = isSmallName(friendNames);
console.log('The friend with the smallest name is:', showResult);

// Output => The friend with the smallest name is: ron