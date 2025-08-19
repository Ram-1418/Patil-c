import React from 'react'

const Service = () => {

     const information = [
    {
      image: "/images/service-residential.webp",
      title: "Residential Construction",
      info: "Your idea, our work. Build your customized dream home with Thikedaar.Com's expert craftsmanship tailored to your vision and lifestyle..",
      arrow:"Know More->"
    },
    {
      image: "/images/service-commercial.webp",
      title: "Commercial Construction",
      info: "From business complexes to hotels, Thikedaar.Com delivers superior quality and efficiency in commercial construction, ensuring it reflects professionalism and functionality.",
      arrow:"Know More->"
    },
    {
      image: "/images/service-interior-design.webp",
      title: "Interiors",
      info: "Right before moving in, we make your house a home with our top-notch interior design service. It is fully customized to reflect your unique style and preferences.",
      arrow:"Know More->"
    },
    {
      image: "/images/service-maintainence.webp",
      title: "Maintenance",
      info: "Ensure the longevity and optimal performance of your property with Thikedaar.Com's comprehensive building maintenance services. We help you keep your investment in top condition.",
      arrow:"Know More->"
    },
]
  return (
    <div>
      <div className='text-center mt-6'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl '><span className='text-yellow-500'> Services</span> We Offer</h1>
        <button className=' rounded-full text-black bg-yellow-400  font-bold w-auto p-2 mt-2'>Services We Offer </button>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 ">
  {information.map((item, index) => (
    <div
      key={index}
      className="p-6 sm:ml-5 shadow-md rounded-lg bg-white hover:shadow-lg transition duration-300 flex flex-col"
    >
      {/* Image */}
      <div className=" w-full flex items-center justify-center mb-4">
        <img
          className="max-h-full object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        {item.title}
      </h2>

      {/* Info */}
      <p className="text-gray-600 leading-relaxed">
        {item.info}
      </p>
      <p className='text-lg font-bold text-yellow-500   '>{item.arrow}</p>
    </div>
  ))}
</div>



        
      
    </div>
  )
}

export default Service
