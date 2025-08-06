import React from 'react';


const inputFields = [
    { id: 1, type: 'text', placeholder: 'Enter Your Name' },
    { id: 2, type: 'text', placeholder: 'Enter Your Email' },
    { id: 3, type: 'text', placeholder: 'Enter Your Phone No' },
    { id: 4, type: 'text', placeholder: 'choose your State' },
    { id: 5, type: 'text', placeholder: 'Enter Project Details' },

]

const Home = () => {
    return (
        <div className=" relative bg-[url('/images/building6.png')] h-screen bg-cover gap-8 bg-center ">
            <div className='bg-black bg-opacity-60  h-full w-full grid grid-cols-1 md:grid-cols-2 mt-10 p-10 text-white items-center '>
                <div className="flex flex-col justify-center w-full max-w-screen-xl px-4 mx-auto space-y-2">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold leading-tight text-white max-w-[850px]">
                        Build Your Dream Home with <span className="text-yellow-400">Patil Construction</span>
                    </h1>

                    <p className="text-lg sm:text-2xl text-white font-semibold sm:text-left">Building Homes Simplified</p>

                    <button className="bg-yellow-400 hover:bg-yellow-500 sm:py-2 md:px-7 text-black font-semibold py-3  px-6 rounded-full w-fit shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                        Get Free Construction Estimate
                    </button>
                </div>


                <div className='flex flex-col justify-center shadow-2xl m-3 px-4'>
                    <p className=' text-yellow-400 font-semibold p-5 text-xl sm:text-lg md:text-2xl '>Request Free Tech Consultation</p>
                    {inputFields.map((field) => (
                        <input
                            key={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                                className="bg-transparent py-3 px-4 mt-4 border border-yellow-300 rounded w-full text-white  focus:outline-none focus:ring-2 focus:ring-yellow-200"
                        />


                    ))}

                    <button className='font-semibold text-2xl text-black bg-yellow-500 rounded-full p-2 mt-5'>Submit</button>
                </div>

            </div>
        </div>
    );
};

export default Home;
