let sumPrice = () => {
    let startPrice = document.getElementById('startPrice').value;
    let engineVolume = document.getElementById('engineVolume').value;
    let enginePower = document.getElementById('enginePower').value;

    if (startPrice == "") {
        alert("введите корректные данные");
        return;
    }

    if (engineVolume == "") {
        alert("введите корректные данные");
        return;
    }

    if (enginePower == "") {
        alert("введите корректные данные");
        return;
    }

    let list = document.getElementById('carBrand');
    let carBrand = list.options[list.selectedIndex].value;

    let equipment = document.querySelector('#equipment');
    if (equipment.checked) {
        equipment.value = 1.5;
    } else {
        equipment.value = 1;
    }

    let sum = (+startPrice + +engineVolume + +enginePower + +carBrand) * equipment.value;
    let price = sum;

    let carAges = document.querySelectorAll('input[name = "carAge"]');

    for (let carAge of carAges) {
        if (carAge.checked) {
            price1 = price * parseFloat(carAge.value);
        }
    }

    let fuelTypes = document.querySelectorAll('input[name = "fuelType"]');
    for (let fuelType of fuelTypes) {
        if (fuelType.checked) {
            price2 = price1 * parseFloat(fuelType.value);
        }
    }

    let recipients = document.querySelectorAll('input[name = "recipient"]');
    for (let recipient of recipients) {
        if (recipient.checked) {
            price3 = price2 * parseFloat(recipient.value);
        }
    }

    alert("Итоговая цена: " + price3);
}