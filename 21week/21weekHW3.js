postButton.onclick = function (e) {
    e.preventDefault();
    
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: new FormData(formCat),
        headers: {
            "Content-Type": "application/x-ww-form-urlencoded; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}