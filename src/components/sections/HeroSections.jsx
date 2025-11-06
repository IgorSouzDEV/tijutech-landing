import ButtonWhatsapp from "../ui/ButtonWhatsapp";
import ButtonLocation from "../ui/ButtonLocation";
import useOnScreen from "../../hooks/useOnScreen";
import { useEffect, useState } from "react";

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

export default function HeroSections() {
  return (
    <section className="flex flex-col items-start px-4 pt-20 md:pt-18">
      <AnimatedItem delay={100}>
        <div
          className="text-gray-100 font-semibold w-fit text-md md:text-lg mb-4 rounded-full border-green-600 
        px-3 py-1 bg-green-200/60 backdrop-blur-sm"
        >
          <p>Especialistas em Tecnologia Mobile</p>
        </div>
      </AnimatedItem>
      <AnimatedItem delay={100}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-8xl font-bold mb-6 text-gray-200 leading-tight">
            Tudo para o seu{" "}
            <span className="text-green-500 hover:text-green-600 duration-500 transition-color">
              smartphone
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-2 max-w-2xl">
            Peças, capas, carregadores e acessórios de alta qualidade para todos
            os modelos e marcas.
          </p>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            Qualidade garantida e atendimento especializado.
          </p>
        </div>
      </AnimatedItem>
      <AnimatedItem delay={300}>
        <ButtonWhatsapp number="(21)995219772" />
      </AnimatedItem>
      <AnimatedItem delay={300}>
        <ButtonLocation />
      </AnimatedItem>
    </section>
  );
}
