const arrSuperheroesJson = JSON.stringify(arrSuperheroes);

document.addEventListener("DOMContentLoaded", function (event) {
    const Superheroes = JSON.parse(arrSuperheroesJson);
    let content = "";
    
    for (let i = 0; i < Superheroes.length; i++) {
        let superhero = Superheroes[i];
        let ratings = JSON.parse(localStorage.getItem("ratings"));

        if (ratings) {
        content += `
        <div class="card col-4">
                    <img class="cardImg" src="${superhero.picture}" alt="супергерой">
                    <div class="cardBody">
                        <h5 class="cardTitle"></h5>
                        <p class="name">Имя: ${superhero.name}</p>
                        <p class="universe">Вселенная: ${superhero.universe}</p>
                        <p class="alterEgo">Альтер эго: ${superhero.alterEgo}</p>
                        <p class="occupation">Род деятельности: ${superhero.occupation}</p>
                        <p class="friends">Друзья: ${superhero.friends}</p>
                        <p class="superpowers">Суперсилы: ${superhero.superpowers}</p>
                        <p class="rating">Оценка: ${ratings[i]}</p>
                    </div>
                </div>
        `} else {
            content += `
        <div class="card col-4">
                    <img class="cardImg" src="${superhero.picture}" alt="супергерой">
                    <div class="cardBody">
                        <h5 class="cardTitle"></h5>
                        <p class="name">Имя: ${superhero.name}</p>
                        <p class="universe">Вселенная: ${superhero.universe}</p>
                        <p class="alterEgo">Альтер эго: ${superhero.alterEgo}</p>
                        <p class="occupation">Род деятельности: ${superhero.occupation}</p>
                        <p class="friends">Друзья: ${superhero.friends}</p>
                        <p class="superpowers">Суперсилы: ${superhero.superpowers}</p>
                        <label for="rating">Поставьте оценку:</label>
                        <input type="number" class="rating" min=1 max=10 />
                        <button onclick="saveRatings()">Сохранить</button>
                    </div>
                </div>`
        }}
    document.getElementById("superheroGallery").innerHTML = content;
});

let saveRatings = () => {
    let arrRatings = [];
    let arrInputs = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        arrInputs.push(input);
    }

    for (let i = 0; i < arrInputs.length; i++) {
        arrRatings.push(Number(arrInputs[i].value));
    }
    
    localStorage.setItem("ratings", JSON.stringify(arrRatings));
}
