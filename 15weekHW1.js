let plus = (num1, num2) => {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    out.innerHTML = +num1 + +num2;
}

let minus = (num1, num2) => {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    out.innerHTML = +num1 - +num2;
}

let times = (num1, num2) => {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    out.innerHTML = +num1 * +num2;
}

let divide = (num1, num2) => {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    if (num2 == "0") {
        alert('на ноль делить нельзя');
    }

    out.innerHTML = +num1 / +num2;
}
