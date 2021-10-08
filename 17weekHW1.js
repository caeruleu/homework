function validateName() {
    let fullName = document.getElementById('fullName').value;

    if(!fullName) {
        alert("Заполните поле!");
        return
    }

    let fullNameClear = fullName.trim(fullName)
    let names = fullNameClear.split(" ")

    let surname = names[0];
    let Name = names[1];
    let lastname = names[2];

    let clearName = Name.trim(Name);
    let validClearName = clearName[0].toUpperCase() + clearName.toLowerCase().slice(1);

    let clearSurname = surname.trim(surname);
    let validClearSurname = clearSurname[0].toUpperCase() + clearSurname.toLowerCase().slice(1);

    let clearLastname = lastname.trim(lastname);
    let validClearLastname = clearLastname[0].toUpperCase() + clearLastname.toLowerCase().slice(1);

    console.log("Имя: "+ validClearName);
    console.log("Фамилия: "+ validClearSurname);
    console.log("Отчество: "+ validClearLastname);
}
