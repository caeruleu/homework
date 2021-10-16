let createRandomArr = () => {
let arr = []; 
const numAmount = 10;
    
for (let i=0;i<numAmount;i++) {
    let random = Math.floor(Math.random()*(numAmount - -numAmount)) + -numAmount;
    arr.push(random);
}

let min = Math.min.apply(null, arr);
let max = Math.max.apply(null, arr);

let sum = 0;

for(let i=0; i<arr.length;i++) {
    sum = sum + arr[i];
}

let mult = 1;

for(let i=0;i<arr.length;i++) {
    mult = mult * arr[i]; 
}

let average = mult/numAmount;

createdArr.innerHTML = `Сгенерировали: ${arr}`;
minNumber.innerHTML = `Минимальное: ${min}`;
maxNumber.innerHTML = `Максимальное: ${max}`;
sumNumber.innerHTML = `Сумма чисел: ${sum}`;
multNumber.innerHTML = `Произведение чисел: ${mult}`;
averageNumber.innerHTML = `Среднее арифметическое: ${average}`;
}
