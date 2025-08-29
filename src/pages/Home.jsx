import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import WhyChoosUs from "../components/WhyChoosUs";
import SectionTitle from "../components/SectionTitle";
import CategoriesGrid from "../components/CategoriesGrid";

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
       </div>
      </section>
    </>
  );
}

export default Home