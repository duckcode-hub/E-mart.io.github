// handle the hamburger menu and the navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar) {
    // check if the menu is closed and if it is then  opene
    bar.addEventListener('click',() => {
        nav.classList.add('active');
        //add some css for the class active in the css
    });
}
if(close) {
    // check if the menu is opened and if it is opened then close 
    close.addEventListener('click',() => {
        nav.classList.remove('active');
        //add some css for the class active in the css
    });
}
//========================================================
// change image 
// JavaScript to change the hero image dynamically
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let currentIndex = 0;

function changeImage() {
    const imageElement = document.getElementById("changing-image");
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    imageElement.style.opacity = 0; // Fade out effect

    setTimeout(() => {
        imageElement.src = images[currentIndex]; // Change the image
        imageElement.style.opacity = 1; // Fade in effect
    }, 500); // Wait for fade out to complete
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
