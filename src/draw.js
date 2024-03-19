// Create a feature group to store drawn items
const drawnItems = L.featureGroup().addTo(map);

// Initialize the draw control with specific options
const drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    draw: {
        polygon: {
            color: "red"
        },
        polyline: false,
        rectangle: false,
        circle: false,
        circlemarker: false,
        marker: false,
    }
});

// Add the draw control to the map
map.addControl(drawControl);

// Event listener for when a new shape is drawn
map.on('draw:created', (event) => {
    const layer = event.layer;
    drawnItems.addLayer(layer);
});
