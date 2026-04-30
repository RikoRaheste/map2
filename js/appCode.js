let map = L.map('map', {
  center: [58.373523, 26.716045],
  zoom: 12,
  zoomControl: true // Disable default zoom control
})

const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'OpenStreetMap contributors'
})

osmLayer.addTo(map)

// Default map settings
function defaultMapSettings() {
  map.setView([58.373523, 26.716045], 12)
}

map.zoomControl.setPosition('topright')

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Esri, Maxar, Earthstar Geographics, and the GIS community',
  maxZoom: 19
})

const topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
})
// Layer list 
const baseLayers = {
  "OpenStreetMap": osmLayer,
  "Satellite": satelliteLayer,
  "Topographic": topoLayer
}

const overlayLayers = { }
const layerControlOptions = {
  collapsed: false,
  position: 'topleft'
}
const layerControl = L.control.layers(baseLayers, overlayLayers, layerControlOptions)
layerControl.addTo(map)
