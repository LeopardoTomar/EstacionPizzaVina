document.addEventListener('DOMContentLoaded', function() {
    const grande = document.querySelector('.grande');
    const puntos = document.querySelectorAll('.punto');

    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            const posicion = index;
            const operacion = posicion * -33.3;

            grande.style.transform = `translateX(${operacion}%)`;

            puntos.forEach(punto => {
                punto.classList.remove('activo');
            });
            punto.classList.add('activo');
        });
    });
});