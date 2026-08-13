import { useEddect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./volunteer.css";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  CheckCircle,
  Clock,
  HeartHandshake,
  MapPin,
  Navigation,
  Users,
} from "lucide-react";

function Volunteer() {
  const [sosRequest, setSosRequest] = useState(null);
  const navigate = useNavigate();
useEffect(() => {
  const checkSOS = () => {
    const savedSOS = localStorage.getItem("sevaSetuSOS");

    if (savedSOS) {
      setSosRequest(JSON.parse(savedSOS));
    }
  };

  checkSOS();

  window.addEventListener("storage", checkSOS);

  return () => {
    window.removeEventListener("storage", checkSOS);
  };
}, []);
  const requests = [
    {
      type: "Medical Assistance",
      distance: "1.2 km",
      time: "2 min ago",
      description: "Warkari needs immediate medical assistance.",
      priority: "HIGH",
    },
    {
      type: "Food Assistance",
      distance: "2.1 km",
      time: "8 min ago",
      description: "Food distribution support requested.",
      priority: "MEDIUM",
    },
    {
      type: "Navigation Help",
      distance: "3.4 km",
      time: "14 min ago",
      description: "Warkari needs help finding the correct route.",
      priority: "NORMAL",
    },
  ];

  const handleAccept = (type) => {
    alert(
      `✅ Request Accepted!\n\n${type}\n\nYou are now assigned to this seva request.`
    );
  };

  return (
    <div className="volunteer-page">

      {/* NAVBAR */}

      <nav className="dashboard-nav">

        <div className="dashboard-brand">

          <div className="dashboard-brand-icon volunteer-brand">
            <HeartHandshake size={22} />
          </div>

          <div>
            <strong>SevaSetu</strong>
            <span>Volunteer Network</span>
          </div>

        </div>


        <div className="dashboard-nav-right">

          <button className="notification-button">
            <Bell size={19} />
            <span></span>
          </button>

          <div className="profile">

            <div className="profile-avatar volunteer-avatar">
              V
            </div>

            <div className="profile-info">
              <strong>Volunteer</strong>
              <span>Available</span>
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

      <main className="volunteer-main">

        {/* HEADER */}

        <section className="volunteer-header">

          <div>

            <div className="dashboard-eyebrow">
              <span className="live-dot"></span>
              VOLUNTEER DASHBOARD
            </div>

            <h1>
              Welcome back, Volunteer 🤝
            </h1>

            <p>
              Your seva can make someone's journey safer today.
            </p>

          </div>


          <div className="availability-card">

            <div className="availability-indicator">
              <span></span>
            </div>

            <div>
              <strong>You're available</strong>
              <span>Receiving nearby requests</span>
            </div>

            <button>
              Go offline
            </button>

          </div>

        </section>


        {/* STATS */}

        <section className="volunteer-stats">

          <div className="volunteer-stat-card">

            <div className="stat-icon orange">
              <AlertTriangle size={21} />
            </div>

            <div>
              <span>Active requests</span>
              <strong>3</strong>
            </div>

          </div>


          <div className="volunteer-stat-card">

            <div className="stat-icon green">
              <CheckCircle size={21} />
            </div>

            <div>
              <span>Requests resolved</span>
              <strong>18</strong>
            </div>

          </div>


          <div className="volunteer-stat-card">

            <div className="stat-icon blue">
              <Users size={21} />
            </div>

            <div>
              <span>Volunteers nearby</span>
              <strong>24</strong>
            </div>

          </div>


          <div className="volunteer-stat-card">

            <div className="stat-icon purple">
              <Clock size={21} />
            </div>

            <div>
              <span>Seva hours</span>
              <strong>32h</strong>
            </div>

          </div>

        </section>

{sosRequest && sosRequest.status === "pending" && (
  <section className="emergency-request-banner">

    <div className="emergency-icon">
      🚨
    </div>

    <div className="emergency-content">

      <span>HIGH PRIORITY • EMERGENCY</span>

      <h2>
        Warkari needs immediate assistance
      </h2>

      <p>
        A nearby Warkari has sent an SOS request.
        Their location has been captured.
      </p>

      <div className="emergency-location">
        📍 Location: {sosRequest.latitude.toFixed(4)},{" "}
        {sosRequest.longitude.toFixed(4)}
      </div>

    </div>

    <button
      className="accept-emergency"
      onClick={() => {
        const updatedSOS = {
          ...sosRequest,
          status: "accepted",
        };

        localStorage.setItem(
          "sevaSetuSOS",
          JSON.stringify(updatedSOS)
        );

        setSosRequest(updatedSOS);

        alert(
          "✅ Emergency request accepted!\n\n" +
          "You are now assigned to help this Warkari."
        );
      }}
    >
      Accept SOS →
    </button>

  </section>
)}
        {/* REQUESTS */}

        <section className="requests-section">

          <div className="section-title-row">

            <div>

              <span className="section-eyebrow">
                LIVE ASSISTANCE
              </span>

              <h2>
                Nearby seva requests
              </h2>

            </div>


            <div className="request-status">

              <span className="live-dot"></span>

              Live updates

            </div>

          </div>


          <div className="request-list">

            {requests.map((request, index) => (

              <div
                className="request-card-new"
                key={index}
              >

                <div className="request-priority">

                  <span
                    className={`priority-dot ${request.priority.toLowerCase()}`}
                  ></span>

                  {request.priority}

                </div>


                <div className="request-main">

                  <div className="request-icon-new">
                    {request.type === "Medical Assistance" ? (
                      <AlertTriangle size={23} />
                    ) : request.type === "Food Assistance" ? (
                      <HeartHandshake size={23} />
                    ) : (
                      <Navigation size={23} />
                    )}
                  </div>


                  <div className="request-details">

                    <h3>
                      {request.type}
                    </h3>

                    <p>
                      {request.description}
                    </p>

                    <div className="request-meta">

                      <span>
                        <MapPin size={14} />
                        {request.distance} away
                      </span>

                      <span>
                        <Clock size={14} />
                        {request.time}
                      </span>

                    </div>

                  </div>


                  <button
                    className="accept-request"
                    onClick={() =>
                      handleAccept(request.type)
                    }
                  >
                    Accept request
                    <ArrowRight size={17} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* MAP / COVERAGE */}

        <section className="coverage-section">

          <div className="coverage-card">

            <div className="coverage-content">

              <span className="section-eyebrow">
                VOLUNTEER COVERAGE
              </span>

              <h2>
                See where help is needed
              </h2>

              <p>
                Explore emergency requests and
                nearby Warkaris who may need assistance.
              </p>

              <button
                onClick={() => navigate("/map")}
              >
                Open live map
                <ArrowRight size={17} />
              </button>

            </div>


            <div className="coverage-visual">

              <div className="coverage-circle circle-one">
                <div className="coverage-circle circle-two">
                  <div className="coverage-center">
                    <MapPin size={25} />
                  </div>
                </div>
              </div>

              <div className="coverage-pin pin-one">
                <AlertTriangle size={16} />
              </div>

              <div className="coverage-pin pin-two">
                <HeartHandshake size={16} />
              </div>

              <div className="coverage-pin pin-three">
                <MapPin size={16} />
              </div>

            </div>

          </div>

        </section>


        {/* MOTIVATION */}

        <section className="volunteer-message">

          <div className="message-icon">
            🙏
          </div>

          <div>

            <strong>
              Every seva makes a difference.
            </strong>

            <p>
              Thank you for helping make the Wari
              safer and more welcoming for everyone.
            </p>

          </div>

        </section>

      </main>


      <footer className="dashboard-footer">

        <span>
          🙏 सेवा • समन्वय • सुरक्षा
        </span>

        <span>
          SevaSetu • Volunteer Network
        </span>

      </footer>

    </div>
  );
}

export default Volunteer;