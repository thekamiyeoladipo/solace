import whyChooseUSImg from '../assets/why-choose-us-image.svg';
import resIcon from '../assets/icons/responsive-design.svg';
import globalIcon from '../assets/icons/global-colo-pallete.svg';
import transIcon from '../assets/icons/translation-ready.svg';
import blogIcon from '../assets/icons/blog-page-setting.svg';



const WhyChoosUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column - Image */}
        <div className="flex-1">
          <img
            src={whyChooseUSImg}
            alt="Why Choose Us"
            className="w-full max-w-md mx-auto rounded-[40%] object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex-1">
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <p className="text-lightorange font-semibold tracking-wide mb-8">
              Why Choose Us
            </p>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-dark max-w-xl">
              Precision & Innovation
            </h1>
            {/* Subtext */}
            <p className="mt-6 text-lg font-normal text-dark max-w-lg">
              We create thousands of template with hight quality and modern
              features that fit with any business field
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {/* 1 */}
            <div className="flex items-start space-x-4 mt-5">
              <img
                src={resIcon}
                alt="Responsive Design"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Responsive Design
                </h3>
                <p className="mt-2 text-dark/80">
                  Solace responsive design adapts to screens of all sizes for
                  optimal viewing.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-start space-x-4 mt-5">
              <img
                src={globalIcon}
                alt="Responsive Design"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Global Color Palette
                </h3>
                <p className="mt-2 text-dark/80">
                  Use the global color palette to easily align your site’s
                  design with your brand.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex items-start space-x-4 mt-5">
              <img
                src={transIcon}
                alt="Responsive Design"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Translation Ready
                </h3>
                <p className="mt-2 text-dark/80">
                  Make your content accessible to users around the world.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex items-start space-x-4 mt-5">
              <img
                src={blogIcon}
                alt="Responsive Design"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Blog Page Setting
                </h3>
                <p className="mt-2 text-dark/80">
                  Customize settings to display posts in a layout that resonates
                  with audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoosUs