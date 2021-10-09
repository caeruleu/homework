let sendComment = () => {
    let comment = document.getElementById('comment').value;
    let viagra = comment.toLowerCase().indexOf("viagra");
    let xxx = comment.toLowerCase().indexOf("xxx");

    if(viagra !== -1 || xxx !== -1) {
    let clearComment = comment.replace(/[viagra,xxx]/gi, "*");
    document.getElementById('commentBox').innerHTML += `${clearComment} <br>`;
    } else {
    document.getElementById('commentBox').innerHTML += `${comment} <br>`;
    }
}
