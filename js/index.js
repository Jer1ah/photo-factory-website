// image navigation functionality 
const imageNavigationController = (() => {

    const _navLinks = document.querySelectorAll('.photo-navigation__listItem');
    const _galleryItems = document.querySelectorAll('.gallery__listItem');


    _navLinks.forEach((item) => {
        item.addEventListener('click', () => {
            for(let i = 0; i < _navLinks.length; i++) {
                _navLinks[i].classList.remove('activeLink');
            }

            item.classList.add('activeLink');
        });
    });

    _navLinks[0].addEventListener('click', () => {
        _galleryItems[0].style.display = "none";
    });

})();

// image shuffle sort functionality
const imageShuffleController = (() => {

    const _navLinks = document.querySelectorAll('.photo-navigation__listItem');
    const _galleryItems = document.querySelectorAll('.gallery__listItem');

    const filterImageList = (keyword) => {
        for(let i = 0; i < _galleryItems.length; i++) {
            if(_galleryItems[i].classList.contains(keyword)) {
                _galleryItems[i].style.display = "inline-block";
            } else {
                _galleryItems[i].style.display = "none";
            }
        }
    };

    _navLinks.forEach((item) => {
        item.addEventListener('click', () => {
            switch(item.firstElementChild.innerHTML.toLocaleLowerCase()) {
                case 'all':
                    filterImageList('all');
                    return;
                case 'art':
                    filterImageList('art');
                    return;
                case 'commercial':
                    filterImageList('commercial');
                    return;
                case 'design':
                    filterImageList('design');
                    return;
                case 'misc':
                    filterImageList('misc');
                    return;
                case 'aesthetic':
                    filterImageList('aesthetic');
                    return;
                case 'photography':
                    filterImageList('photography');
                    return;
                case 'tech':
                    filterImageList('tech');
                    return;
                default:
                    return;
            }
        });
    });

})();