var myMap = L.map("map", {
    center: [38.8899, -77.0091],
    zoom: 12
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 12,
    id: "mapbox.dark",
    accessToken: API_KEY
  }).addTo(myMap);
  
  var marker = L.marker([38.8899, -77.0091], {
    draggable: true,
    title: "US Capital Building"
  }).addTo(myMap);
  
  // Binding a pop-up to our marker
  marker.bindPopup("US Capital Building");
  
  
  var newtry = "https://opendata.arcgis.com/datasets/f08294e5286141c293e9202fcd3e8b57_1.geojson";
  
  d3.json(newtry, function(response) {
  
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();
  
    // Loop through data
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable
      var location = response[i].location;
  
      // Check for location property
      if (location) {
  
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
          .bindPopup(response[i].descriptor));
      }
  
    }
  
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  
  
  });
  