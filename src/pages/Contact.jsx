import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <div>
            {/* Page Breadcrumb */}
            <BreadCrumb text="Home / Contact Us" />
            {/* Heading */}
            <h1 className="text-8xl md:text-5xl font-black text-green mb-6">
              Contact Us
            </h1>

            {/* Paragraph */}
            <p className="text-sm text-dark/80 font-extrabold max-w-2xl mx-auto">
              We value your feedback, questions, and inquiries. Whether you have
              a project in mind, need assistance with our services, or simply
              want to say hello, we’re here to assist you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
