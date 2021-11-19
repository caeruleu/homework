postButton.onclick = function (e) { 
    e.preventDefault();

    check();

    let user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        nickname: document.getElementById("nickname").value,
        password: document.getElementById("password").value,
        tel: document.getElementById("tel").value
    }
    
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}

let errors = [];

    let checkValidity = (input) => {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }}

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