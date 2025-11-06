import { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

import React, { useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import ContactCards from "../ui/ContactCards";
import StoreMap from "../ui/StoreMap";
import SocialIcons from "../ui/SocialIcons";

function AnimatedItem({ children, delay = 0 }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible) setHasBeenVisible(true);
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-900 ease-out transform ${
        hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="text-center mt-20">
      <AnimatedItem delay={300}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Visite a nossa loja
        </h2>
        <span className="text-gray-600 text-1xl md:text-2xl px-4 font-extralight">
          Estamos prontos para atender você com as melhores soluções em
          tecnologia mobile
        </span>
      </AnimatedItem>
      <AnimatedItem delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-12 gap-10 md:gap-20 px-4 md:px-20">
          <div className="mb-2 md:mb-0 flex-col max-w-150 flex items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 leading-tight">
              Informações de contato
            </h3>
            <ContactCards icon={FaLocationArrow} title={"Endereço"} description={"R. Barão de Mesquita, 365 - Loja A"} description2={"Tijuca, Rio de Janeiro - RJ, 20540-001"} />
            <ContactCards icon={FaPhoneAlt} title={"Telefone"} description={"(21) 99521-9772"} description2={"(21) 98551-1050"} />
            <ContactCards icon={FaClock} title={"Horário de funcionamento"} description={"Seg. a Sexta - 09h00 às 19h00"} description2={"Sábado - 09h00 às 16h00"} />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 leading-tight">Redes sociais</h3>
              <div className="flex justify-center space-x-6">
                <SocialIcons icon={FaFacebook} socialUrl={"https://www.facebook.com/p/TijuTech-61575993369587"} title={"Facebook"}/>
                <SocialIcons icon={FaInstagram} socialUrl={"https://www.instagram.com/tiju.tech"} title={"Instagram"}/>
              </div>
            </div>
          </div>
          <StoreMap />
        </div>
      </AnimatedItem>
    </section>
  );
}
