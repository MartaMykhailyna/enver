
function simpleCounter(element, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.ceil(progress * (end - 0));

        element.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Call the simpleCounter function for each element
const number1 = document.getElementById('number1');
simpleCounter(number1, 60, 800);

const number2 = document.getElementById('number2');
simpleCounter(number2, 20, 1000);

const number3 = document.getElementById('number3');
simpleCounter(number3, 4, 1500);

const number4 = document.getElementById('number4');
simpleCounter(number4, 1, 1000);