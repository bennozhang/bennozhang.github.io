document.querySelectorAll('.carousel').forEach(function(carousel) {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    function updateClasses() {
        images.forEach((img, index) => {
            img.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                img.classList.add('active');
            } else if (index === (currentIndex === 0 ? images.length - 1 : currentIndex - 1)) {
                img.classList.add('prev');
            } else if (index === (currentIndex === images.length - 1 ? 0 : currentIndex + 1)) {
                img.classList.add('next');
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateClasses();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateClasses();
    });

    updateClasses(); // Initialize with the first image
});
