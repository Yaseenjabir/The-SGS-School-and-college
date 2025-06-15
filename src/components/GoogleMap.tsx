
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface GoogleMapProps {
  address: string;
  className?: string;
}

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GoogleMap = ({ address, className = '' }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map with default coordinates for Sambat Cham, Pakistan
    const defaultLat = 32.0;
    const defaultLng = 72.0;

    const map = L.map(mapRef.current).setView([defaultLat, defaultLng], 15);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    mapInstanceRef.current = map;

    // Create custom marker icon
    const customIcon = L.divIcon({
      html: `
        <div style="
          background-color: #dc2626;
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        ">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            color: white;
            font-size: 16px;
          ">📍</div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });

    // Add marker
    const marker = L.marker([defaultLat, defaultLng], { icon: customIcon }).addTo(map);

    // Add popup
    marker.bindPopup(`
      <div style="font-family: 'Nunito', sans-serif; padding: 10px;">
        <h3 style="margin: 0 0 8px 0; color: #dc2626; font-weight: bold; font-size: 16px;">
          School Location
        </h3>
        <p style="margin: 0; color: #666; font-size: 14px;">
          ${address}
        </p>
        <div style="margin-top: 8px;">
          <a 
            href="https://www.openstreetmap.org/directions?from=&to=${defaultLat},${defaultLng}" 
            target="_blank" 
            style="color: #dc2626; text-decoration: none; font-size: 12px;"
          >
            Get Directions →
          </a>
        </div>
      </div>
    `);

    // Try to geocode the address using Nominatim (OpenStreetMap's geocoding service)
    const geocodeAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lng = parseFloat(data[0].lon);
          
          // Update map center and marker position
          map.setView([lat, lng], 15);
          marker.setLatLng([lat, lng]);
          
          // Update popup with directions link
          marker.bindPopup(`
            <div style="font-family: 'Nunito', sans-serif; padding: 10px;">
              <h3 style="margin: 0 0 8px 0; color: #dc2626; font-weight: bold; font-size: 16px;">
                School Location
              </h3>
              <p style="margin: 0; color: #666; font-size: 14px;">
                ${address}
              </p>
              <div style="margin-top: 8px;">
                <a 
                  href="https://www.openstreetmap.org/directions?from=&to=${lat},${lng}" 
                  target="_blank" 
                  style="color: #dc2626; text-decoration: none; font-size: 12px;"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          `);
        }
      } catch (error) {
        console.log('Geocoding failed, using default coordinates');
      }
    };

    geocodeAddress();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
        <p className="text-sm text-gray-600 font-medium">📍 {address}</p>
      </div>
      <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg shadow-lg">
        <p className="text-xs text-gray-500">Powered by OpenStreetMap</p>
      </div>
    </div>
  );
};

export default GoogleMap;
