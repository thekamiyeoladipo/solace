import BreadCrumb from "../components/BreadCrumb";

const Career = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <div>
            {/* Page Breadcrumb */}
            <BreadCrumb text="Home / Career" />
            {/* Heading */}
            <h1 className="text-8xl md:text-5xl font-black text-green mb-6">
              Career
            </h1>

            {/* Paragraph */}
            <p className="text-sm text-dark/80 font-extrabold max-w-2xl mx-auto">
              We’re looking for talented individuals who share our dedication to
              excellence and creativity. Explore exciting career opportunities
              and be part of our team
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career