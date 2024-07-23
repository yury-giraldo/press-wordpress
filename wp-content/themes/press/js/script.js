
/* Menu - down */

window.addEventListener("scroll", () =>{
    const header = document.querySelector("header");
    if (window.scrollY>0){
        header.classList.add("down");
    }else{
        header.classList.remove("down");
    }
   
})

/* Countdown */

document.addEventListener('DOMContentLoaded', (event) => {
    // Fecha de destino para la cuenta regresiva (ejemplo: 1 de enero de 2025)
    const targetDate = new Date("July 5, 2024 15:00:00").getTime();

    // Función para actualizar la cuenta regresiva
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".days.--value").textContent = String(days).padStart(2, '0');
        document.querySelector(".hours.--value").textContent = String(hours).padStart(2, '0');
        document.querySelector(".minutes.--value").textContent = String(minutes).padStart(2, '0');
        document.querySelector(".seconds.--value").textContent = String(seconds).padStart(2, '0');
    }

    // Actualizar la cuenta regresiva cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Inicializar la cuenta regresiva
    updateCountdown();
});
