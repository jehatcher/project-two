mapboxgl.accessToken = "pk.eyJ1IjoiamNoMTIzNCIsImEiOiJjazQwbmNiOGkwM2liM21xd3N3c3owMmVxIn0.5i8ehdVOY7_EwG_82fLo4g";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-77.0091, 38.8899],
  zoom: 14
});

map.on("load", function() {
  // Add a geojson point source.
  // Heatmap layers also work with a vector tile source.
  map.addSource("crime", {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/f08294e5286141c293e9202fcd3e8b57_1.geojson"
  });

  map.addLayer(
    {
      id: "crime-point",
      type: "circle",
      source: "crime",
      minzoom: 2,
      paint: {
        // Size circle radius by earthquake magnitude and zoom level
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["interpolate", ["linear"], ["get", "mag"], 1, 1, 6, 4],
          16,
          ["interpolate", ["linear"], ["get", "mag"], 1, 5, 6, 50]
        ],
        // Color circle by earthquake magnitude
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "mag"],
          1,
          "rgba(33,102,172,0)",
          2,
          "rgb(103,169,207)",
          3,
          "rgb(209,229,240)",
          4,
          "rgb(253,219,199)",
          5,
          "rgb(239,138,98)",
          6,
          "rgb(178,24,43)"
        ],
        "circle-stroke-color": "white",
        "circle-stroke-width": 1,
        // Transition from heatmap to circle layer by zoom level
        "circle-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 1]
      }
    },
    "waterway-label"
  );
});
