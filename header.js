let lastScrollTop = 0;
const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
        // Scroll hacia abajo
        header.style.top = `-${headerHeight}px`;
    } else {
        // Scroll hacia arriba o en la parte superior de la página
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Asegura que lastScrollTop no sea negativo

    if (currentScroll <= 0) {
        // Si el usuario está en la parte superior de la página
        header.style.top = "0";
    }
});