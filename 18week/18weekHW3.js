let getUserPic = () => {
    let userPic = document.getElementById('userPicInput').src;
    return userPic;
}

document.addEventListener('DOMContentLoaded', function(event) {
    let localStorageUserName = localStorage.getItem('localStorageUserName');
    if (localStorageUserName != null) {
        document.getElementById('userName').value = localStorageUserName;
    }

    if (JSON.parse(localStorage.getItem('localStorageUserPic')) == null) {
        let userPic = getUserPic();
        localStorage.setItem('localStorageUserPic', JSON.stringify(userPic));
        }
    else {
        JSON.parse(localStorage.getItem('localStorageUserPic'));
    }
})

function showUserPic(event) {
    let selectedPic = event.target.files[0];
    let reader = new FileReader();
    let imgtag = document.getElementById("userPic");
    imgtag.title = selectedPic.name;

    reader.onload = function(event) {
    imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedPic);
}

let sendComment = () => {
    let userName = document.getElementById('userName').value;

    if (localStorage.getItem('localStorageUserName') == null) {
        localStorage.setItem('localStorageUserName', userName);
    }

    let comment = document.getElementById('comment').value;
    let viagra = comment.toLowerCase().indexOf("viagra");
    let xxx = comment.toLowerCase().indexOf("xxx");

    if(viagra !== -1 || xxx !== -1) {
        let clearComment = comment.replace(/[viagra,xxx]/gi, "*");
        document.getElementById('commentBox').innerHTML += `${userName}: ${clearComment} <br>`;
        } else {
        document.getElementById('commentBox').innerHTML += `${userName}: ${comment} <br>`;
        }
}

