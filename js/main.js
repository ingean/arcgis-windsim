//import esriConfig from 'https://js.arcgis.com/4.27/@arcgis/core/config.js'
//import WebMap from 'https://js.arcgis.com/4.27/@arcgis/core/WebMap.js'
import Map from 'https://js.arcgis.com/4.27/@arcgis/core/Map.js'
import MapView from 'https://js.arcgis.com/4.27/@arcgis/core/views/MapView.js'
import ActionBar from './ActionBar.js'
//import MapTheme from './MapTheme.js'
//import * as OAuth2 from './OAuth2.js'
import Basemap from "https://js.arcgis.com/4.27/@arcgis/core/Basemap.js"
import VectorTileLayer from 'https://js.arcgis.com/4.27/@arcgis/core/layers/VectorTileLayer.js'
import ImageryLayer from "https://js.arcgis.com/4.27/@arcgis/core/layers/ImageryLayer.js"

//esriConfig.apiKey = 'AAPKf28ba4fdd1e945a1be5f8d43dbd650eaMjyiDjdFXaCPZzo5erYJ7Xc7XKvBlbJZIPvNu0O2zwfeFiGhqoBvtQwJUZ1DMXIL'
//const portal = await OAuth2.authenticate() //Authenticate with named user using OAuth2

//const webmapId = 'ed9c982d0d4d4dcf8415d3c46e20c4c7' // Publicly available webmap

const map = new Map({
  basemap: new Basemap({
    baseLayers: [
      new VectorTileLayer({
        url: 'https://services.geodataonline.no/arcgis/rest/services/GeocacheVector/GeocacheKanvasMork/VectorTileServer/resources/styles/root.json'
      })
    ],
    title: 'Bakgrunnskart (Mørk)'
  })
})

const view = new MapView({
  map,
  container: "viewDiv",
  center: [8,65],
  zoom: 2,
  padding: {
    left: 49
  }
});

//theme.view = view

const actionBar = new ActionBar(view, "layers")

// Testing Sentinel2 layer
let layer = new ImageryLayer({
  url: "https://ic.imagery1.arcgis.com/arcgis/rest/services/Sentinel2_10m_LandCover/ImageServer"
})

map.addMany([layer])

