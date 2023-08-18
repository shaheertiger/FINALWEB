document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.getElementsByName("topic");
    const hourlyRateContainer = document.getElementById("hourly-rate-container");

    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "Hiring") {
                hourlyRateContainer.style.display = "block";
                hourlyRateContainer.querySelector("input").required = true;
            } else {
                hourlyRateContainer.style.display = "none";
                hourlyRateContainer.querySelector("input").required = false;
            }
        });
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        const valid = contactForm.checkValidity();
        if (!valid) {
            event.preventDefault();
        }
    });
});
