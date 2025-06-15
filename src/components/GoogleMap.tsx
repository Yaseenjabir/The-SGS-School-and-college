
import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = ({ address, className = '' }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Load Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      // Initialize map
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: 32.0, lng: 72.0 }, // Default center, will be updated
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Geocode the address
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results: any, status: any) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);
          
          // Add marker
          new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'School Location',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C12.268 0 6 6.268 6 14C6 24.5 20 40 20 40S34 24.5 34 14C34 6.268 27.732 0 20 0ZM20 19C17.239 19 15 16.761 15 14C15 11.239 17.239 9 20 9C22.761 9 25 11.239 25 14C25 16.761 22.761 19 20 19Z" fill="#dc2626"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 40)
            }
          });

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; font-family: 'Nunito', sans-serif;">
                <h3 style="margin: 0 0 5px 0; color: #dc2626; font-weight: bold;">School Location</h3>
                <p style="margin: 0; color: #666;">${address}</p>
              </div>
            `
          });

          const marker = new window.google.maps.Marker({
            position: location,
            map: map,
            title: 'School Location'
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        } else {
          console.error('Geocoding failed: ' + status);
        }
      });
    };

    loadGoogleMaps();

    return () => {
      // Cleanup if needed
    };
  }, [address]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
        <p className="text-sm text-gray-600 font-medium">📍 {address}</p>
      </div>
    </div>
  );
};

export default GoogleMap;
