L.Control.Button = L.Control.extend({
  options: {
    position: "bottomleft",
  },
  onAdd: function (map) {
    var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    var button = L.DomUtil.create("a", "leaflet-control-button", container);
    L.DomEvent.disableClickPropagation(button);

    button.style.backgroundColor = "red";

    var img = L.DomUtil.create("img", "leaflet-control-img", button);
    img.src = "/images/alert.svg";
    img.style.padding = "5px"; 

    // Create button group for risk levels
    var buttonGroup = L.DomUtil.create("div", "button-group", container);

    // Create risk level buttons
    for (var i = 1; i <= 3; i++) {
      var riskButton = L.DomUtil.create("button", "risk-button", buttonGroup);
      riskButton.innerHTML = i;
      riskButton.value = i;

      // Event listener for risk button click
      L.DomEvent.on(riskButton, "click", function (e) {
        var selectedValue = e.target.value;
        button.style.backgroundColor = ""; // Reset button color
        // Do something with the selected risk level (e.g., alert(selectedValue);)
      });
    }

    // Event listener for button hover to toggle button group visibility
    L.DomEvent.on(button, "mouseover", function () {
      buttonGroup.style.display = "flex";
    });

    L.DomEvent.on(buttonGroup, "mouseover", function () {
      buttonGroup.style.display = "flex";
    });

    L.DomEvent.on(buttonGroup, "mouseout", function () {
      buttonGroup.style.display = "none";
    });

    L.DomEvent.on(button, "mouseout", function () {
      buttonGroup.style.display = "none";
    });

    container.title = "Risk level";

    return container;
  },
  onRemove: function (map) {},
});

var control = new L.Control.Button();
control.addTo(map);


  