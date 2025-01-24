// Create a feature group to store drawn items
const drawnItems = L.featureGroup().addTo(map);

// Initialize the draw control with specific options
const drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    draw: {
        polygon: {
            color: "red" // Default color, will be overridden based on user choice
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

    // Allow the user to select a label from a predefined list
    const label = prompt("Choose a label for this polygon: (Enter 'bris' or 'rfsu')");

    // Validate the user's input
    if (label === "bris" || label === "rfsu") {
        // Set the polygon's color based on the user's choice
        const color = label === "bris" ? "blue" : "Red"; // Blue for 'bris', Red for 'rfsu'
        layer.setStyle({ color: color });

        // Add the label to the polygon on hover
        layer.bindTooltip(label); // Tooltip appears on hover by default

        // Add the layer to the feature group
        drawnItems.addLayer(layer);
    } else {
        alert("Invalid input. Only 'bris' or 'rfsu' are allowed.");
    }
});

