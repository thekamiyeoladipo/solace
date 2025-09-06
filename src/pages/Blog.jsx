import blog1 from "../assets/Blog1.png"
import blog2 from "../assets/Blog2.png"
import blog3 from "../assets/Blog3.png"
const posts = [
    {
      id: 1,
      title: "How to Market and Sell Your WordPress Themes",
      description:
        "Sed posuere consectetur est at lobortis. Lorem ipsum nulla sit amet elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.",
      image: blog1,
      author: "Good Author",
      date: "July 16, 2025",
    },
    {
      id: 2,
      title: "Understanding the WordPress Theme Hierarchy",
      description:
        "Sed posuere consectetur est at lobortis. Lorem ipsum nulla sit amet elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.",
      image: blog2,
      author: "Good Author",
      date: "July 16, 2025",
    },
    {
      id: 3,
      title: "Integrating Popular Plugins into Your WP Themes",
      description:
        "Sed posuere consectetur est at lobortis. Lorem ipsum nulla sit amet elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.",
      image: blog3,
      author: "Good Author",
      date: "July 16, 2025",
    },
    {
      id: 4,
      title: "How to Market and Sell Your WordPress Themes",
      description:
        "Sed posuere consectetur est at lobortis. Lorem ipsum nulla sit amet elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.",
      image: blog1,
      author: "Good Author",
      date: "July 16, 2025",
    },
    {
      id: 5,
      title: "Understanding the WordPress Theme Hierarchy",
      description:
        "Sed posuere consectetur est at lobortis. Lorem ipsum nulla sit amet elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.",
      image: blog2,
      author: "Good Author",
        date: "July 16, 2025",
    },

  {
      id: 6,
      title: "Integrating Popular Plugins into Your WP Themes",
      description:
        "Sed posuere consectetur est at lobortis. Lorem ipsum nulla sit amet elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.",
      image: blog3,
      author: "Good Author",
      date: "July 16, 2025",
    },
    

  ];


const Blog = () => {
  return (
  <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID: 1 col on mobile, 2 on md, 3 on lg (matches your desktop screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Top image: taller on mobile, a bit shorter on desktop to match screenshots */}
              <div className="w-full h-64 md:h-44 lg:h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Title — slightly larger on mobile (base) and a bit tighter on larger screens */}
                <h3 className="text-xl md:text-lg font-semibold text-gray-900 leading-tight mb-2">
                  {post.title}
                </h3>

                {/* Short excerpt. Keep it short in height to match the compact look */}
                <p className="text-sm text-gray-600 mb-4 max-h-[3.6rem] overflow-hidden">
                  {post.description}
                </p>

                {/* Read more link */}
                <div className="mb-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-emerald-600 hover:underline"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <svg
                      className="ml-2 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6"></path>
                    </svg>
                  </a>
                </div>

                {/* Footer meta row: small avatar, author, dot separator, date */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                      {post.author.charAt(0)}
                    </div>
                    <div className="leading-tight">
                      <div className="text-[12px] text-gray-700">{post.author}</div>
                      <div className="text-[11px] text-gray-400">{post.date}</div>
                    </div>
                  </div>

                  {/* small action / meta on the right (keeps the compact, clean right-side metadata) */}
                  <div className="text-[11px] text-gray-400">
                    {/* a small dot and a category or reading time (optional) */}
                    <span>•</span> <span>2m read</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
)
};

export default Blog;
