window.addEventListener('DOMContentLoaded', function() {
    // let tabs = document.querySelectorAll('.tabheader__item'),
    //     tabHeader = document.querySelector('.tabheader__items'),
    //     tabContent = document.querySelectorAll('.tabcontent')

    // function hideTabContent(){
    //     tabContent.forEach(item => {
    //         item.classList.add('none')
    //         item.classList.remove('show', 'fade')
    //     })
    //     tabs.forEach(item => {
    //         item.classList.remove('tabheader__item_active')
    //     })
    // }

    // function showTabContent(i = 0) {
    //     tabContent[i].classList.add('show', 'fade')
    //     tabContent[i].classList.remove('none')
    //     tabs[i].classList.add('tabheader__item_active')
    // }
    
    // hideTabContent()
    // showTabContent()

    // tabHeader.addEventListener('click', (item) => {
    //     if (item.target && item.target.classList.contains('tabheader__item')) {
    //         tabs.forEach((tab, k) => {
    //             if (item.target == tab) {
    //                 hideTabContent()
    //                 showTabContent(k)
    //             }
    //         })
    //     }
    // })

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabHeader = document.querySelector('.tabheader__items')
        tabContent = document.querySelectorAll('.tabcontent')

    function hideTabContent(){
        tabContent.forEach(item => {
            item.classList.add('none')
            item.classList.remove('show', 'fade')
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0){
        tabContent[i].classList.add('show', 'fade')
        tabContent[i].classList.remove('none')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabHeader.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (event.target == tab) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
})