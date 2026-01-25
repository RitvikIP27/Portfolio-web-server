export default function TopRecommendations() {
  const recommendations = [
    {
      title: "Lofoten Islands",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fill=crop&w=400&h=200&q=60",
      description: "Dramatic peaks, fishing villages, and turquoise waters.",
    },
    {
      title: "Trolltunga",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fill=crop&w=400&h=200&q=60",
      description: "One of Norway’s most iconic cliff formations.",
    },
    {
      title: "Northern Lights",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fill=crop&w=400&h=200&q=60",
      description: "Watch the Aurora Borealis in magical northern Norway.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Top Recommendations</h2>

      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              width="300"
              height="200"
              style={{objectFit:"cover",borderRadius:"8px"}}
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
