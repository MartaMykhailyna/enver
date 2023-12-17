document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const btnBurger = document.querySelector('.navbar-toggler');

    function updateHeader() {
        if (window.scrollY > 10 && !header.classList.contains('dark-background')) {
            header.classList.add("active");
        } else if (window.scrollY <= 10) {
            header.classList.remove("active");
        }
    }

    function toggleDarkBackground() {
        header.classList.toggle('dark-background');
        header.classList.toggle('active');
    }

    window.addEventListener("scroll", updateHeader);

    if (window.innerWidth < 992) {
        btnBurger.addEventListener('click', toggleDarkBackground);
    }
});
