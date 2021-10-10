let date = new Date();

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = Math.round(diffSec / 60);
    let diffHour = Math.round(diffMin / 60);

    year = year.toString().slice(-2);
    month = month < 10 ? `0` + month : month;
    dayOfMonth = dayOfMonth < 10 ? `0` + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? `0` + hour : hour;
    minutes = minutes < 10 ? `0` + minutes : minutes;

    if (diffSec <= 1) {
        return `right now`;
    } else if (diffMin < 1) {
        return `${diffSec} seconds ago`;
    } else if (diffHour < 1) {
        return `${diffMin} minutes ago`;
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

alert(formatDate(date));

function showAlert() {
    alert(formatDate(date));
}
setInterval(showAlert, 30000);