function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);

// Contact slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const sliderContent = document.querySelector('.slider-content');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const contactItems = document.querySelectorAll('.contact-item');
    const discordBtn = document.getElementById('discordBtn');
    const discordSuccess = document.getElementById('discordSuccess');
    
    let currentIndex = 0;
    const totalItems = contactItems.length;
    
    // Update slider position
    function updateSlider() {
        sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
    });
    
    // Discord button functionality
    discordBtn.addEventListener('click', function() {
        // Copy username to clipboard
        navigator.clipboard.writeText('Wuraitro')
            .then(() => {
                // Show success message
                discordSuccess.classList.add('show');
                
                // Hide after 2 seconds
                setTimeout(() => {
                    discordSuccess.classList.remove('show');
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % totalItems;
            updateSlider();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateSlider();
        }
    });
});
