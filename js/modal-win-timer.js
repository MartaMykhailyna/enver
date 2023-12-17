// document.addEventListener("DOMContentLoaded", function () {
//     // getLocation();
//     const modal = document.getElementById("modal-window");
//     const closeButton = document.getElementById("close-button");
//     const container = document.querySelector('.container');
//
//     // Show the modal window
//     modal.style.display = "block";
//     container.classList.add('blur');
//
//     // Close the modal on button click
//     closeButton.addEventListener("click", function () {
//         modal.style.display = "none";
//         container.classList.remove('blur');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо модальне вікно за ідентифікатором
    const modal = document.getElementById('modal-window');

    // Відображення модального вікна при завантаженні сторінки
    modal.style.display = 'block';

    // Отримуємо кнопку закриття за ідентифікатором
    const btnClose = document.getElementById('close-button');

    // Додаємо обробник подій для кнопки закриття
    btnClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

////////////////////////////////////////////////////////////////////////
    const nextYearContainer = document.querySelector('#year');
    const daysContainer = document.querySelector('#days');
    const hoursContainer = document.querySelector('#hours');
    const minutesContainer = document.querySelector('#minutes');
    const secondsContainer = document.querySelector('#seconds');

    const date = new Date();
    const currentYear = date.getFullYear();
    const nextYear = currentYear + 1;

    const newYearTime = new Date(`${nextYear}-01-01T00:00:00`);
    nextYearContainer.textContent = nextYear;

    function formatTimeValue(time) {
        return time < 10 ? '0' + time : time;
    }

    function insertCountdownValues({ days, hours, minutes, seconds }) {
        daysContainer.textContent = formatTimeValue(days);
        hoursContainer.textContent = formatTimeValue(hours);
        minutesContainer.textContent = formatTimeValue(minutes);
        secondsContainer.textContent = formatTimeValue(seconds);
    }

    function updateCountdown() {
        const currentTime = new Date();
        const difference = newYearTime - currentTime;

        const days = Math.floor(difference / 1000 / 60 / 60 / 24);
        const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(difference / 1000 / 60) % 60;
        const seconds = Math.floor(difference / 1000) % 60;

        insertCountdownValues({ days, hours, minutes, seconds });
    }

    setInterval(() => updateCountdown(), 1000);
////////////////////////////////
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             function(position) {
//                 alert("Your location:\nLatitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
//             },
//             // function(error) {
//             //     alert("Error getting location: " + error.message);
//             // }
//         );
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }