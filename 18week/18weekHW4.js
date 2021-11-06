// вторая версия с вводом заметок через инпут:

document.addEventListener('DOMContentLoaded', function() {
        JSON.parse(localStorage.getItem("savedTasks"));
        showTasks();
}) 

let tasks;

if (localStorage.getItem("savedTasks") == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("savedTasks"));
    }


let getTasks = () => {
    let task = document.getElementById("forTask").value;
    tasks.push(task);
    document.getElementById("forTask").value = "";
    saveTasks();
    showTasks();
    return tasks;
}

let saveTasks = () => {
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
    notes = JSON.parse(localStorage.getItem("savedTasks"));
}

let showTasks = () => {
    let optionString = "";
    for (let task of tasks) {
        optionString += `<div><input type='checkbox'><span>${task}</span></div>`;
    }
    document.getElementById("existingNotes").innerHTML = optionString;
}

let clearTasks = () => {
    localStorage.clear();
}

// изначальная версия с prompt:

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

