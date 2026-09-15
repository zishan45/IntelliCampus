function Attendance() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="text-3xl font-bold">
        Attendance
      </h1>

      <p className="mt-2 text-slate-500">
        Manage and view your attendance.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">
            Overall Attendance
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            85%
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">
            Present
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            42
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-slate-500">
            Absent
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            7
          </h2>
        </div>

      </div>

    </div>
  );
}

export default Attendance;