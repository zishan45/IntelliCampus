import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend login
    // Later this will be replaced with backend authentication

    if (role === "student") {
      navigate("/student/dashboard");
    } else if (role === "faculty") {
      navigate("/faculty/dashboard");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "visitor") {
      navigate("/visitor/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-blue-600">
            IntelliCampus
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to your account
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

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
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
              <option value="visitor">Visitor</option>
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
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        {/* Back */}
        <div className="mt-6 text-center">

          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;
