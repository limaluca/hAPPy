//create map
var map = L.map('mapid').setView([-2.5218494, -44.2238588], 12.9);

//create and add tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGltYWx1Y2EiLCJhIjoiY2tnN3h4YXA5MGJ2dzJ4cGI5a3EzbjNoYiJ9.NcO7iZ38vo2r_Fq2SzJL1Q').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
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
    // console.log("It is working, bitch")

    // get the photos container #images
    const container = document.querySelector('#images');

    // get the container that will be duplicated .new-upload -> (array)
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // do the double of the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verification if the field is empty. If so, do not add to the images container
    const input = newFieldContainer.children[0];
    if (input.value == "") { // if its empty the return ends the function
        return
    }

    // clear the cloned field before adding it to the container
    newFieldContainer.children[0].value = "";
    console.log(newFieldContainer.children)

    // add the clone the images container
    container.appendChild(newFieldContainer)
}

function deleteField(event) {

    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');


    if (fieldsContainer.length < 2) {
        //Clear the field before returning
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();


    console.log("cheguei aqui")



}

// select yes or no 

function toggleSelect(event) {
    // delete the active class from the buttons
    document.querySelectorAll('.button-select button')
    document.querySelectorAll('.button-select button')
        .forEach((button) => button.classList.remove('active')) //arrow function


    // put the active class on the clicked class
    const button = event.currentTarget
    button.classList.add('active')


    // update the hidden input with the selected value
    const input = document.querySelector('[name ="open_on_weekends"')

    //verify if its value is yes or no
    input.value = button.dataset.value


}