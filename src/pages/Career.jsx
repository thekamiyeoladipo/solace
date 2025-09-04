import BreadCrumb from "../components/BreadCrumb";
import innovation from "../assets/icons/innovation.svg";
import quality from "../assets/icons/quality.svg";
import scalability from "../assets/icons/scalability.svg";
import worldmap from "../assets/worldmap.png";
import mensmiling from "../assets/mensmiling.png";

const Career = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <div>
            {/* Page Breadcrumb */}
            <BreadCrumb text="Home / Career" />
            {/* Heading */}
            <h1 className="text-8xl md:text-5xl font-black text-green mb-6">
              Career
            </h1>

            {/* Paragraph */}
            <p className="text-sm text-dark/80 font-extrabold max-w-2xl mx-auto">
              We’re looking for talented individuals who share our dedication to
              excellence and creativity. Explore exciting career opportunities
              and be part of our team
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFFAFA]">
        <div className="container mx-auto px-6 md:px-12">
          {/* Title Section */}
          <div className="mb-12 text-left">
            <p className="text-orange-500 font-medium mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-snug max-w-3xl">
              Towards the best WordPress theme developer in the world
            </h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Column: World Map */}
            <div className="flex-1">
              <img
                src={worldmap}
                alt="World Map"
                className="w-full max-w-2xl"
              />
            </div>

            {/* Right Column: Features */}
            <div className="flex-1 flex flex-col justify-center gap-12">
              <div className="flex items-start gap-4">
                <img src={innovation} alt="Innovation" className="w-10 h-10" />
                <div>
                  <h3 className="text-lg font-bold">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    Pioneering new frontiers in 3D printing technology and
                    design.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src={quality} alt="Quality" className="w-10 h-10" />
                <div>
                  <h3 className="text-lg font-bold">Quality</h3>
                  <p className="text-gray-600 text-sm">
                    Delivering impeccable, precision-crafted results that exceed
                    expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={scalability}
                  alt="Scalability"
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold">Scalability</h3>
                  <p className="text-gray-600 text-sm">
                    Embracing eco-friendly practices and materials to protect
                    our planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      </section>

      <section className="py-20 bg-[#FFFAFA]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: Image */}
          <div className="flex-1">
            <img
              src={mensmiling}
              alt="Team working"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Testimonial */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Eyebrow with icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-green-500 font-medium">
                Watch the video production
              </p>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl md:text-3xl font-bold leading-snug text-gray-900 mb-6">
              “SolaceWP provided us with the perfect theme for our nonprofit
              organization. It’s easy to update, and the design elements help us
              effectively communicate our mission.”
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-bold text-gray-900">Linda Robinson</p>
              <p className="text-gray-600 text-sm">CEO SolaceWP</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
