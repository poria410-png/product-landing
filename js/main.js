// Interactive Product Gallery
const mainDisplay = document.getElementById('gallery-display');
const thumbnails = document.querySelectorAll('.gallery-thumbs .thumb');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        // Remove active class from all thumbs
        thumbnails.forEach(t => t.classList.remove('active'));
        // Add active class to clicked thumb
        this.classList.add('active');
        // Change main image source with smooth transition effect
        mainDisplay.style.opacity = '0';
        setTimeout(() => {
            mainDisplay.src = this.src;
            mainDisplay.style.opacity = '1';
        }, 200);
    });
});