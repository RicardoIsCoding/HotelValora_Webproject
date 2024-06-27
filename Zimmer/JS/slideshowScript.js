const largeImage = document.getElementById('largeImage');
const largeImageHref = document.getElementById('largeImageHref');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

// Function to display the clicked thumbnail as the large image
function showImage(element) {
    largeImage.src = element.src;
    currentIndex = Array.from(thumbnails).indexOf(element);
    largeImageHref.href = element.dataset.section;
}

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    const nextThumbnail = thumbnails[currentIndex];
    largeImage.src = nextThumbnail.src;
    largeImageHref.href = nextThumbnail.dataset.section;
}

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    const prevThumbnail = thumbnails[currentIndex];
    largeImage.src = prevThumbnail.src;
    largeImageHref.href = prevThumbnail.dataset.section;
}

// Event listeners for navigation buttons
document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPrevImage);

// Event listener for large image link to scroll to the section
largeImageHref.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.href.substring(this.href.indexOf('#')));
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
