document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.display = menuContent.style.display === 'flex' ? 'none' : 'flex';
});