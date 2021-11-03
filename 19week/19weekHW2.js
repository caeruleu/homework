class Cat {
    constructor(ownerName, petName, breed, food, sex, comment) {
        this.ownerName = ownerName;
        this.petName = petName;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

let infoSaved = () => {
    let checked = document.querySelectorAll('input:checked');
    let usedFood = [];
    
    for(let i = 0; i < checked.length; i++) {
        usedFood.push(checked[i].value)
    }
    usedFood.pop();

    let ownerValue = document.getElementById("ownerName").value;
    let catValue = document.getElementById("petName").value;
    let catFood = usedFood;
    let list = document.getElementById('breed');
    let catBreed = list.options[list.selectedIndex].innerText;
    let ownerComment = document.getElementById("ownerComment").value;

    let genders = document.querySelectorAll('input[name = "gender"]');

    for (let gender of genders) {
        if (gender.checked) {
            var catGender = gender.value;
            break;
        }
    }

    let newCat = new Cat(ownerValue, catValue, catBreed, catFood, catGender, ownerComment);

    console.log("Хозяин: " + newCat.ownerName);
    console.log("Кот: " + newCat.petName);
    console.log("Порода: " + newCat.breed);
    console.log("Рацион:" + newCat.food);
    console.log("Пол: " + newCat.sex);
    console.log("Комментарий: " + newCat.comment);
}

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

    let ownerComment = document.getElementById("ownerComment").value;

    if (ownerComment == "") {
        errors.push ("Укажите комментарий!");
    }

    if(errors.length !=0) {
        document.getElementById('forErorrs').innerHTML = errors.join(', <br />');
    } else {
        alert ('Данные сохранены!');
        infoSaved();
    }
}