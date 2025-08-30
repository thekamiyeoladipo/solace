import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of WordPress templates do you offer?",
    answer:
      "We offer a wide variety of templates, including business, portfolio, eCommerce, blogs, and landing pages tailored to different needs.",
  },
  {
    question: "Are your templates responsive and mobile-friendly?",
    answer:
      "Yes, all our templates are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can I customize the templates to match my branding?",
    answer:
      "Absolutely! You can easily customize colors, fonts, layouts, and more to match your brand identity.",
  },
  {
    question: "Are your templates compatible with the latest version of WordPress?",
    answer:
      "Yes, we always keep our templates updated to be compatible with the latest WordPress versions.",
  },
  {
    question: "How do I receive updates for my purchased templates?",
    answer:
      "Once purchased, you’ll receive regular updates directly through your WordPress dashboard.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) {
        if (openIndex === i) {
          gsap.to(el, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
          gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <div className="mb-10 text-center">
        <p className="text-green-600 font-medium uppercase">FAQ</p>
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        <p className="text-gray-500 mt-2">
          Explore answers to frequently asked questions about our WordPress template kit.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left font-medium text-lg"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-gray-600" />
              ) : (
                <Plus className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <div
              ref={(el) => (refs.current[index] = el)}
              className="overflow-hidden h-0 opacity-0"
            >
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
