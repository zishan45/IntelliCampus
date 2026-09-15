import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-6 py-4">

      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        IntelliCampus
      </Link>

      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="text-slate-600 hover:text-blue-600"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;