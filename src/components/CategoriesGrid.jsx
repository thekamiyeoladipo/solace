import ecommerce from "../assets/icons/ecommerce.svg";
import education from "../assets/icons/education.svg";
import events from "../assets/icons/events.svg";
import realestate from "../assets/icons/realestate.svg";
import technology from "../assets/icons/technology.svg";
import corporate from "../assets/icons/corporate.svg";

const ITEMS = [
  {
    icon: ecommerce,
    title: "E-commerce",
    description:
      "Designed to enhance user experience, these templates come with built-in features for easy product management",
  },
  {
    icon: realestate,
    title: "Real Estate",
    description:
      "These designs offer elegant layouts, integrated map views, and powerful search functionality",
  },
  {
    icon: technology,
    title: "Technology",
    description:
      "Perfect for tech companies, startups, and IT services, these templates feature modern designs, interactive elements",
  },
  {
    icon: corporate,
    title: "Corporate",
    description:
      "Designed to enhance user experience, these templates come with built-in features for easy product management",
  },
  {
    icon: events,
    title: "Events",
    description:
      "These designs offer elegant layouts, integrated map views, and powerful search functionality",
  },
  {
    icon: education,
    title: "Education",
    description:
      "Perfect for tech companies, startups, and IT services, these templates feature modern designs, interactive elements",
  },
];

export default function CategoriesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="group cursor-pointer
                rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
                bg-white transition-all duration-300 
                flex flex-col items-center text-center
                hover:bg-green hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* Icon */}
              <div
                className="
                  h-14 w-14 rounded-full flex items-center justify-center 
                  bg-[#EAF3FF] transition-colors duration-300
                  group-hover:bg-white/15
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-7 w-7 transition duration-300 hover:text-white"
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-6 text-xl font-bold text-green 
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3 text-sm leading-relaxed text-dark/70
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
