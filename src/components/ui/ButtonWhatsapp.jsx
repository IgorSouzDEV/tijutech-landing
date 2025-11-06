import { FaWhatsapp } from "react-icons/fa";

export default function ButtonWhatsapp(props) {
  const { number, message = "Olá, gostaria de mais informações." } = props;
  const cleanNumber = number.replace(/\D/g, "");

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  return (
    <div>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo no WhatsApp"
      >
        <div className="flex bg-gray-200 justify-center items-center gap-3
        p-2 rounded-lg cursor-pointer w-fit hover:scale-105
        transition-transform duration-300">
          <FaWhatsapp size={32} className="text-gray-700"/>
          <span className="text-gray-700 text-lg whitespace-nowrap">
            WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
