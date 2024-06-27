// Wait for the DOM to be fully loaded before inserting the footer
document.addEventListener('DOMContentLoaded', loadButton);

// Function to load the "go to top" button
function loadButton() {
    fetch('../GLOBAL_HTML/backToTopButton.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('back-to-top-button').innerHTML = data;
            // Dispatch a custom event to signal that the button has been loaded
            document.dispatchEvent(new Event('buttonLoaded'));
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

