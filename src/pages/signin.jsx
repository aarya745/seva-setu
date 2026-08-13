import { useNavigate } from "react-router-dom";
import "./signin.css";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("✅ Login successful!");
    navigate("/role");

  } catch (error) {
    alert("❌ Login failed.\n\nPlease check your email and password.");
  }
};

  return (
    <div className="signin-page">

      {/* LEFT SIDE */}
      <div className="signin-visual">

        <div className="signin-brand">
          <div className="brand-mark">
            <HeartHandshake size={25} />
          </div>

          <div>
            <strong>SevaSetu</strong>
            <span>Wari Seva Network</span>
          </div>
        </div>

        <div className="visual-content">

          <div className="location-pill">
            <MapPin size={15} />
            <span>Serving the Wari community</span>
          </div>

          <h1>
            Seva that
            <br />
            <span>connects.</span>
          </h1>

          <p>
            One platform connecting Warkaris,
            volunteers and essential services
            throughout the Wari journey.
          </p>

          <div className="visual-features">

            <div>
              <ShieldCheck size={20} />
              <span>Verified volunteers</span>
            </div>

            <div>
              <MapPin size={20} />
              <span>Nearby essential services</span>
            </div>

            <div>
              <HeartHandshake size={20} />
              <span>Help when you need it</span>
            </div>

          </div>

        </div>

        <div className="visual-footer">
          सेवा • समन्वय • सुरक्षा
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="signin-form-area">

        <div className="signin-card">

          <div className="mobile-logo">
            🙏
          </div>

          <div className="form-heading">

            <span className="form-eyebrow">
              WELCOME BACK
            </span>

            <h2>
              Sign in to SevaSetu
            </h2>

            <p>
              Continue your journey with the Wari Seva Network.
            </p>

          </div>


          <form onSubmit={handleSignIn}>

            <div className="input-group">

              <label>
                Mobile number or email
              </label>

              <input
                type="text"
                placeholder="Enter your mobile or email"
                required
              />

            </div>


            <div className="input-group">

              <div className="password-label">

                <label>
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-button"
                >
                  Forgot password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                required
              />

            </div>


            <button
              type="submit"
              className="signin-button"
            >
              <span>Sign in</span>
              <ArrowRight size={19} />
            </button>

          </form>


          <div className="divider">
            <span>OR</span>
          </div>


          <button
            className="guest-button"
            onClick={() => navigate("/roles")}
          >
            Continue as guest
          </button>


          <p className="signup-text">
            New to SevaSetu?
            <button>
              Create an account
            </button>
          </p>


          <div className="security-note">
            <ShieldCheck size={16} />
            <span>
              Your information is securely protected.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SignIn;