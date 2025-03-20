document.addEventListener("DOMContentLoaded", function() {

    const feedAllBtns = document.querySelectorAll('.feed-popular__btn.all');
    feedAllBtns.forEach(feedAllBtn=> {
        feedAllBtn.addEventListener('click', function(feedAllBtn) {
            const nextEl = this.nextElementSibling;
            
            this.classList.toggle('active');
            nextEl.classList.toggle('active');
            
        })
    })
    
    const feedShareBtns = document.querySelectorAll('.feed-popular__btn.share');
    feedShareBtns.forEach(feedShareBtn=> {
        feedShareBtn.addEventListener('click', function() {
            dim.classList.add('active');
        })
    })
    


    document.addEventListener("click", function(event) {
        const feedAllBtns = document.querySelector('.feed-popular__btn.all');
        const feedPopularList = document.querySelector('.feed-popular__list');
    
        if (feedAllBtns && !feedAllBtns.contains(event.target)) {
            feedPopularList.classList.remove("active");
        }
    });
});