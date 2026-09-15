import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import campusBg from "../assets/images/campus-bg.png";

function Landing() {
return (
  //code for background image
  <div
  className="h-[680px] w-full bg-slate-950 text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${campusBg})` }}
>
      {/* ================= NAVBAR ================= */}

      <nav className="absolute left-0 right-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-3"
      >

    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold shadow-lg">
      <img
        src={logo}
        alt="IntelliCampus"
        className="h-12 w-12 object-contain"
      />
    </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                IntelliCampus
              </h1>

              <p className="text-xs text-slate-300">
                Smart Campus Platform
              </p>
            </div>

          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#features"
              className="text-sm text-slate-200 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm text-slate-200 transition hover:text-white"
            >
              About
            </a>

            <Link
              to="/login"
              className="text-sm font-medium text-white hover:text-blue-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Register
            </Link>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/campus-bg.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Blue glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />


        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-1200/50 px-4 py-2 text-sm text-blue-200 backdrop-blur">
              AI-Powered Smart Campus Management
            </div>


            {/* Heading */}
            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">

              Your Campus.

              <span className="block text-white-600">
                Smarter. Connected.
              </span>

            </h2>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">

              IntelliCampus brings campus navigation, attendance,
              issue reporting, announcements and AI assistance
              together in one intelligent platform.

            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/register"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Sign In
              </Link>

            </div>


            {/* Quick points */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">

              <span>Smart Navigation</span>

              <span>QR Attendance</span>

              <span>AI Assistant</span>

              <span>Issue Tracking</span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="bg-slate-950 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Platform Features
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Everything your campus needs
            </h2>

            <p className="mt-4 text-slate-400">
              A centralized platform designed to make campus
              management smarter, faster and more connected.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Navigation */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                N
              </div>

              <h3 className="text-xl font-semibold">
                Smart Navigation
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Find classrooms, laboratories, departments and
                other campus facilities quickly.
              </p>

            </div>


            {/* Attendance */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                A
              </div>

              <h3 className="text-xl font-semibold">
                Smart Attendance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Simplify attendance management using QR-based
                digital attendance.
              </p>

            </div>


            {/* Issues */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                R
              </div>

              <h3 className="text-xl font-semibold">
                Issue Reporting
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Report classroom, laboratory and campus issues
                and track their resolution.
              </p>

            </div>


            {/* AI */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                AI
              </div>

              <h3 className="text-xl font-semibold">
                AI Campus Assistant
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Get intelligent assistance for campus information
                and common student queries.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-white/10 bg-slate-900 px-6 py-24"
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About IntelliCampus
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            One platform for a smarter campus
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

            IntelliCampus is designed to bridge the gap between
            students, faculty and campus administration by
            bringing essential campus services into a single
            digital ecosystem.

          </p>

          <div className="mt-10">

            <Link
              to="/register"
              className="inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-700"
            >
              Join IntelliCampus
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} IntelliCampus
          </p>

          <p className="text-sm text-slate-500">
            Smart Campus Management Platform
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Landing;

