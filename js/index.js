window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // Tabs

    const tab = document.querySelectorAll('.portfolio__list-item'),
        list = document.querySelector('.portfolio__list'),
        tabContent = document.querySelectorAll('.portfolio__grid');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    list.addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.portfolio__list-item')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    tab.forEach((item) => {
                        item.classList.remove('active')
                    })
                    target.classList.add('active')
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Modal

    const button = document.querySelector('.button'),
        overlay = document.querySelector('.overlay'),
        closeButton = document.querySelector('.modal__close');

    button.addEventListener('click', () => {
        overlay.classList.add('active')
        document.body.style.overflow = 'hidden'
    })

    closeButton.addEventListener('click', () => {
        overlay.classList.remove('active')
        document.body.style.overflow = 'unset'
    })

    // Hamburger 

    const hamburger = document.querySelector('.header__hamburger'),
        hamburgerMenu = document.querySelector('.hamburger__menu'),
        hamburgerClose = document.querySelector('.hamburger__menu-close');

    hamburger.addEventListener('click', () => {
        hamburgerMenu.classList.add('active')
    });

    hamburgerClose.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active')
    })
})