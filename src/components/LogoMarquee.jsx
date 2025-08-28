import logo from "../assets/solace logo.svg";
import "../styles/marquee.css"

const LogoMarquee = () => {
    const logos = new Array(6).fill(logo); // Array of 6 logos
  return (
    <div>
        <section className="py-10 bg-white">
      <p className="text-center text-dark text-base mb-8">
        Trusted by reputable companies
      </p>

      <div className="overflow-hidden relative">
        <div className="flex animate-marquee space-x-12">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`logo-${i}`}
              className="h-12 w-auto object-contain"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((src, i) => (
            <img
              key={`dup-${i}`}
              src={src}
              alt={`logo-dup-${i}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default LogoMarquee