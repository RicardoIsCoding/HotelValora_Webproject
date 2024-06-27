// Wait for the custom event before initializing the scroll to top functionality
document.addEventListener('buttonLoaded', initScrollToTop);

// Define the lastScrollPosition variable in a shared scope
let lastScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

// Function to handle scroll to top
function scrollToTop() {
    const currentScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScrollPosition > 0 && currentScrollPosition <= lastScrollPosition) {
        lastScrollPosition = currentScrollPosition;
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScrollPosition - currentScrollPosition / 8);
    }
}

// Function to initialize scroll to top functionality
function initScrollToTop() {
    document.getElementById('back-to-top').addEventListener('click', function() {
        lastScrollPosition = 99999999999999;
        scrollToTop();
    });
}

