// Description: JS for the About page

// Gallery images set in an array
const images = ["../images/aboutpage/aboutgallery1.png", "../images/aboutpage/aboutgallery2.png", "../images/aboutpage/aboutgallery3.png"]; // Add more images here
let currentIndex = 0; // track the current image index, starts at 0

// Update images
function updateImage() {
    const galleryImage = document.getElementById('galleryImage'); // get image element
    galleryImage.src = images[currentIndex]; // set the image source
}

// event listener for previous button
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // calculate the index of previous image
    updateImage(); // update the image
});

// event listener for next button
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // calculate the index of next image
    updateImage(); // update the image
});