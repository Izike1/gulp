// Выезд меню при наведении
let menuParents = document.querySelectorAll('.menu-page__parent');
let submenuItems = document.querySelectorAll('.submenu-page__item');

for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener("mouseenter", function (e) {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener("mouseleave", function (e) {
		menuParent.classList.remove('_active');
	});
}


// Выезд меню
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e) {
	menuPageBurger.classList.toggle('_active');
	_slideToggle(menuPageBody);
});


// Подсчёт пунктов поиска chekbox
let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');

searchSelect.addEventListener("click", function (e) {
	searchSelect.classList.toggle('_active');
	_slideToggle(categoriesSearch);
});

let checkboxCategories = document.querySelectorAll('.checkbox__input');

for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("change", function (e) {
		checkboxCategory.classList.toggle('_active');

		let checkboxActiveCategories = document.querySelectorAll('.checkbox__input._active');

		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_categories');
			let searchQuantity = searchSelect.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
		} else {
			searchSelect.classList.remove('_categories');
		}
	});
}

// Прокрутка при клике на ссылку

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    } 
}
