import { Link } from "react-router-dom";
import heroImg from "../assets/hero.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Eyebrow
      tl.from(".hero-eyebrow", {
        y: -40,
        opacity: 0,
        duration: 0.8,
      });

      // Headline
      tl.from(
        ".hero-headline",
        {
          y: 60,
          opacity: 0,
          duration: 1,
        },
        "-=0.4"
      );

      // Subtext
      tl.from(
        ".hero-subtext",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

      // CTA button
      tl.from(
        ".hero-cta",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3"
      );

      // Stats (staggered in)
      tl.from(
        ".hero-stat",
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.2"
      );

      // Image
      tl.from(
        ".hero-img",
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
        },
        "-=1"
      );
    }, heroRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="bg-white" ref={heroRef}>
      <div className="container mx-auto px-8">
        <div className="grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-y-8 gap-x-8 md:grid-cols-2 py-10">
          {/* Left column */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
            {/* Eyebrow */}
            <p className="hero-eyebrow text-lightorange font-semibold tracking-wide mb-8">
              Transforming ideas into reality
            </p>

            {/* Headline */}
            <h1 className="hero-headline text-4xl md:text-6xl font-extrabold leading-[1.1] text-dark max-w-xl">
              Transform <br /> Your Online Presence
            </h1>

            {/* Subtext */}
            <p className="hero-subtext mt-6 text-lg font-normal text-dark max-w-lg">
              Reveal the ultimate WordPress theme that’s lightweight,
              modifiable, and user-friendly.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/contact"
                className="hero-cta inline-flex items-center justify-center rounded-lg bg-green text-white px-6 py-3 transition-transform hover:scale-105 active:scale-95"
              >
                Get a Quote
              </Link>
            </div>

            {/* Bottom labels */}
            <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-start md:gap-16">
              {/* Clients */}
              <div className="hero-stat flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-extrabold text-dark">4,652</span>
                <span className="text-base text-dark/80">Clients</span>
              </div>

              {/* Completed Projects */}
              <div className="hero-stat flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl font-extrabold text-dark">
                  27,564
                </span>
                <span className="text-base text-dark/80">
                  Completed Projects
                </span>
              </div>

              {/* Journey Experiences */}
              <div className="hero-stat flex flex-col items-center md:items-start text-center md:text-left">
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
            <div>
              <img
                src={heroImg}
                alt="Team member working on a laptop"
                className="hero-img h-[565px] w-[545px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
