import React from 'react';

const inputFields = [
  { id: 1, type: 'text', name: 'name', placeholder: 'Enter Your Name' },
  { id: 2, type: 'email', name: 'email', placeholder: 'Enter Your Email' },
  { id: 3, type: 'tel', name: 'phone', placeholder: 'Enter Your Phone No' },
  { id: 4, type: 'text', name: 'state', placeholder: 'Choose your State' },
  { id: 5, type: 'text', name: 'project', placeholder: 'Enter Project Details' },
];

const tags = [
  { number: '440+', label: 'Quality Checks' },
  { number: '600k+', label: 'Sqft Build' },
  { number: '100%', label: 'On Time Delivery' },
  { number: '10+', label: 'Years Warranty' },
  { number: '5+', label: 'States' },
];

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/building6.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Section */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen p-10 text-white items-center">
        
        {/* Left - Heading */}
        <div className="flex flex-col justify-center w-full max-w-screen-xl px-4 mx-auto space-y-2 mt-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold leading-tight max-w-[850px]">
            Build Your Dream Home with{' '}
            <span className="text-yellow-400">Patil Construction</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold sm:text-left">
            Building Homes Simplified
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 sm:py-2 md:px-7 text-black font-semibold py-3 px-6 rounded-full w-fit shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
            Get Free Construction Estimate
          </button>
        </div>

        {/* Right - Form */}
        <form className="flex flex-col justify-center bg-black bg-opacity-40 p-6 rounded-lg shadow-2xl m-3">
          <p className="text-yellow-400 font-semibold mb-4 text-xl sm:text-lg md:text-2xl">
            Request Free Tech Consultation
          </p>
          {inputFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="bg-transparent py-3 px-4 mt-4 border border-yellow-300 rounded w-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
          ))}
          <button
            type="submit"
            aria-label="Submit consultation request"
            className="font-semibold text-2xl text-black bg-yellow-500 rounded-full p-2 mt-5"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-black bg-opacity-10 py-6">
        <div className="flex justify-center items-center gap-5 sm:gap-8 flex-wrap w-full px-5">
          {tags.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-semibold text-yellow-400">{item.number}</p>
              <p className="text-xl text-white font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
