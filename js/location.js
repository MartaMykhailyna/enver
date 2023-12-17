function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert("Your location:\nLatitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
            },
            // function(error) {
            //     alert("Error getting location: " + error.message);
            // }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}