import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Droplets,
  HeartPulse,
  Home,
  MapPin,
  Navigation,
  Search,
  Toilet,
  Utensils,
} from "lucide-react";
import "./warikar.css";
import Map from "../map";

function Warkari() {
  const navigate = useNavigate();
const [selectedService, setSelectedService] = useState(null);
  const handleSOS = () => {
    if (!navigator.geolocation) {
      alert("Location services are not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        localStorage.setItem(
  "sevaSetuSOS",
  JSON.stringify({
    type: "Emergency Assistance",
    description: "A Warkari has requested immediate assistance.",
    latitude,
    longitude,
    time: new Date().toLocaleTimeString(),
    priority: "HIGH",
    status: "pending",
  })
);

        alert(
          "🚨 SOS REQUEST SENT!\n\n" +
          "📍 Location captured successfully!\n\n" +
          "Latitude: " +
          latitude +
          "\nLongitude: " +
          longitude
        );
      },
      () => {
        alert(
          "❌ Could not get your location.\n\n" +
          "Please allow location access and try again."
        );
      }
    );
  };

  const services = [
    {
      icon: <HeartPulse size={25} />,
      title: "Medical",
      description: "Hospitals, first aid & medical camps",
      count: "12 nearby",
    },
    {
      icon: <Utensils size={25} />,
      title: "Food",
      description: "Verified food & meal distribution",
      count: "24 nearby",
    },
    {
      icon: <Droplets size={25} />,
      title: "Water",
      description: "Drinking water & refill points",
      count: "31 nearby",
    },
    {
      icon: <Toilet size={25} />,
      title: "Toilets",
      description: "Clean public toilet facilities",
      count: "18 nearby",
    },
    {
      icon: <Home size={25} />,
      title: "Accommodation",
      description: "Rest areas & temporary stay",
      count: "8 nearby",
    },
  ];

  return (
    <div className="warkari-page">

      {/* NAVBAR */}

      <nav className="dashboard-nav">

        <div className="dashboard-brand">

          <div className="dashboard-brand-icon">
            🙏
          </div>

          <div>
            <strong>SevaSetu</strong>
            <span>Wari Seva Network</span>
          </div>

        </div>


        <div className="dashboard-nav-right">

          <button className="notification-button">
            <Bell size={19} />
            <span></span>
          </button>

          <div className="profile">

            <div className="profile-avatar">
              W
            </div>

            <div className="profile-info">
              <strong>Warkari</strong>
              <span>Guest</span>
            </div>

          </div>

          <button
            className="logout-button"
            onClick={() => navigate("/")}
          >
            Sign out
          </button>

        </div>

      </nav>


      {/* MAIN */}

      <main className="warkari-main">

        {/* WELCOME */}

        <section className="welcome-section">

          <div>

            <div className="dashboard-eyebrow">
              <span className="live-dot"></span>
              WARKARI DASHBOARD
            </div>

            <h1>
              Namaskar, Warkari 🙏
            </h1>

            <p>
              Find the seva you need, right when you need it.
            </p>

          </div>


          <div className="current-location">

            <div className="location-icon">
              <Navigation size={18} />
            </div>

            <div>
              <span>Your location</span>
              <strong>Location detected</strong>
            </div>

          </div>

        </section>


        {/* SOS */}

        <section className="sos-banner">

          <div className="sos-symbol">
            <AlertTriangle size={28} />
          </div>

          <div className="sos-content">

            <span>EMERGENCY ASSISTANCE</span>

            <h2>
              Need immediate help?
            </h2>

            <p>
              Send your current location to nearby
              verified SevaSetu volunteers.
            </p>

          </div>


          <button
            className="sos-main-button"
            onClick={handleSOS}
          >
            <AlertTriangle size={20} />
            SEND SOS
          </button>

        </section>


        {/* SERVICES */}

        <section className="services-section">

          <div className="section-title-row">

            <div>

              <span className="section-eyebrow">
                ESSENTIAL SERVICES
              </span>

              <h2>
                What do you need?
              </h2>

            </div>


            <button className="view-all-button">
              View all
              <ArrowRight size={17} />
            </button>

          </div>


          <div className="service-grid">

            {services.map((service) => (

              <button
                className="service-tile"
                key={service.title}
              >

                <div className="service-tile-top">

                  <div className="service-tile-icon">
                    {service.icon}
                  </div>

                  <ArrowRight
                    size={18}
                    className="service-arrow"
                  />

                </div>

                <div className="service-tile-text">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>

                <span className="service-count">
                  {service.count}
                </span>

              </button>

            ))}

          </div>

        </section>


        {/* MAP */}

        <section className="nearby-section">

          <div className="section-title-row">

            <div>

              <span className="section-eyebrow">
                EXPLORE NEARBY
              </span>

              <h2>
                Seva around you
              </h2>

            </div>


            <button
              className="map-expand-button"
              onClick={() => navigate("/map")}
            >
              Open full map
              <ArrowRight size={17} />
            </button>

          </div>


          <div className="warkari-map">

            <Map />

            <div className="map-overlay">

              <div className="map-search">

                <Search size={17} />

                <span>
                  Search nearby services
                </span>

              </div>

              <div className="map-legend">

                <span>
                  <i className="legend-medical"></i>
                  Medical
                </span>

                <span>
                  <i className="legend-food"></i>
                  Food
                </span>

                <span>
                  <i className="legend-water"></i>
                  Water
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* SAFETY NOTE */}

        <section className="safety-note">

          <div className="safety-icon">
            🛡️
          </div>

          <div>

            <strong>
              Your safety matters
            </strong>

            <p>
              SevaSetu connects you with verified
              volunteers and service providers.
            </p>

          </div>

        </section>

      </main>


      <footer className="dashboard-footer">

        <span>
          🙏 सेवा • समन्वय • सुरक्षा
        </span>

        <span>
          SevaSetu • Wari Seva Network
        </span>

      </footer>

    </div>
  );
}

export default Warkari;