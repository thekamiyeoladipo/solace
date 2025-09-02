import BreadCrumb from "../components/BreadCrumb";
import HeroImg from "../assets/aboutheroimage.svg";
import man from "../assets/man.png";
import WhyChoosUs from "../components/WhyChoosUs";
import SectionTitle from "../components/SectionTitle";
import CardSection from "../components/CardSection";

const About = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container mx-auto px-8 text-center">
          <div>
            {/* Page Breadcrumb */}
            <BreadCrumb text="Home / About Us" />
            {/* Heading */}
            <h1 className="text-8xl md:text-5xl font-black text-green mb-6">
              About Our Company
            </h1>

            {/* Paragraph */}
            <p className="text-sm text-dark/80 font-extrabold max-w-2xl mx-auto">
              We value your feedback, questions, and inquiries. Whether you have
              a project in mind, need assistance with our services, or simply
              want to say hello, we’re here to assist you.
            </p>
          </div>

          <div className="m-40 grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            {/* Left column - Image */}
            <div className="md:col-span-3 flex justify-center">
              <div className="">
                <img
                  src={HeroImg}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle column - Content */}
            <div className="md:col-span-6 text-center md:text-left">
              <p className="text-lightorange font-semibold mb-3">Who Are We</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-6">
                Pioneers in WP Theme <br /> creation in US
              </h2>
              <p className="text-dark/80 mb-4">
                We’re not just a company; we’re a dedicated team of creators,
                engineers, and visionaries. Our passion for WP Theme business
                services drives us to turn your ideas into tangible, remarkable
                creations.
              </p>
              <p className="text-dark/80">
                Join us on a journey of innovation, where we shape the future of
                WP Theme development one project at a time. Discover the
                SolaceWP difference, where your imagination becomes reality.
              </p>
            </div>

            {/* Right column - Categories */}
            <div className="md:col-span-3 flex flex-col gap-4">
              {[
                "Corporate",
                "E-commerce",
                "Portfolio",
                "Education",
                "Business",
                "Creative",
              ].map((category) => (
                <button
                  key={category}
                  className="bg-green text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-darkgreen"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark h-[500px] relative py-20 text-white mb-[350px]">
        {/* Text content (two columns) */}
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-green font-light mb-3">Our Story</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Shaping the future of WP Theme business service
            </h2>
          </div>
          <div>
            <p className="text-white/80 max-w-md sm:mt-8">
              We strive to make every project exceptional, ensuring the highest
              quality, attention to detail, and a commitment to your success.
              Let’s turn your concepts into reality and embark on a voyage of
              innovation together.
            </p>
          </div>
        </div>

        {/* Image overlay with button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-340px] w-11/12 md:w-4/5 lg:w-3/4 z-20">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={man}
              alt="About us"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />

            {/* Button overlay */}
            {/* <button className="absolute bottom-6 left-6 flex items-center gap-4 bg-green text-white px-6 py-4 rounded-xl shadow-md hover:bg-darkgreen transition">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold">Get to know us</p>
                <p className="text-sm text-white/80">
                  Watch the video about us
                </p>
              </div>
            </button> */}
          </div>
        </div>
      </section>

      <WhyChoosUs />
      <SectionTitle
        eyebrow="Our latest work"
        heading="Discover our recent Theme"
        paragraph="Whether you seek inspiration for your own projects or simply appreciate the art of 3D 
printing, this showcase is a window into the world of Printifix’s latest achievements."
      />
     <CardSection />





    </>
  );
};

export default About;
