fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(responce => responce.json())
.then(nasa => {
    console.log(nasa);
    document.getElementById("date").innerText = "Сегодня: " + nasa.date;
    document.getElementById("message").innerText = "Сообщение от NASA: " + nasa.explanation;
    document.getElementById("url").innerText = "Ссылка на картинку: " + nasa.url;
    document.getElementById("todayPicNasa").src = nasa.hdurl;
})
.catch(err => console.log(err));