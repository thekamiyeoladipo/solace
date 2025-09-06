import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import WhyChoosUs from "../components/WhyChoosUs";
import SectionTitle from "../components/SectionTitle";
import CategoriesGrid from "../components/CategoriesGrid";
import why from "../assets/whychooseus.svg";
import whyy from "../assets/whychooseus.png";
import cta from "../assets/cta-bg.png";
import Faq from "../components/Faq";

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

const Home = () => {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <WhyChoosUs />
      <SectionTitle
        eyebrow="Template categories"
        heading="Designs for every need"
        paragraph="Each design is optimized for usability and efficiency, 
ensuring an ideal fit for your project."
      />
      <CategoriesGrid />
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
      <Faq />
      {/* CTA section */}
      <section
        id="cta"
        className="relative bg-cover bg-center text-center py-24 px-6"
        style={{ backgroundImage: `url(${cta})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-2xl mx-auto text-white">
          <SectionTitle
            eyebrow="Let's show your business"
            heading="Turn imagination into reality"
            paragraph="Unlock Solace’s advanced features and take your 
WordPress site to the next level."
            eyebrowColor="text-lightorange"
            titleColor="text-white"
            paraColor="text-white"
          />

          <button className="mt-12 px-6 py-3 bg-green text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
            Get a Quote
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
