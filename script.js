// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all radio buttons with the name "topic"
    const radioButtons = document.getElementsByName("topic");
    // Get the container element for the hourly rate input field
    const hourlyRateContainer = document.getElementById("hourly-rate-container");

    // Loop through each radio button and add a change event listener
    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            // Check if the value of the selected radio button is "Hiring"
            if (radio.value === "Hiring") {
                // If it's "Hiring", show the hourly rate container and make the input required
                hourlyRateContainer.style.display = "block";
                hourlyRateContainer.querySelector("input").required = true;
            } else {
                // If not "Hiring", hide the hourly rate container and make the input not required
                hourlyRateContainer.style.display = "none";
                hourlyRateContainer.querySelector("input").required = false;
            }
        });
    });

    // Get the contact form element by ID
    const contactForm = document.getElementById("contact-form");
    // Add a submit event listener to the contact form
    contactForm.addEventListener("submit", function(event) {
        // Check if the form is valid
        const valid = contactForm.checkValidity();
        if (!valid) {
            // If the form is not valid, prevent it from being submitted
            event.preventDefault();
        }
    });
});
