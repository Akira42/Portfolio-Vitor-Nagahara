document.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.querySelector('main'); // Select the <main> element

    mainElement.addEventListener('scroll', function() {
        var scroll = mainElement.scrollTop; // Get the vertical scroll position within the main element
        var header = document.querySelector('.header'); // Select the .header element

        if (scroll >= 60) {
            header.classList.add('scrolled'); // Adds the 'fixed' class
        } else {
            header.classList.remove('scrolled'); // Removes the 'fixed' class
        }
    });
});