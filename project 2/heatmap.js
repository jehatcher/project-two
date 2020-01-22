var myMap = L.map("map", {
    center: [38.8899, -77.0091],
    zoom: 12
  });
  
  var marker = L.marker([38.8899, -77.0091], {
    draggable: true,
    title: "US Capital Building"
  }).addTo(myMap);
  
  
  // Binding a pop-up to our marker
  marker.bindPopup("US Capital Building");
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  }).addTo(myMap);
  
  
  var url = "https://opendata.arcgis.com/datasets/f08294e5286141c293e9202fcd3e8b57_1.geojson";
  
  d3.json(url, function(response) {
  
    console.log(response.features.length);
    
    var heatArray = [];
  
    for (var i = 0; i < response.features.length; i++) {
      var geometry = response.features[i].geometry;
      console.log("hello");
      if (geometry) {
        heatArray.push([geometry.coordinates[1], geometry.coordinates[0]]);
      }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
  });
  