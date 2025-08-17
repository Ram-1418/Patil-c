import React from 'react'

const Why = () => {
  const information = [
    {
      logo: "/images/paying.webp",
      title: "Guaranteed Price Protection",
      info: "Fixed pricing with no hidden costs or surprises and complete transparency. The estimate remains unchanged once finalized until and unless the client makes the changes."
    },
    {
      logo: "/images/24-tracking.webp",
      title: "440+ Quality Checks",
      info: "Home construction with perfection! We perform 440+ quality checks on the construction, to ensure your home meets the highest construction standards."
    },
    {
      logo: "/images/payment-stages.webp",
      title: "Timely Delivery",
      info: "Guaranteed on-time completion because your dream home shouldn’t wait. In rare delays, we impose penalties for accountability and your peace of mind."
    },
    {
      logo: "/images/real-time.webp",
      title: "Payment In Stages",
      info: "Our Construction-Linked Payment Plan lets you make stage-wise payments that align with your home's construction progress and bank loan terms."
    },
    {
      logo: "/images/quality-checks.webp",
      title: "24*7 Real Time Tracking",
      info: "Track your home construction with ease using our dashboard and mobile app. Get real-time updates, view timelines, and monitor milestones for transparency and control."
    }
  ];

  return (
    <div className="">
      {/* Heading */}
      <div className="mt-10 text-center">
        <h1 className="text-[36px] sm:text-[24px] md:text-[40px] font-bold">
          Why Choose <span className="text-yellow-500">Patil.Com</span>
        </h1>

        <div className="mt-4 text-[18px] sm:text-[14px] md:text-[20px] leading-relaxed text-gray-700">
          <p>
            At Thikedaar.Com, we transform your home construction dreams into reality
            with our expert team & seamless process. From design to delivery,
            we ensure quality & transparency at every step of the way.
          </p>
          <p className="mt-2">
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
            className="p-6 shadow-lg flex items-start gap-4 rounded-lg bg-white hover:shadow-xl transition"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
              <img className="h-8 w-8" src={item.logo} alt={item.title} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
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
