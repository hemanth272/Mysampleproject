// Dashboard Toggle
const dashboardBtn = document.getElementById("dashboardBtn");
const dashboardMenu = document.getElementById("dashboardMenu");

dashboardBtn.addEventListener("click", () => {
    if (dashboardMenu.style.display === "block") {
        dashboardMenu.style.display = "none";
    } else {
        dashboardMenu.style.display = "block";
    }
});

// Slider Logic
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");

let index = 0;

function slideBanner() {
    index++;

    slider.style.transition = "transform 2.0s linear";
    slider.style.transform = `translateX(-${index * 100}%)`;

    // After reaching cloned slide
    if (index === slides.length - 1) {
        setTimeout(() => {
            slider.style.transition ="none";
            index = 0;
            slider.style.transform = `translateX(0)`;
        },2500);
    }
}

// Slide every 4 seconds
setInterval(slideBanner, 5000);