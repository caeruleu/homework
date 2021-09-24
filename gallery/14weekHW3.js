function getImage() {
    return document.getElementById("image");
}

function previous() {
    getImage().src = "gallery/img1.jpg"
}

function next() {
    getImage().src = "gallery/img3.jpg"
}
