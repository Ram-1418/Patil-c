import React from 'react'

const Partners = () => {


   const images = [
  { images1: "/images/1.webp" },
  { images1: "/images/2.webp" },
  { images1: "/images/3.webp" },
  { images1: "/images/4.webp" },
  { images1: "/images/5.webp" },
  { images1: "/images/6.webp" }
];

  return (
    <div>
        <div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-5'>Our Banking <span className='text-yellow-400 font-bold'>Partners</span></h1>
        </div>
        <div className='flex  flex-wrap items-center justify-center gap-6  mt-5 '> 
            {images.map((item,index)=>(
                <div
                 
                  key={index}
                >
                    <img  className='flex' src={item.images1} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Partners