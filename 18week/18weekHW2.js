let errors = [];

let checkValidity = (input) => {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }
    
}

function check() {
    errors = [];
    let inputs = document.querySelectorAll("input");
    
    for (let input of inputs) {
        checkValidity(input);
    }

    if (repeatPassword.value != password.value) {
        errors.push('Повторите пароль');
    }
    
    if (errors.length != 0) {
        document.getElementById('errorsInfo').innerHTML = errors.join(', <br>');
    } else {
        alert('Добро пожаловать!');
    }
}