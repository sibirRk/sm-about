export default function () {
    const headerMenu = document.querySelector('.v3-header-menu');

    window.addEventListener('scroll', event => {
        if (window.scrollY > 500) {
            headerMenu.classList.add('js_background');
        } else {
            headerMenu.classList.remove('js_background');
        }
    })
}