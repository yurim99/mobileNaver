document.addEventListener("DOMContentLoaded", function() {

    //header
    const mainSearchInput = document.querySelector('.main-search__input');
    const headerSearchInput = document.querySelector('.header-search__input');
    const headerSearchStage = document.querySelector('.header-search-stage');
    const headerBackBtn = document.querySelector('.header-search__btn.back');
    const searchClose = document.querySelector('.search-control-btn.close');
    
    function showSearchStage() {
        headerSearchStage.classList.add('active');
        headerSearchInput.focus();
    }
    function hideSearchStage() {
        headerSearchStage.classList.remove('active');
    }
    mainSearchInput.addEventListener('click', showSearchStage)
    headerBackBtn.addEventListener('click', hideSearchStage)
    searchClose.addEventListener('click', hideSearchStage);
    

    //search
    const searchAutoSave = document.getElementById('searchAutoSave');
    
    searchAutoSave.addEventListener('click', function() {
        const activeAutoSave = searchAutoSave.classList.contains('on')
        if(activeAutoSave) {
            const result = confirm('최근검색어 저장 기능을 사용 중지하시겠습니까?');
            if(result) {
                searchAutoSave.classList.remove('on')
                searchAutoSave.classList.add('off')
            }else {
            }
        } else {
            searchAutoSave.classList.remove('off')
            searchAutoSave.classList.add('on')
        }
    })

    const headerSearchBase = document.querySelector('.header-search__base');
    const searchHistroyList = document.querySelector('.search-histroy__lists');
    const contextAutoWrap = document.querySelector('.context-auto-stage');
    const headerSearchDelBtn = document.querySelector('.header-search__btn.delete');
    
    function initcontextAutoWrap() {
        headerSearchBase.classList.remove('hide')
        searchHistroyList.classList.remove('show')
        contextAutoWrap.classList.remove('show')
        headerSearchDelBtn.classList.remove('active')
    }

    headerSearchInput.addEventListener('input', function(){
        if(headerSearchInput.value.trim()  !=="") {
            headerSearchBase.classList.add('hide')
            searchHistroyList.classList.add('show')
            contextAutoWrap.classList.add('show')
            headerSearchDelBtn.classList.add('active')
        } else {
            initcontextAutoWrap()
        }
    })
    headerSearchDelBtn.addEventListener('click', function() {
        headerSearchInput.value = '';
        initcontextAutoWrap()
    }
)
    const contextAutoPop = document.querySelector('.context-auto__pop');
    contextAutoPop
})