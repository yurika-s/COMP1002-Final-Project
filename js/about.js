// Description: JS for the About page

// Gallery images set in an array
const images = ["../images/aboutpage/aboutgallery1.png", "../images/aboutpage/aboutgallery2.png", "../images/aboutpage/aboutgallery3.png", "../images/aboutpage/aboutgallery4.png"];

// Large images set in an array
const largeImages = ["../images/aboutpage/aboutgallery1b.png","../images/aboutpage/aboutgallery2b.png", "../images/aboutpage/aboutgallery3b.png", "../images/aboutpage/aboutgallery4b.png"];

let currentIndex = 0; // track the current image index, starts at 0

// Update images
function updateImage() {
    const galleryImage = document.getElementById('galleryImage'); // get image element
    const largeImage = document.getElementById('largeImage'); // get large image element
    galleryImage.src = images[currentIndex]; // set the image source
    largeImage.src = largeImages[currentIndex]; // set the large image source
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

// Event listener for gallery image click
document.getElementById('galleryImage').addEventListener('click', () => { 
    updateImage(); // update the image
    document.getElementById('imageModal').classList.add('visible'); // Show the modal
});

// Close modal function
function closeModal() {
    document.getElementById('imageModal').classList.remove('visible'); // Hide the modal
}

// Event listener for the close button in the modal
document.getElementById('closeButton').addEventListener('click', closeModal);