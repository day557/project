function downloadGeoJson() {
    var geoJson = drawnItems.toGeoJSON();
    return JSON.stringify(geoJson);
}

L.Control.Button = L.Control.extend({
    options: {
        position: "topleft",
    },
    onAdd: function (map) {
        var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
        var button = L.DomUtil.create("a", "leaflet-control-button", container);
        L.DomEvent.disableClickPropagation(button);

        var img = L.DomUtil.create("img", "leaflet-control-img", button);
        img.src = "/images/download.svg";
        img.style.padding = "5px";

        button.style.cursor = "pointer";

        L.DomEvent.on(button, "click", function () {
            var geoJson = downloadGeoJson();
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(geoJson);
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "map.geojson");
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });

        container.title = "Download GeoJSON";

        return container;
    },
    onRemove: function () {},
});

var control = new L.Control.Button();
control.addTo(map);
