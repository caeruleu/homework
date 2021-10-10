let createRandomArr = () => {
let arr = []; 
    
for (let i=0;i<10;i++) {
    let random = Math.floor(Math.random()*(10 - -10)) + -10;
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

let average = mult/10;

createdArr.innerHTML = `Сгенерировали: ${arr}`;
minNumber.innerHTML = `Минимальное: ${min}`;
maxNumber.innerHTML = `Максимальное: ${max}`;
sumNumber.innerHTML = `Сумма чисел: ${sum}`;
multNumber.innerHTML = `Произведение чисел: ${mult}`;
averageNumber.innerHTML = `Среднее арифметическое: ${average}`;
}