function Announcements() {
  const announcements = [
    {
      title: "Semester Examination",
      description:
        "The semester examination schedule will be released soon.",
    },
    {
      title: "Campus Maintenance",
      description:
        "Maintenance work will be conducted in selected laboratories.",
    },
    {
      title: "Important Notice",
      description:
        "Students are requested to regularly check campus announcements.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <h1 className="text-3xl font-bold">
        Announcements
      </h1>

      <div className="mt-8 space-y-4">

        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 shadow-sm"
          >

            <h2 className="text-xl font-bold">
              {announcement.title}
            </h2>

            <p className="mt-2 text-slate-500">
              {announcement.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Announcements;