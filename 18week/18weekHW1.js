let errors = [];
let validateInput = (input) => {
    let validity = input.validity;
    if(validity.valueMissing) {
        errors.push ('Поле "' + input.placeholder + '" не заполнено!')
    }
}

let validateAll = () => {
    errors = [];
    let inputs = document.querySelectorAll("input"); 

    for (let input of inputs) {
        validateInput(input);
    }

    let ownerComment = document.getElementById("text").value;

    if (ownerComment == "") {
        errors.push ("Укажите комментарий!");
    }

    if(errors.length !=0) {
        document.getElementById('forErorrs').innerHTML = errors.join(', <br />');
    } else {
        alert ('Данные сохранены!');
    }
}