// Description: JS for the About page

// Gallery images set in an array
const images = ["../images/aboutpage/aboutgallery1.png", "../images/aboutpage/aboutgallery2.png", "../images/aboutpage/aboutgallery3.png", "../images/aboutpage/aboutgallery4.png"];
let currentIndex = 0; // track the current image index, starts at 0

// Update images
function updateImage() {
    const galleryImage = document.getElementById('galleryImage'); // get image element
    galleryImage.src = images[currentIndex]; // set the image source
}

// event listener for previous button
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) { // Check if not the first item
        currentIndex--; // Move to the previous image
    }
    updateImage(); // update the image
});

// event listener for next button
document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < images.length - 1) { // Check if not the last item
        currentIndex++; // Move to the next image
    }
    updateImage(); // update the image
});