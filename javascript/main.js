document.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.querySelector('main');

    mainElement.addEventListener('scroll', function() {
        var scroll = mainElement.scrollTop;
        var header = document.querySelector('.header');

        if (scroll >= 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});