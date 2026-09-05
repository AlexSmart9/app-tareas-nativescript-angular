import { Component, OnInit } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { MapView, MapReadyEvent, GoogleMap, CameraUpdate } from '@nativescript/google-maps';

registerElement('MapView', () => MapView);

@Component({
  selector: 'ns-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {

  ngOnInit(): void {}

  onMapReady(event: MapReadyEvent) {
    // ¡LA MAGIA ESTÁ AQUÍ! Usamos event.map (el motor real de Google), NO event.object
    const map: GoogleMap = event.map; 
    
    console.log("¡Motor de Google Maps conectado! Saltando a tierra firme...");

    const lat = 23.6345;
    const lng = -102.5528;

    // 1. Centramos la cámara usando la clase moderna CameraUpdate
    map.animateCamera(
      CameraUpdate.fromCoordinate({ lat: lat, lng: lng }, 10) // 15 es el nivel de zoom
    );

    // 2. Agregamos el marcador pasándole la configuración directamente
    map.addMarker({
      position: { lat: lat, lng: lng },
      title: "La Casa del Tamal",
      snippet: "Sombrerete, Zacatecas"
    });
  }
}