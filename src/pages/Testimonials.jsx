import BreadCrumb from "../components/BreadCrumb"
import testimage from "../assets/testimonial.png"

const Testimonials = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <div>
            {/* Page Breadcrumb */}
            <BreadCrumb text="Home / Testimonials" />
            {/* Heading */}
            <h1 className="text-8xl md:text-5xl font-black text-green mb-6">
              Testimonials
            </h1>

            {/* Paragraph */}
            <p className="text-sm text-dark/80 font-extrabold max-w-2xl mx-auto">
              Our success is determined by the satisfaction and success of our
              clients. Follow their story by reading our customers’ journeys
              using our themes
            </p>
          </div>

          <div className="mt-20 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            {/* Left column */}
            <div className="flex-1 text-left">
              <p className="text-sm text-lightorange font-medium mb-3">
                Customer experiences
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Experience our services <br />
                through the eyes of our customers
              </h2>
              <p className="text-gray-600 mb-4 max-w-lg">
                Explore the challenges our clients have conquered, the
                innovations they’ve achieved, and the satisfaction they’ve
                experienced through our WordPress development services. Their
                journeys showcase our dedication to quality, precision, and
                client success.
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                As you immerse yourself in the stories and insights shared by
                our clients, we hope you’ll gain a deeper understanding of the
                potential that exceptional WordPress development can unlock.
                These narratives inspire and reflect the unique value offered by
                our agency.
              </p>

              <button className="bg-green text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-darkgreen transition">
                Learn more
              </button>
            </div>

            {/* Right column */}
            <div className="flex-1 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden">
                <img
                  src={testimage}
                  alt="Customer testimonial"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Review Rating card */}
              <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-6 py-4 flex items-center gap-3">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-gray-700 font-medium">Review Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials