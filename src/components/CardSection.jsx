// src/components/CardSection.jsx
import Card from "./Card";
import redirectIcon from "../assets/icons/redirect-icon.svg";
import blogTemplate from "../assets/blog-template.png";
import cofeeTemplate from "../assets/cofee-template.png";
import ecommerceTemplate from "../assets/ecommerce-template.png";
import portfolioTemplate from "../assets/portfolio-template.png";

const cards = [
  {
    id: 1,
    title: "Coffe Shop WP Template",
    image: cofeeTemplate,
    link: "#",
    icon: redirectIcon,
  },
  {
    id: 2,
    title: "Portfolio WP Template",
    image: portfolioTemplate,
    link: "#",
    icon: redirectIcon,
  },
  {
    id: 3,
    title: "Blog WP Template",
    image: blogTemplate,
    link: "#",
    icon: redirectIcon,
  },
  {
    id: 4,
    title: "e-commerce Corporate WP Template",
    image: ecommerceTemplate,
    link: "#",
    icon: redirectIcon,
  },
];

export default function CardSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
