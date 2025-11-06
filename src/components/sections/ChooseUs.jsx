import { useEffect, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import CardsInfo from "../ui/CardsInfo";

import { FaShieldAlt } from "react-icons/fa";
import { FaClockRotateLeft } from 'react-icons/fa6';
import { IoIosPricetags } from 'react-icons/io';

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

export default function ChooseUs() {
  return (
    <section
      id="choose-us"
      className="mt-24 flex justify-center flex-col items-center text-center"
    >
      <AnimatedItem delay={300}>
        <div>
          <h2 className="text-gray-800 text-4xl md:text-6xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="text-green-500 hover:text-green-600 duration-500 transition-color">
              Tijutech
            </span>
            ?
          </h2>
          <span className="text-gray-600 text-1xl md:text-2xl px-4 font-extralight">
            Somos especialistas em conserto de celulares, oferecendo serviços
            rápidos e confiáveis para todas as marcas e modelos
          </span>
        </div>
      </AnimatedItem>
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center">
      <AnimatedItem delay={500}>
        <CardsInfo icon={FaShieldAlt} title={"Qualidade Garantida"} description={"Excelentes produtos com garantia"}/>
      </AnimatedItem>
      <AnimatedItem delay={500}>
        <CardsInfo icon={FaClockRotateLeft} title={"Atendimento Rápido"} description={"Serviço agil e profissional"}/>
      </AnimatedItem>
      <AnimatedItem delay={500}>
        <CardsInfo icon={IoIosPricetags} title={"Melhor preço"} description={"Preços competitivos e formas de pagamento"}/>
      </AnimatedItem>
      </div>

    </section>
  );
}
