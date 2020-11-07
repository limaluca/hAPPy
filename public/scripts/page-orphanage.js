const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//get values from HTML
const lat = document.querySelector(['span[data-lat]']).dataset.lat
const lng = document.querySelector(['span[data-lng]']).dataset.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 12.9);

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


L.marker([lat, lng], { icon: icon }).addTo(map)

// image galery
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
        // mesmo que a arrow function buttons.forEach((button) => { Execucao da funcao})
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details>img")

    // atualizar o container de imagem (imagem grande)
    imageContainer.src = image.src

    // adicionar a classe .active para o botao clicado
    button.classList.add("active");
}