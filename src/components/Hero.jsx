
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8">
        <div className="grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-y-8 gap-x-8 md:grid-cols-2 py-10">
          {/* Left column */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
            {/* Eyebrow */}
            <p className="text-lightorange font-semibold tracking-wide mb-8">
              Transforming ideas into reality
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-dark max-w-xl">
              Transform <br /> Your Online Presence
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg font-normal text-dark max-w-lg">
              Reveal the ultimate WordPress theme that’s lightweight,
              modifiable, and user-friendly.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-green text-white px-6 py-3 transition-transform hover:scale-105 active:scale-95"
              >
                Get a Quote
              </Link>
            </div>

            {/* Bottom labels */}
            <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-start md:gap-16">
              {/* Clients */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-extrabold text-dark">4,652</span>
                <span className="text-base text-dark/80">Clients</span>
              </div>

              {/* Completed Projects */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-extrabold text-dark">
                  27,564
                </span>
                <span className="text-base text-dark/80">
                  Completed Projects
                </span>
              </div>

              {/* Journey Experiences */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-extrabold text-dark">
                  30 yrs
                </span>
                <span className="text-base text-dark/80">
                  Journey Experiences
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative md:justify-self-end">
            <div className="">
              <img
                src={heroImg}
                alt="Team member working on a laptop"
                className="h-[565px] w-[545px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
