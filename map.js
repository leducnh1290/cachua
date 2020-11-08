"use strict";

function initMap() {
  const myLatLng = {
    lat: NaN,
    lng: NaN
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: NaN,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!"
  });
}
