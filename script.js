const countdownElement = document.getElementById("timer");
const messageElement = document.querySelector(".message");
const surpriseElement = document.getElementById("surprise");

function updateCountdown() {
    const now = new Date();
    const eventDate = new Date("2024-12-09T00:00:00");
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
        countdownElement.innerHTML = "🎉 It's Aditi's Birthday! 🎂";
        messageElement.classList.remove("hidden");
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function showSurprise() {
    surpriseElement.classList.remove("hidden");
}

setInterval(updateCountdown, 1000);
updateCountdown();
