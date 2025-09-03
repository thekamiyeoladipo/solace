import BreadCrumb from "../components/BreadCrumb"

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
        </div>
      </section>
    </>
  );
}

export default Testimonials