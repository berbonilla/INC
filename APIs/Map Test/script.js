import * as maptilersdk from '@maptiler/sdk';

maptilersdk.config.apiKey = '6yBy7YQYWSG4WESNZ6L3';
const map = new maptilersdk.Map({
container: 'map', // container's id or the HTML element to render the map
style: maptilersdk.MapStyle.STREETS,
center: [16.62662018, 49.2125578], // starting position [lng, lat]
zoom: 1, // starting zoom
});