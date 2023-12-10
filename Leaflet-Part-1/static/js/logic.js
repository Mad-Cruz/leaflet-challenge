// Get earthquake data from USGS GeoJSON feed
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch earthquake data
d3.json(url).then(function(data){
    // Log the fetched data to the console for inspection
    console.log(data);
    // Call the createMarkers function and pass the fetched data to it
    createMarkers(data);
});


// Create Leaflet map centered on the United States
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
}); 

// Add tile layer to map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Create a function for markers
function createMarkers(data) {
    for (i = 0; i < data.features.length; i++) {
        let latitude = data.features[i].geometry.coordinates[0];
        let longtitude = data.features[i].geometry.coordinates[1];
        let magnitude = data.features[i].properties.mag;
        let depth = data.features[i].geometry.coordinates[2];
        let place = data.features[i].properties.place;

        let marker = L.circleMarker([longtitude, latitude], {
        radius: magnitude * 5,
        fillColor: getMarkerColor(depth),
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
      marker.bindPopup(`Location: ${place}<br>Magnitude: ${magnitude}`);
      marker.addTo(myMap);
    };
};

// Define a function to set marker color based on depth
function getMarkerColor(x){
    if (x < 10){return "#00ff00";} // green
    else if (x < 30){return "#ffff00";} // yellow
    else if (x < 50){return "#ff9900";} // orange
    else if (x < 70){return "#ff6600";} // dark orange
    else if (x < 90){return "#ff3300";} // red
    else {return "#990000";} // dark red
        };
    
// Create a legend
let legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend"); // Creating a div element with the class "info" and "legend"
  let depths = [0, 10, 30, 50, 70, 90]; 
  let colors = ["#00ff00", "#ffff00", "#ff9900", "#ff6600", "#ff3300", "#990000"]; 

  // Loop through each depth range to create legend entries
  for (let i = 0; i < depths.length; i++) {
    div.innerHTML +=
         "<li style=\"background-color: " + colors[i] + '">' +
         depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+') + "</li>";
  }
 
  div.style.backgroundColor = "#fff";
  return div;
};

legend.addTo(myMap); 

