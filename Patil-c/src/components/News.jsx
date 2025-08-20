import React from 'react'

const News = () => {
  const information = [
    {
      image: "/images/14.webp",
      title: "Breaking News: AI is transforming industries",
      description: "Artificial Intelligence is revolutionizing healthcare, finance, and construction by improving efficiency and accuracy.",
      date: "Aug 20, 2025",
      author: "Rameshwar Patil",
      category: "Technology",
    },
    {
      image: "/images/15.webp",
      title: "Latest Update: Construction tech is booming",
      description: "Smart construction tools and AI-powered planning are reshaping how buildings are designed and executed in India.",
      date: "Aug 18, 2025",
      author: "Yogesh Bhore",
      category: "Construction",
    },
    {
      image: "/images/16.webp",
      title: "Hot Topic: React continues to dominate frontend",
      description: "React remains the most popular frontend library due to its component-driven architecture and strong community support.",
      date: "Aug 16, 2025",
      author: "Tech Desk",
      category: "Programming",
    },
  
  ]

  return (
    <div className="p-6">
      <div className=" text-center ">
        <h1 className="text-2xl sm:text-base md:text-3xl  lg:text-4xl font-bold text-center">
          In <span className="text-yellow-400 text-center">News</span>
        </h1>
        <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold text-center mt-6">
          View All News
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {information.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md hover:shadow-lg transition p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-auto h-30 object-cover rounded-md"
            />
            <h2 className="mt-3 text-lg font-bold">{item.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {item.date} • {item.author} • {item.category}
            </p>
            <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
