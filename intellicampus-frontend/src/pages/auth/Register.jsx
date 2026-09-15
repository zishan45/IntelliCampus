import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Register() {

  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration role:", role);

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <div className="mx-auto max-w-xl">

        {/* Header */}
        <div className="mb-8 text-center">

          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold shadow-lg">
                 <img
                   src={logo}
                   alt="IntelliCampus"
                   className="h-12 w-12 object-contain"
                 />
               </div>

            IntelliCampus
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Create your account
          </h1>

          <p className="mt-2 text-slate-500">
            Register for the IntelliCampus platform
          </p>

        </div>


        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        >

          {/* Role */}
          <div className="mb-6">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Register as
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
            >

              <option value="student">
                Student
              </option>

              <option value="faculty">
                Faculty
              </option>

              <option value="admin">
                Administrator
              </option>

              <option value="visitor">
                Visitor
              </option>

            </select>

          </div>


          {/* Name */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>


          {/* Email */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>


          {/* Student fields */}
          {role === "student" && (
            <>
              <div className="mb-5">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Student ID
                </label>

                <input
                  type="text"
                  placeholder="Enter your student ID"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />

              </div>


              <div className="mb-5">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Department
                </label>

                <select
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
                >

                  <option value="">
                    Select Department
                  </option>

                  <option>
                    Computer Science & Engineering
                  </option>

                  <option>
                    Electronics & Communication
                  </option>

                  <option>
                    Mechanical Engineering
                  </option>

                  <option>
                    Civil Engineering
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>
            </>
          )}


          {/* Faculty/Admin */}
          {(role === "faculty" || role === "admin") && (
            <div className="mb-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Employee ID
              </label>

              <input
                type="text"
                placeholder="Enter employee ID"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>
          )}


          {/* Visitor */}
          {role === "visitor" && (
            <div className="mb-5">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Purpose of Visit
              </label>

              <textarea
                rows="4"
                placeholder="Enter purpose of your visit"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>
          )}


          {/* Password */}
          <div className="mb-6">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              required
              minLength="6"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>


          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-500">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>

          </p>


          {/* Home */}
          <div className="mt-3 text-center">

            <Link
              to="/"
              className="text-sm text-slate-500 hover:text-blue-600"
            >
              Back to Home
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Register;