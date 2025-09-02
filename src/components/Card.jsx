// src/components/Card.jsx
export default function Card({ title, image, link, icon }) {
  return (
    <div className="relative w-full max-w-[540px] h-[380px] rounded-2xl overflow-hidden mx-auto">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <a
        href={link}
        className="absolute bottom-15 left-1/2 -translate-x-1/2 bg-black/90 text-white flex items-center justify-between px-6 py-4 rounded-xl shadow-md hover:bg-darkgreen transition w-[85%] sm:w-[75%]"
      >
        <span className="font-semibold">{title}</span>
        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
          <img src={icon} alt="redirect" className="w-5 h-5" />
        </div>
      </a>
    </div>
  );
}
