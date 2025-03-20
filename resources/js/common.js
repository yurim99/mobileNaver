document.addEventListener("DOMContentLoaded", function() {

    //header
    const mainSearchInput = document.querySelector('.main-search__input');
    const headerSearchInput = document.querySelector('.header-search__input');
    const headerSearchStage = document.querySelector('.header-search-stage');
    const headerBackBtn = document.querySelector('.header-search__btn.back');
    const searchClose = document.querySelector('.search-control-btn.close');
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

    function showSearchStage() {
        headerSearchStage.classList.add('active');
        headerSearchInput.focus();
        headerSearchInput.value = '';
    }
    function hideSearchStage() {
        headerSearchStage.classList.remove('active');
        mainSearchInput.value ='';
        initcontextAutoWrap();
    }
    mainSearchInput.addEventListener('click', showSearchStage)
    headerBackBtn.addEventListener('click', hideSearchStage);

    searchClose.addEventListener('click', function() {
        mainSearchInput.value ='';
        headerSearchStage.classList.remove('active');
        initcontextAutoWrap();
        contextAutoPop.classList.remove('active');
    });
    

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
    const contextAutocheck = document.getElementById('contextAuto');
    const contextAutoPop = document.querySelector('.context-auto__pop');
    const contextAutoPopClose = document.querySelector('.context-pop__close');
    contextAutocheck.addEventListener("change", function() {
        if(this.checked) {
            contextAutoPop.classList.remove('active');
        }else {
            contextAutoPop.classList.add('active');
        }
    });
    contextAutoPopClose.addEventListener('click', function() {
        contextAutoPop.classList.remove('active');
    })

    // dim
    window.dim = document.querySelector('.dim')
    window.popups = document.querySelectorAll('.popup')
    window.popClose = document.querySelectorAll('.popup__close')
    
    function showDim() {
        dim.classList.add('active');
    }

    window.hideDim = function() {
        dim.classList.remove('active');
        popups.forEach(pop => (pop.classList.remove('active')))
    }

    dim.addEventListener('click', hideDim)
    popClose.forEach(close=> {
        close.addEventListener('click', hideDim)
    })
})
