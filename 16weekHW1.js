function sumInput() {
let numbers = [];
let sum = 0;

for (;;) {
    let value = +prompt("введите число", '');
    numbers.push(value);
    if (!value) break; 
    sum += value;
}

numbers.sort((a,b) => a-b);

alert( 'Сумма: ' + sum );
console.log(numbers);
}