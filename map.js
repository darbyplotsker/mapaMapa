// 1. Creat variables for our map
// 2. Write a function that initializes our map
// 3. We're going to run that function

var ourLoc;
var view;
var map;

function init() {
    ourLoc = ol.proj.fromLonLat([41.843316, 28.862457]);

    view = new ol.View({
        center: ourLoc,
        zoom: 6
    });

    map = new ol.Map ({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimating: true,
        view: view
    });
}

// document.addEventListener("DOMContentLoaded", function(e) {
//     console.log("loaded")
//     init();
// });
window.onload = init;