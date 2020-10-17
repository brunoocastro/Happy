// Create Map
const map = L.map("mapid").setView([-30.2548147, -54.9166064, 18.25], 16);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create Icons
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// Definindo marker
let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Photos Upload field add
function addPhotoField() {
  // Pegar o Container de Fotos #images
  const container = document.querySelector("#images");

  // Pegar o Container para duplicar o .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // Duplicar o .new-upload en
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // Verificar se o campo anterior está vazio
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // Limpar antes de adicionar
  input.value = "";

  // Adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

// Gerenciamento dos botões Sim e Não
function toggleSelect(event) {
  // Retirar a .active de todos
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // Pegar o botão clicado
  const button = event.currentTarget;

  // Colocar a .active
  button.classList.add("active");

  // Atualizar o input Hidden
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  const latObj = document.querySelector('[name="lat"]');
  const lngObj = document.querySelector('[name="lng"]');

  if (!latObj.value && !lngObj.value) {
    event.preventDefault();
    alert("Indique a localização através do mapa");
  }
}
