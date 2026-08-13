import { useNavigate } from "react-router-dom";
import "./role.css";
import {
  ArrowRight,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-page">

      {/* TOP BRAND */}
      <nav className="role-navbar">

        <div className="role-brand">
          <div className="role-brand-icon">
            <HeartHandshake size={22} />
          </div>

          <div>
            <strong>SevaSetu</strong>
            <span>Wari Seva Network</span>
          </div>
        </div>

        <div className="role-nav-status">
          <span className="status-dot"></span>
          Wari Seva Network
        </div>

      </nav>


      {/* MAIN CONTENT */}
      <main className="role-main">

        <div className="role-heading">

          <div className="role-eyebrow">
            <ShieldCheck size={16} />
            PERSONALIZED EXPERIENCE
          </div>

          <h1>
            How will you use
            <span> SevaSetu?</span>
          </h1>

          <p>
            Choose your role to get a personalized experience
            designed around how you want to contribute to the Wari.
          </p>

        </div>


        {/* ROLE CARDS */}
        <div className="role-cards">


          {/* WARKARI */}
          <button
            className="role-option warkari-option"
            onClick={() => navigate("/warkari")}
          >

            <div className="role-option-top">

              <div className="role-big-icon">
                <MapPin size={34} />
              </div>

              <div className="role-arrow">
                <ArrowRight size={20} />
              </div>

            </div>


            <div className="role-option-content">

              <span className="role-label">
                I AM A
              </span>

              <h2>Warkari</h2>

              <p>
                Find nearby food, medical centres,
                water points, toilets and accommodation
                throughout your Wari journey.
              </p>

            </div>


            <div className="role-option-footer">

              <span>
                Explore essential services
              </span>

              <ArrowRight size={18} />

            </div>

          </button>


          {/* VOLUNTEER */}
          <button
            className="role-option volunteer-option"
            onClick={() => navigate("/volunteer")}
          >

            <div className="role-option-top">

              <div className="role-big-icon">
                <HeartHandshake size={34} />
              </div>

              <div className="role-arrow">
                <ArrowRight size={20} />
              </div>

            </div>


            <div className="role-option-content">

              <span className="role-label">
                I WANT TO
              </span>

              <h2>Volunteer</h2>

              <p>
                Respond to nearby requests,
                support Warkaris and coordinate
                seva when help is needed.
              </p>

            </div>


            <div className="role-option-footer">

              <span>
                Start helping others
              </span>

              <ArrowRight size={18} />

            </div>

          </button>

        </div>


        {/* TRUST FEATURES */}
        <div className="role-trust">

          <div>
            <ShieldCheck size={18} />
            <span>Verified network</span>
          </div>

          <div>
            <MapPin size={18} />
            <span>Location based assistance</span>
          </div>

          <div>
            <Users size={18} />
            <span>Community powered</span>
          </div>

        </div>

      </main>


      <footer className="role-footer">
        <span>🙏 सेवा • समन्वय • सुरक्षा</span>
        <span>SevaSetu • Wari Seva Network</span>
      </footer>

    </div>
  );
}

export default RoleSelection;