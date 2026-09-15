import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import StudentDashboard from "./pages/dashboard/StudentDashboard";

import CampusNavigation from "./pages/navigation/CampusNavigation";
import Attendance from "./pages/attendance/Attendance";
import ReportIssue from "./pages/complaints/ReportIssue";
import Announcements from "./pages/announcements/Announcements";


function App() {

  return (
    <Routes>

      {/* Landing */}
      <Route
        path="/"
        element={<Landing />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* Student */}
      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />


      {/* Features */}
      <Route
        path="/navigation"
        element={<CampusNavigation />}
      />

      <Route
        path="/attendance"
        element={<Attendance />}
      />

      <Route
        path="/report-issue"
        element={<ReportIssue />}
      />

      <Route
        path="/announcements"
        element={<Announcements />}
      />

    </Routes>
  );
}

export default App;
