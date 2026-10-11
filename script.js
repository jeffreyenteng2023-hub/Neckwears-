// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {
    
    // Select all images on the page
    const images = document.querySelectorAll('img');
    
    // Add an error listener to each image
    images.forEach(img => {
        img.addEventListener('error', function() {
            // If the original image fails to load, replace it with a high-quality placeholder
            this.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop';
            console.log('An image failed to load, replaced with placeholder.');
        });
    });

});