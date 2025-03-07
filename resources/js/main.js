document.addEventListener("DOMContentLoaded", function() {

    const feedPopularBtns = document.querySelectorAll('.feed-popular__btn');
    feedPopularBtns.forEach(feedPopularBtn=> {
        feedPopularBtn.addEventListener('click', function(feedPopularBtn) {
            const nextEl = this.nextElementSibling;
            
            this.classList.toggle('active');
            nextEl.classList.toggle('active');
            
        })
    }) 
    
    document.addEventListener("click", function(event) {
        const feedPopularBtns = document.querySelector('.feed-popular__btn');
        const feedPopularList = document.querySelector('.feed-popular__list');
    
        if (feedPopularBtns && !feedPopularBtns.contains(event.target)) {
            feedPopularList.classList.remove("active");
        }
    });
});