document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.menu-line-suppe');
    const displayImage = document.getElementById('changeable-image-suppe');

    lines.forEach(line => {
        line.addEventListener('mouseover', function() {
            const imgSrc = line.getAttribute('data-img');
            displayImage.setAttribute('src', './Images/' + imgSrc);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.menu-line-salat');
    const displayImage = document.getElementById('changeable-image-salat');

    lines.forEach(line => {
        line.addEventListener('mouseover', function() {
            const imgSrc = line.getAttribute('data-img');
            displayImage.setAttribute('src', './Images/' + imgSrc);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.menu-line-pizza');
    const displayImage = document.getElementById('changeable-image-pizza');

    lines.forEach(line => {
        line.addEventListener('mouseover', function() {
            const imgSrc = line.getAttribute('data-img');
            displayImage.setAttribute('src', './Images/' + imgSrc);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.menu-line-alkohol');
    const displayImage = document.getElementById('changeable-image-alkohol');

    lines.forEach(line => {
        line.addEventListener('mouseover', function() {
            const imgSrc = line.getAttribute('data-img');
            displayImage.setAttribute('src', './Images/' + imgSrc);
        });
    });
});
