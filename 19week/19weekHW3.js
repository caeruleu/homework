class Calc {
    static getNum1() {
        let number1 = document.getElementById("num1").value;
        return number1;
    }

    static getNum2() {
        let number2 = document.getElementById("num2").value;
        return number2;
    }

    static sum() {
        document.getElementById("out").innerText = +Calc.getNum1() + +Calc.getNum2();
    }

    static substr() {
        document.getElementById("out").innerText = +Calc.getNum1() - +Calc.getNum2();
    }

    static mult() {
        document.getElementById("out").innerText = +Calc.getNum1() * +Calc.getNum2();
    }

    static divide() {
        if (Calc.getNum2() == 0) {
            alert('на ноль делить нельзя');
            return;
        }
        document.getElementById("out").innerText = +Calc.getNum1() / +Calc.getNum2();
    }
}