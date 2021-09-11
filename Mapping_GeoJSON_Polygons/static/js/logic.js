let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/sattelite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Sattelite Streets": satelliteStreets
};

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
  });


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);  

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/mbreitner/Mapping_Earthquakes/main/torontoNeighborhoods.json";

let myStyle = {
  color: "#ffffa1",
  fillcolor: 'blue',
  weight: 1
};

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  L.geoJSON(data, {
    style: myStyle,
      // We turn each feature into a marker on the map.
      onEachFeature: function(feature, layer) {
          layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.area_name + "</h2>").openPopup();
          }
  })
  L.geoJSON(data).addTo(map);
});

// Then Add our 'graymap' tile layer to the map.
<<<<<<< HEAD
streets.addTo(map);
=======
streets.addTo(map);

>>>>>>> a9bed5d45261a503e2dde59163ee5ddb87a92b2a
