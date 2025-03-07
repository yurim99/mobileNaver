document.addEventListener("DOMContentLoaded", function() {
    const feedPopularBtns = document.querySelectorAll('.feed-popular__btn');
    feedPopularBtns.forEach(feedPopularBtn=> {
        feedPopularBtn.addEventListener('click', function(feedPopularBtn) {
            const nextEl = this.nextElementSibling;

            this.classList.toggle('active');
            nextEl.classList.toggle('active');
            
        })
    }) 

});