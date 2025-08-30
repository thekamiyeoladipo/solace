import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(eyebrowRef.current, { y: -30, opacity: 0 })
      .from(headlineRef.current, { y: 50, opacity: 0 }, "-=0.3")
      .from(paragraphRef.current, { y: 30, opacity: 0 }, "-=0.2")
      .from(buttonRef.current, { scale: 0.8, opacity: 0 }, "-=0.2")
      .from(
        statsRef.current,
        { y: 40, opacity: 0, stagger: 0.2 },
        "-=0.3"
      )
      .from(imageRef.current, { x: 80, opacity: 0 }, "-=0.6");
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-8">
        <div className="grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-y-8 gap-x-8 md:grid-cols-2 py-10">
          {/* Left column */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
            {/* Eyebrow */}
            <p
              ref={eyebrowRef}
              className="text-lightorange font-semibold tracking-wide mb-8"
            >
              Transforming ideas into reality
            </p>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-dark max-w-xl"
            >
              Transform <br /> Your Online Presence
            </h1>

            {/* Subtext */}
            <p
              ref={paragraphRef}
              className="mt-6 text-lg font-normal text-dark max-w-lg"
            >
              Reveal the ultimate WordPress theme that’s lightweight,
              modifiable, and user-friendly.
            </p>

            {/* CTA */}
            <div ref={buttonRef} className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-green text-white px-6 py-3 transition-transform hover:scale-105 active:scale-95"
              >
                Get a Quote
              </Link>
            </div>

            {/* Bottom labels */}
            <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-start md:gap-16">
              {[
                { number: "4,652", label: "Clients" },
                { number: "27,564", label: "Completed Projects" },
                { number: "30 yrs", label: "Journey Experiences" },
              ].map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <span className="text-3xl font-extrabold text-dark">
                    {stat.number}
                  </span>
                  <span className="text-base text-dark/80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative md:justify-self-end">
            <div ref={imageRef}>
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
