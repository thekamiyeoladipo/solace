
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


    </>



  );
}

export default Home