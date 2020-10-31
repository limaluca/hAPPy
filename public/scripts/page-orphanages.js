//create map
var map = L.map('mapid').setView([-2.5218494, -44.2238588], 12.9);

//create and add tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGltYWx1Y2EiLCJhIjoiY2tnN3h4YXA5MGJ2dzJ4cGI5a3EzbjNoYiJ9.NcO7iZ38vo2r_Fq2SzJL1Q').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


function addMarker({ id, name, lat, lng }) {
    // create popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)




    L.marker([lat, lng], { icon: icon }).addTo(map).bindPopup(popup)
}


//Dataset = objeto do HTML, aqui ele seleciona o span hidden e pega os dados la inseridos
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }

    addMarker(orphanage)

})