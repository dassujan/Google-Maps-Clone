// Set the Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoibWlob2cyNTU5MiIsImEiOiJjbGlxOW4xc2gwMzI2M21tcmdlMnZ1czB5In0.09YW2RoYWaWGqkXl1jQZsQ";

// Retrieve the user's geolocation
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

// Function called when geolocation retrieval is successful
function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

// Function called when there is an error during geolocation retrieval
function errorLocation(error) {
    console.log(error);
    setupMap([87.8628, 23.2325]);
}

// Function to set up the Mapbox map
function setupMap(center) {
    // Create a new Mapbox map instance
    const map = new mapboxgl.Map({
        container: 'map', // The ID of the div element to contain the map
        style: 'mapbox://styles/mapbox/streets-v11', // The style URL of the map
        center: center, // The center coordinates of the map
        zoom: 12 // The initial zoom level of the map
    });

    // Create a navigation control instance
    const nav = new mapboxgl.NavigationControl();
    // Add the navigation control to the map
    map.addControl(nav);

    // Create a directions control instance
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken // Set the access token for the directions control
    });

    // Add the directions control to the map, positioned at the top-left corner
    map.addControl(directions, 'top-left');
}