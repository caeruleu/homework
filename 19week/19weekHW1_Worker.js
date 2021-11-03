class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    calcSalary() {
        let salary = +this.rate * +this.days;
        return salary;
    }
}

let worker1 = new Worker("Вася", "Иванов", "25", "20")
console.log(worker1.name + " " + worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.calcSalary());