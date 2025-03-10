document.addEventListener("DOMContentLoaded", function() {
    const mainSearchInput = document.querySelector('.main-search__input');
    const headerSearchStage = document.querySelector('.header-search-stage');
    const headerBackBtn = document.querySelector('.header-search__btn.back');

    function showSearchStage() {
        headerSearchStage.classList.add('active');
    }
    function hideSearchStage() {
        headerSearchStage.classList.remove('active');
    }
    mainSearchInput.addEventListener('click', showSearchStage)
    headerBackBtn.addEventListener('click', hideSearchStage)
})