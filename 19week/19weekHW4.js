const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const domainFormat = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
const dateFormat = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/;
const phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

class Validator {
    isEmail(str) {
        return emailFormat.test(str);
    }

    isDomain(str) {
        return domainFormat.test(str);
    }

    isDate(str) {
        return dateFormat.test(str);
    }

    isPhone(str) {
        return phoneFormat.test(str);
    }
}

let validator = new Validator();
console.log("проверка на обычном валидаторе: " + validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

class ValidatorStatic {
    static isEmail(str) {
        return emailFormat.test(str);
    }

    static isDomain(str) {
        return domainFormat.test(str);
    }

    static isDate(str) {
        return dateFormat.test(str);
    }

    static isPhone(str) {
        return phoneFormat.test(str);
    }
}

console.log("проверка на статическом валидаторе: " + ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));


