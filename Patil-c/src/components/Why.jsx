import React from "react";

const Why = () => {
  const information = [
    {
      logo: "/images/paying.webp",
      title: "Guaranteed Price Protection",
      info: "Fixed pricing with no hidden costs or surprises and complete transparency. The estimate remains unchanged once finalized until and unless the client makes the changes.",
    },
    {
      logo: "/images/24-tracking.webp",
      title: "440+ Quality Checks",
      info: "Home construction with perfection! We perform 440+ quality checks on the construction, to ensure your home meets the highest construction standards.",
    },
    {
      logo: "/images/payment-stages.webp",
      title: "Timely Delivery",
      info: "Guaranteed on-time completion because your dream home shouldn’t wait. In rare delays, we impose penalties for accountability and your peace of mind.",
    },
    {
      logo: "/images/real-time.webp",
      title: "Payment In Stages",
      info: "Our Construction-Linked Payment Plan lets you make stage-wise payments that align with your home's construction progress and bank loan terms.",
    },
    {
      logo: "/images/quality-checks.webp",
      title: "24*7 Real Time Tracking",
      info: "Track your home construction with ease using our dashboard and mobile app. Get real-time updates, view timelines, and monitor milestones for transparency and control.",
    },
    {
      logo: "/images/quality-checks.webp",
      title: "24*7 Real Time Tracking",
      info: "Track your home construction with ease using our dashboard and mobile app. Get real-time updates, view timelines, and monitor milestones for transparency and control.",
    },
  ];

  return (
    <div className="">
      {/* Heading */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl  sm:text-3xl md:text-4xl font-bold">
          Why Choose <span className="text-yellow-500">Patil.Com</span>
        </h1>

        <div className="mt-4 text-center px-4 sm:px-6 md:px-12 lg:px-20">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            At Thikedaar.Com, we transform your home construction dreams into
            reality
          </p>

          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            With our expert team & seamless process. From design to delivery, we
            ensure quality & transparency at every step of the way.
          </p>

          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            Our mission is to build homes that embody your vision, constructed
            with top-notch craftsmanship & innovative technology.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {information.map((item, index) => (
          <div
            key={index}
            className="p-6 shadow-lg flex items-start gap-4 rounded-lg bg-white hover:shadow-xl transition duration-300"
          >
            {/* Logo */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
              <img
                className="h-10 w-10 object-contain"
                src={item.logo}
                alt={item.title}
              />
            </div>

            {/* Text */}
            <div className="space-y-2 text-gray-700">
              <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
              <p className="text-base leading-snug text-gray-600">
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
