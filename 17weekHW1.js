function validateName() {
    let fullName = document.getElementById('fullName').value;

    if(!fullName) {
        alert("Заполните поле!");
        return
    }

    let fullNameClear = fullName.trim(fullName);
    let names = fullNameClear.split(" ");
    
    if(names.length != 3) {
        alert("Введите корректный ФИО!");
        return;
    }

    let surname = names[0];
    let Name = names[1];
    let lastname = names[2];

    let validSurname = surname[0].toUpperCase() + surname.toLowerCase().slice(1);
    let validName = Name[0].toUpperCase() + Name.toLowerCase().slice(1);
    let validLastname = lastname[0].toUpperCase() + lastname.toLowerCase().slice(1);

    console.log("Имя: "+ validName);
    console.log("Фамилия: "+ validSurname);
    console.log("Отчество: "+ validLastname);
}
