document.addEventListener('DOMContentLoaded', function() {
    // tab
    document.querySelectorAll('.how-work__item').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.how-work__item').forEach(function(tabContent) {
                tabContent.classList.remove('how-work__item-active')
            })

            document.querySelectorAll('.how-work__tab').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })

            document.querySelectorAll('.how-work__right').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })

            document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
                el.classList.add('tab-content-active')
            })

            document.querySelectorAll(`[data-path="${path}"]`).forEach((el) => {
                el.classList.add('how-work__item-active')
            })
        })
    })

    // faq
    document.querySelectorAll('.accordion__description').forEach(function(hover) {
        hover.addEventListener('mouseover', function(addHover) {
            const path = addHover.currentTarget.dataset.path
                if (path != "fifthBorder") {
                    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
                        el.classList.add('add-hover')
                    })
                } else {
                    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
                        el.classList.add('add-bottom-hover')
                    }) 
                }
            })

            hover.addEventListener('mouseout', function(removeHover) {
                const path = removeHover.currentTarget.dataset.path
                if (path != "fifthBorder") {
                    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
                        el.classList.remove('add-hover')
                    })
                } else {
                    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
                        el.classList.remove('add-bottom-hover')
                    })
                }
            })
    })

    // menu
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('menu-is-active');
        document.querySelector('body').classList.toggle('overflow');
    })
})