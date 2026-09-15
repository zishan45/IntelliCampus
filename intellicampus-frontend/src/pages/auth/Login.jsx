import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Login() {
  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Temporary frontend authentication.

      Later:
      Login Form
          ↓
      FastAPI
          ↓
      Database
          ↓
      JWT
          ↓
      Dashboard
    */

    if (role === "student") {
      navigate("/student/dashboard");
    }

    if (role === "faculty") {
      navigate("/faculty/dashboard");
    }

    if (role === "admin") {
      navigate("/admin/dashboard");
    }

    if (role === "visitor") {
      navigate("/visitor/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Logo */}
        <div className="mb-8 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold shadow-lg">
                           <img
                             src={logo}
                             alt="IntelliCampus"
                             className="h-12 w-12 object-contain"
                           />
          </div>
          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
            IntelliCampus
          </Link>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            Welcome Back
          </h2>

          <p className="mt-2 text-slate-500">
            Sign in to continue to IntelliCampus
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Role */}
          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Login as
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >

              <option value="student">
                Student
              </option>

              <option value="faculty">
                Faculty
              </option>

              <option value="admin">
                Admin
              </option>

              <option value="visitor">
                Visitor
              </option>

            </select>

          </div>


          {/* Email */}
          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>


          {/* Password */}
          <div>

            <div className="mb-2 flex justify-between">

              <label className="font-medium text-slate-700">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>

            </div>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>


          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>


        {/* Register */}
        <p className="mt-6 text-center text-sm text-slate-500">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </Link>

        </p>


        {/* Home */}
        <div className="mt-4 text-center">

          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-blue-600"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;
