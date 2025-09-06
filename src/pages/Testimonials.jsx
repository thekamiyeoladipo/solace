import BreadCrumb from "../components/BreadCrumb";
import testimage from "../assets/testimonial.png";
import testi from "../assets/testi.svg";
import SectionTitle from "../components/SectionTitle";
import why from "../assets/whychooseus.svg";

const testimonials = [
  {
    text: "SolaceWP’s themes are a breath of fresh air. The designs are modern and versatile, and customization is a breeze. Our website has never looked better!",
    name: "Randy Johnson",
    role: "Product designer",
    image: testi,
  },
  {
    text: "SolaceWP’s themes are a breath of fresh air. The designs are modern and versatile, and customization is a breeze. Our website has never looked better!",
    name: "Randy Johnson",
    role: "Product designer",
    image: testi,
  },
  {
    text: "SolaceWP’s themes are a breath of fresh air. The designs are modern and versatile, and customization is a breeze. Our website has never looked better!",
    name: "Randy Johnson",
    role: "Product designer",
    image: testi,
  },
  {
    text: "SolaceWP’s themes are a breath of fresh air. The designs are modern and versatile, and customization is a breeze. Our website has never looked better!",
    name: "Randy Johnson",
    role: "Product designer",
    image: testi,
  },
  {
    text: "SolaceWP’s themes are a breath of fresh air. The designs are modern and versatile, and customization is a breeze. Our website has never looked better!",
    name: "Randy Johnson",
    role: "Product designer",
    image: testi,
  },
  {
    text: "SolaceWP’s themes are a breath of fresh air. The designs are modern and versatile, and customization is a breeze. Our website has never looked better!",
    name: "Randy Johnson",
    role: "Product designer",
    image: testi,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Solace’s templates are a game-changer. They are not only visually appealing but also incredibly easy to customize. Our website now looks professional and inviting.",
    name: "Michael Lean",
    role: "Mechanical Engineer",
  },
  {
    quote:
      "As a web developer, I’ve used many templates, but Solace stands out for its quality and flexibility. The support team is also fantastic, helping me tailor the template.",
    name: "Sarah Grealish",
    role: "Product Designer",
  },
  {
    quote:
      "I was able to create a beautiful, functional website with minimal effort thanks to Solace. The templates are intuitive and versatile, perfect for someone like me.",
    name: "Mark Johnson",
    role: "Architect",
  },
];

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
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-16 px-6 text-center">
          {/* Heading */}
          <p className="text-sm text-lightorange mb-2">All reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonials from our valued clients
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We are proud to share their words, demonstrating the impact of our
            WordPress templates on their projects and businesses.
          </p>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 max-w-sm flex flex-col gap-4"
              >
                <p className="text-left text-lg font-semibold leading-relaxed">
                  “{item.text}”
                </p>
                <div className="flex text-yellow-500 text-lg">★★★★★</div>
                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-bold">{item.name}</h4>
                    <p className="text-sm text-green">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="" className="bg-black py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            eyebrow="Template categories"
            heading="Your perfect template author partner"
            paragraph="Discover the experiences of our satisfied customers 
who’ve seen their ideas come to life with Solace."
            eyebrowColor="text-green"
            titleColor="text-white"
            paraColor="text-white/70"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column: image */}
            <div className="">
              <img
                src={why}
                alt="Testimonial Author"
                className="rounded-full"
              />
            </div>

            {/* Right column: testimonials */}
            <div className="space-y-8">
              {TESTIMONIALS.map((item, index) => (
                <div key={index} className="border-b border-white/20 pb-6">
                  <p className="text-white mb-4 text-lg font-medium">
                    “{item.quote}”
                  </p>
                  <p className="text-green font-semibold">{item.name}</p>
                  <p className="text-white/70 text-sm uppercase tracking-wide">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
    {/* Left side */}
    <div className="md:w-1/2 space-y-4">
      <p className="text-sm text-yellow-500">Share your review</p>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">
        Real experiences with <br /> our WordPress themes
      </h2>
      <p className="text-gray-300">
        Let our community know what you feel and think about our WordPress
        theme you used
      </p>
    </div>

    {/* Right side (form card) */}
    <div className="bg-white rounded-2xl shadow-md p-8 md:w-1/2">
      <form className="flex flex-col gap-6">
        {/* Name + Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="bg-green items-center text-white px-6 py-2 rounded-md self-start hover:bg-green-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  );
};

export default Testimonials;
