// BLOCK SCOPE

if (10 >5) {
    const printedMessage =  'Het is waar!';
}

for(let i = 0; i < 10; i++) {
    const printedMessage = 'Het is een loop!';
}

let profit = 0;

for(let i = 0; i < 10; i++) {
    profit = profit + 2;
}

console.log(profit);

// scope bij functies werkt net even anders

function calcualatePorfit(){
    const profit = 40;
    return profit;
}


const globalProfit = calcualatePorfit();
console.log(globalProfit);