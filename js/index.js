// image navigation functionality 
const imageNavigationController = (() => {
    const _navLinks = document.querySelectorAll('.photo-navigation__listItem');

    _navLinks.forEach((item) => {
        item.addEventListener('click', () => {
            for(let i = 0; i < _navLinks.length; i++) {
                _navLinks[i].classList.remove('activeLink');
            }

            item.classList.add('activeLink');
        });
    });
})();