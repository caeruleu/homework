function check() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let nickname = document.getElementById("nickname");
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeatPassword");

    document.getElementById('errorMessage').innerHTML += "";

    if (name.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваше имя не введено <br>";
        return false;
    }

    if (surname.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваша фамилия не введена <br>";
        return false;
    }

    if (nickname.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш ник не введен <br>";
        return false;
    }

    if (password.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш пароль не введен <br>";
        return false;
    }

    if (repeatPassword.value == '' || repeatPassword.value != password.value) {
        document.getElementById('errorMessage').innerHTML += "Повторите пароль <br>";
        return false;
    }

    alert('Добро пожаловать!');
}