const benefitItems = document.querySelectorAll('.benefits__benefits-item');
benefitItems.forEach(item => {
    item.addEventListener('click', event => {
        let self = event.currentTarget;
        self.classList.toggle('benefits__benefits-item--open');
    });
});
const button = document.querySelector('.header__button');
const mobileNavigation = document.querySelector('.mobile-navigation');
const mobileNavigationItems = document.querySelectorAll('.mobile-navigation-list__item');
button.addEventListener('click', () => {
    mobileNavigation.classList.toggle('mobile-navigation--open');
});
mobileNavigationItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileNavigation.classList.remove('mobile-navigation--open');
    });
});