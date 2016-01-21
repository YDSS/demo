function init() {
    const geoL = navigator.geolocation;
    let $output = document.getElementById('output');

    geoL.getCurrentPosition(position => {
        $output.textContent = `longitude: ${position.coords.longitude}, latitude: ${position.coords.latitude}`;
    }, err => {
        $output.textContent = err.message;
    }, {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 25000
    });
}

init();
