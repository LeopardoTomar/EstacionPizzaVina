// JavaScript para cargar el mapa
function initMap() {
    // Coordenadas de la ubicación de la pizzería
    var pizzeriaLocation = {lat: -33.022891, lng: -71.550749};
    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Nivel de zoom
        center: pizzeriaLocation // Centrar el mapa en la ubicación de la pizzería
    });
    // Marca de la ubicación de la pizzería en el mapa
    var marker = new google.maps.Marker({
        position: pizzeriaLocation,
        map: map
    });
}