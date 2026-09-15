import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">

        <h1 className="text-2xl font-bold text-blue-600">
          IntelliCampus
        </h1>

        <div>
          <span className="font-medium">
            Student
          </span>
        </div>

      </header>

      {/* Main */}
      <main className="p-6">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Student Dashboard
          </h2>

          <p className="mt-2 text-slate-500">
            Manage your campus activities from one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <Link
            to="/navigation"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">
              Campus Navigation
            </h3>

            <p className="mt-2 text-slate-500">
              Find classrooms, labs and campus facilities.
            </p>
          </Link>

          <Link
            to="/attendance"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">
              Attendance
            </h3>

            <p className="mt-2 text-slate-500">
              Check your attendance records.
            </p>
          </Link>

          <Link
            to="/report-issue"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">
              Report Issue
            </h3>

            <p className="mt-2 text-slate-500">
              Report classroom or campus problems.
            </p>
          </Link>

          <Link
            to="/announcements"
            className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold">
              Announcements
            </h3>

            <p className="mt-2 text-slate-500">
              View important campus announcements.
            </p>
          </Link>

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;