import { FaLocationArrow } from "react-icons/fa";

export default function ButtonLocation() {
  const LocationURL =
    "https://www.google.com/maps/place/TijuTech/@-22.9240141,-43.2358209,17z/data=!3m1!4b1!4m6!3m5!1s0x997fcd99beec1d:0x2099c2a6c41a2046!8m2!3d-22.9240141!4d-43.2358209!16s%2Fg%2F11mdjjt3v3?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="w-fit text-gray-300 hover:text-gray-100 transition-colors duration-300">
      <a
        href={LocationURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Localização"
      >
        <div className="flex items-center justify-center mt-8 gap-3 cursor-pointer">
          <FaLocationArrow
            size={22}
            className="text-gray-200 animate-bounce"
          />
          <span>
            R. Barão de Mesquita, 365 - Loja A - Tijuca, Rio de Janeiro - RJ,
            20540-001
          </span>
        </div>
      </a>
    </div>
  );
}
