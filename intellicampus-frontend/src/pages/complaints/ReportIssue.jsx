function ReportIssue() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Issue submitted");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="mx-auto max-w-2xl">

        <h1 className="text-3xl font-bold">
          Report an Issue
        </h1>

        <p className="mt-2 text-slate-500">
          Report a problem related to your classroom or campus.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-sm"
        >

          <div>
            <label className="mb-2 block font-medium">
              Issue Type
            </label>

            <select className="w-full rounded-lg border border-slate-300 px-4 py-3">
              <option>Classroom</option>
              <option>Lab Equipment</option>
              <option>Internet</option>
              <option>Electrical</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter location"
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Describe the issue..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Issue
          </button>

        </form>

      </div>

    </div>
  );
}

export default ReportIssue;