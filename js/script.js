
window.addEventListener('load', function () {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    document.body.style.overflow = 'auto'; // Restore scrolling after content is loaded
});
