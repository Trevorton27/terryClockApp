function displayTime() {
    const time = new Date();
    let hour = time.getHours();
    const minute = renderLeadingZero(time.getMinutes());
    const second = renderLeadingZero(time.getSeconds());
    const isAm = hour < 12 || hour === 0;
    const amPm = isAm ? 'AM' : 'PM';

    document.getElementById('clockHour').textContent = `${formatHour(
        hour
    )}:${minute}:${second} ${amPm}`;
}

function renderLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
    hour = hour >= 13 ? hour - 12 : hour;
    hour = hour === 0 ? hour + 12 : hour;

    return hour;
}

function displayDate() {
    const theDate = new Date();

    const day = days[theDate.getDay()];
    const date = appendDateSuffix(theDate.getDate());
    const month = months[theDate.getMonth()];
    const year = theDate.getFullYear();

    document.getElementById(
        'clockDate'
    ).textContent = `${day}, ${month} ${date}, ${year}`;
}

function appendDateSuffix(date) {
    if (date < 10 || date > 20) {
        switch (date % 10) {
            case 1:
                return `${date}st`;
            case 2:
                return `${date}nd`;
            case 3:
                return `${date}rd`;
        }
    }
    return `${date}th`;
}

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

setInterval(function () {
    displayTime();
    displayDate();
}, 1000);

displayTime();
displayDate();
