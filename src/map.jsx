import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import { useEffect, useState } from "react";

function Map() {
  const [location, setLocation] = useState([18.5204, 73.8567]);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      () => {
        console.log("Location permission not given");
      }
    );
  }, []);

  const services = [
    {
      position: [18.5235, 73.8553],
      icon: "🏥",
      name: "Medical Centre",
      description: "Emergency medical assistance available.",
      distance: "1.2 km",
      type: "Medical",
    },
    {
      position: [18.5172, 73.8621],
      icon: "🍛",
      name: "Verified Food Camp",
      description: "Free food and refreshments for Warkaris.",
      distance: "1.8 km",
      type: "Food",
    },
    {
      position: [18.526, 73.849],
      icon: "💧",
      name: "Water Point",
      description: "Drinking water and refill facility available.",
      distance: "900 m",
      type: "Water",
    },
    {
      position: [18.515, 73.85],
      icon: "🚻",
      name: "Toilet Facility",
      description: "Clean public toilet facility.",
      distance: "1.5 km",
      type: "Toilets",
    },
    {
      position: [18.529, 73.86],
      icon: "🏠",
      name: "Seva Accommodation",
      description: "Temporary accommodation available.",
      distance: "2.1 km",
      type: "Stay",
    },
  ];

  return (
    <div className="seva-map-wrapper">

      {/* MAP HEADER */}

      <div className="map-top-card">

        <div>
          <span className="map-live">
            <span></span>
            LIVE SEVA NETWORK
          </span>

          <h3>Nearby assistance</h3>

          <p>
            Verified services around your current location
          </p>
        </div>

        <div className="map-radius">
          <span>📍</span>
          2.5 km radius
        </div>

      </div>


      {/* MAP */}

      <MapContainer
        center={location}
        zoom={14}
        scrollWheelZoom={true}
        style={{
          height: "430px",
          width: "100%",
          borderRadius: "0 0 18px 18px",
        }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* USER LOCATION */}

        <Marker position={location}>
          <Popup>

            <div className="map-popup">

              <div className="popup-icon">
                📍
              </div>

              <strong>You are here</strong>

              <p>
                Your current location
              </p>

            </div>

          </Popup>
        </Marker>


        {/* SEARCH RADIUS */}

        <Circle
          center={location}
          radius={2500}
          pathOptions={{
            color: "#16834a",
            fillColor: "#16834a",
            fillOpacity: 0.05,
          }}
        />


        {/* SERVICE MARKERS */}

        {services.map((service) => (

          <Marker
            key={service.name}
            position={service.position}
          >

            <Popup>

              <div className="map-popup">

                <div className="popup-icon">
                  {service.icon}
                </div>

                <span className="popup-type">
                  {service.type}
                </span>

                <strong>
                  {service.name}
                </strong>

                <p>
                  {service.description}
                </p>

                <div className="popup-bottom">
                  📍 {service.distance} away
                </div>

              </div>

            </Popup>

          </Marker>

        ))}

      </MapContainer>


      {/* MAP LEGEND */}

      <div className="map-legend-new">

        <div>
          <span>🏥</span>
          Medical
        </div>

        <div>
          <span>🍛</span>
          Food
        </div>

        <div>
          <span>💧</span>
          Water
        </div>

        <div>
          <span>🚻</span>
          Toilets
        </div>

        <div>
          <span>🏠</span>
          Stay
        </div>

      </div>

    </div>
  );
}

export default Map;