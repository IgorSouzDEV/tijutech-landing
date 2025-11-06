import 'leaflet/dist/leaflet.css';

// src/components/ui/StoreMap.jsx
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function StoreMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    
    const lat = -22.9240141;
    const lng = -43.2358209;

    const map = L.map(mapRef.current).setView([lat, lng], 16); // zoom 16 = nível de rua

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup('<b>TijuTech</b><br>R. Barão de Mesquita, 365 - Loja A - Tijuca, Rio de Janeiro - RJ, 20540-001')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-60 md:h-138 rounded-lg shadow-md"
      aria-label="Localização da loja TijuTech no mapa"
    />
  );
}