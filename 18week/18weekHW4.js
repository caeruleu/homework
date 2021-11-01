let getTasks = () => {
let tasks = [];
        for (;;) {
            let task = prompt("Введи дело. Если дел больше нет, нажми отмена", '');
            tasks.push(task);
            if (!task) break; 
        }
tasks.splice(-1, 1);
return tasks;
}

let clearTasks = () => {
    localStorage.clear();
}

document.addEventListener('DOMContentLoaded', function() {
    if (JSON.parse(localStorage.getItem('savedTasks')) == null) {
        let tasks = getTasks();
        localStorage.setItem('savedTasks', JSON.stringify(tasks));
        }
    else {
        JSON.parse(localStorage.getItem('savedTasks'));
    }
    
    let tasks = JSON.parse(localStorage.getItem("savedTasks"));
    let optionString = "";
    for (let task of tasks) {
        optionString += `<div><input type='checkbox'><span>${task}</span></div>`;
    }
    document.getElementById('container').innerHTML = optionString;
}) 

