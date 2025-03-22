// Get the canvas and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create Image objects for the background and foreground images
const backgroundImg = new Image();
const foreground1Img = new Image();
const foreground2Img = new Image();

// Set the source paths for the images
backgroundImg.src = 'images/background.jpg';
foreground1Img.src = 'images/foreground1.png';
foreground2Img.src = 'images/foreground2.png';

// Draw the images when they have loaded
backgroundImg.onload = function() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);  // Draw background image to cover the whole canvas

    // Draw foreground images once the background is drawn
    foreground1Img.onload = function() {
        ctx.drawImage(foreground1Img, 150, 200, 200, 200);  // Position and size of the first foreground image
    };

    foreground2Img.onload = function() {
        ctx.drawImage(foreground2Img, 450, 350, 150, 150);  // Position and size of the second foreground image
    };

    // Add text when the background and foreground images are loaded
    ctx.font = '30px Arial';  // Set font style and size
    ctx.fillStyle = 'white';  // Set text color
    ctx.fillText('Nick DeMeo', 10, 50);  // Draw your name at position (10, 50)
    ctx.fillText('Scene Project', 10, 100);  // Draw the scene title at position (10, 100)
};
