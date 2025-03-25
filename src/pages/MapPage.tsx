import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapPage: React.FC = () => {
  const { lat, lng } = useParams<{ lat?: string; lng?: string }>();

  const latlng: [number, number] = [
    lat ? parseFloat(lat) : 0,
    lng ? parseFloat(lng) : 0,
  ];
  // console.log("latlng", latlng);

  const isValidLatLng = !isNaN(latlng[0]) && !isNaN(latlng[1]);

  return (
    <div className="w-full h-full absolute top-0 left-0">
      <MapContainer
        center={isValidLatLng ? latlng : [0, 0]}
        zoom={3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {isValidLatLng && (
          <Marker position={latlng}>
            <Popup>
              Location: {lat}, {lng}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapPage;
