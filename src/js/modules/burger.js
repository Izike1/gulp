// Burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

iconMenu.addEventListener('click', event => {
    if (body.classList.contains('show-sidebar')) {
        closeSidebar();
    }else {
        showSidebar();
    };
    iconMenu.classList.toggle('_active');
});

function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add('page-mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);

    body.classList.add('show-sidebar');
}

function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page-mask').remove();
}

// Burger







// if (iconMenu) {
//     iconMenu.addEventListener("click", function (e) {
//         document.body.classList.toggle('_lock');
//         iconMenu.classList.toggle('_active');
//         menuBody.classList.toggle('_active');
//     })
// }

// Burger