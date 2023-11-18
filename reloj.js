function updateClock() {
    var now = new Date();
    var hours = now.getHours() % 12; // Convertir a formato de 12 horas
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var hourHand = document.getElementById('hour-hand');
    var minuteHand = document.getElementById('minute-hand');
    var secondHand = document.getElementById('second-hand');
    var digitalClock = document.getElementById('digital-clock');

    hourHand.style.transform = 'translate(-50%, -100%) rotate(' + (hours * 30 + minutes / 2) + 'deg)';
    minuteHand.style.transform = 'translate(-50%, -100%) rotate(' + (minutes * 6 + seconds / 10) + 'deg)';
    secondHand.style.transform = 'translate(-50%, -100%) rotate(' + (seconds * 6) + 'deg)';

    digitalClock.textContent = formatTime(hours, minutes, seconds);

    if (seconds === 0) {
        playBellSound();
    }
}

function playBellSound() {
    var bellSound = document.getElementById('bell-sound');
    bellSound.play();
}

function formatTime(hours, minutes, seconds) {
    return (
        padZero(hours) + ":" +
        padZero(minutes) + ":" +
        padZero(seconds)
    );
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

var clockContainer = document.getElementById('clock-container');
var clockBackground = document.getElementById('clock-background');

// Evento cuando el ratón entra al reloj
clockContainer.addEventListener('mouseenter', function () {
    clockBackground.style.backgroundColor = 'black';
});

// Evento cuando el ratón sale del reloj
clockContainer.addEventListener('mouseleave', function () {
    clockBackground.style.backgroundColor = 'transparent';
});

// Llama a la función para crear el reloj al cargar la página
window.onload = function () {
    setInterval(updateClock, 1000);
};
