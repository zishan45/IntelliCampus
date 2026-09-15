function CampusNavigation() {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          IntelliCampus
        </h1>
      </header>

      <main className="p-6">

        <h2 className="text-3xl font-bold">
          Campus Navigation
        </h2>

        <p className="mt-2 text-slate-500">
          Search for any location inside the campus.
        </p>

        <div className="mt-8 max-w-2xl">

          <input
            type="text"
            placeholder="Search classroom, lab, accounts section..."
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-blue-500"
          />

        </div>

        <div className="mt-8 flex min-h-[400px] items-center justify-center rounded-2xl bg-slate-300">

          <p className="text-lg font-medium text-slate-600">
            Campus Map
          </p>

        </div>

      </main>

    </div>
  );
}

export default CampusNavigation;