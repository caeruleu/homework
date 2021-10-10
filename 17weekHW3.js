let date = new Date();

let formatDate = (date) => {
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
        return "прямо сейчас";
    } else if (diffMin < 1) {
        return `${diffSec} секунд назад`;
    } else if (diffHour < 1) {
        return `${diffMin} минут назад`;
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

alert(formatDate(date));

let showAlert = () => {
    alert(formatDate(date));
}
setInterval(showAlert, 30000);
