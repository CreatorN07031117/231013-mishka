function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 13,
        center: {
            lat: 32.752357,
            lng: -79.874714
        },
        backgroundColor: '#fcfcfc'
    });
    
    var marker = new google.maps.Marker({
        map: map,
        position: {
            lat: 32.752357,
            lng: -79.874714
        },
        title: 'Fort Sumter National Monument',
        icon: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
    });
    
    // map.setCenter(marker.getPosition());
}

google.maps.event.addDomListener(window, 'load', initMap);