let plus = (n1, n2) => {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;

    out.innerHTML = +num1 + +num2;
}

let minus = (n1, n2) => {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;

    out.innerHTML = +num1 - +num2;
}

let times = (n1, n2) => {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;

    out.innerHTML = +num1 * +num2;
}

let divide = (n1, n2) => {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;

    out.innerHTML = +num1 / +num2;
}
