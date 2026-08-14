import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./pages/signIn";
import RoleSelection from "./pages/roleselection";
import Warkari from "./pages/warkari";
import Volunteer from "./pages/volunteer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SignIn />} />

        <Route path="/roles" element={<RoleSelection />} />

        <Route path="/warkari" element={<Warkari />} />

        <Route path="/volunteer" element={<Volunteer />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;s