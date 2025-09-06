import BreadCrumb from "../components/BreadCrumb";
import hq from "../assets/icons/hq.svg";
import gi from "../assets/icons/gi.svg";
import mail from "../assets/icons/mail.svg";
import mapImage from "../assets/map.png";

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

      <section className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* Left column */}
          <div className="flex-1">
            <p className="text-3xl text-orange-500 mb-2">Let’s talk</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How can we help you?
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Whether you have questions about our products, want to explore
              partnership opportunities
            </p>

            <hr className="mb-8 border-gray-300" />

            {/* Contact items */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green text-white">
                  <img src={hq} alt="location" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Headquarters</h3>
                  <p className="text-gray-600 text-sm">
                    36927 Towne View Lake Daishaton, KS 60725
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green text-white">
                  <img src={gi} alt="phone" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">General inquiries</h3>
                  <p className="text-gray-600 text-sm">+1.555.897.1234</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green text-white">
                  <img src={mail} alt="email" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email address</h3>
                  <p className="text-gray-600 text-sm">info@yourwebsite.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column (Form) */}
          <div className="flex-1">
            <form className="bg-[#D9E2DF] p-8 rounded-xl shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#F3F3F3] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#F3F3F3] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#F3F3F3] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                />
                <input
                  type="text"
                  placeholder="Our Services"
                  className="bg-[#F3F3F3] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
                />
              </div>

              <textarea
                placeholder="Message"
                rows="5"
                className="bg-[#F3F3F3] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
              ></textarea>

              <button
                type="submit"
                className="bg-green text-white  font-medium px-6 py-3 rounded-md hover:bg-darkgreen transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="w-full h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        {/* Optional overlay if you want */}
        <div className="w-full h-full bg-black/10"></div>
      </section>
    </>
  );
};

export default Contact;
