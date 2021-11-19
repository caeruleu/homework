function search() {
    let gifTag = document.getElementById("gifTag").value;

    fetch ("http://api.giphy.com/v1/gifs/search?q="+gifTag+"&api_key=306AtltnWT44FX6p5kgJpGVT8a5XnrVe&limit=5")
    .then(response => response.json())
    .then(gif => {
    document.getElementById("gif1").src = gif.data[0].images.original.url
    document.getElementById("gif2").src = gif.data[1].images.original.url
    document.getElementById("gif3").src = gif.data[2].images.original.url
    document.getElementById("gif4").src = gif.data[3].images.original.url
    document.getElementById("gif5").src = gif.data[4].images.original.url})
    .catch(error => console.log(error));
}