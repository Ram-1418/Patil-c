import React from "react";

const Blogs = () => {
  const items = [
    {
      logo: "/images/construction-disruption-by-thikedaar.webp",
      info: "GREEN CONSTRUCTION IDEAS TO SAVE MONEY AND ENERGY",
          arrow:"Know More->"
    },
    {
      logo: "/images/home-construction-in-ranchi.webp",
      info: "CHECKLIST FOR HIRING A RELIABLE BUILDING CONTRACTOR IN DELHI/NCR",
          arrow:"Know More->"
    },
    {
      logo: "/images/construction-disruption-by-thikedaar.webp",
      info: "ROLE OF A CIVIL CONTRACTOR IN RESIDENTIAL CONSTRUCTION EXPLAINED",
          arrow:"Know More->"
    },
  ];

  return (
    <div className="p-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Our{" "}
          <span className="text-yellow-400 font-bold">
            Blogs
          </span>
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="rounded-t-xl h-64 w-full object-cover"
              src={item.logo}
              alt={item.info}
            />
            <div className="p-4">
              <p className="text-gray-700 font-medium text-center">
                {item.info}
              </p>
              
              <p className="font-bold text-yellow-400 text-xl">{item.arrow}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
