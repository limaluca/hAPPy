//create map
var map = L.map('mapid').setView([-2.5218494, -44.2238588], 12.9);

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGltYWx1Y2EiLCJhIjoiY2tnN3h4YXA5MGJ2dzJ4cGI5a3EzbjNoYiJ9.NcO7iZ38vo2r_Fq2SzJL1Q').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})


// L.marker([-2.522602, -44.254434], { icon: icon }).addTo(map)

let marker;

// create and add map
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng').value = lng;


    //Remove icon from the layer
    marker && map.removeLayer(marker)

    // Add icon to the layer
    marker = L.marker([lat, lng], { icon }).addTo(map)

})

// Adding the photo field
function addPhotoField() {
    console.log("It is working, bitch")
}