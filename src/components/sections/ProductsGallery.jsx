import useOnScreen from "../../hooks/useOnScreen";
import { useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard";

import capasImg from "../../assets/images/card-image-1.webp";
import carregadoresImg from "../../assets/images/card-image-2.webp";
import fonesImg from "../../assets/images/card-image-3.webp";
import peliculasImg from "../../assets/images/card-image-4.webp";
import pecasImg from "../../assets/images/card-image-5.webp";
import powerBanksImg from "../../assets/images/card-image-6.webp";


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

export default function ProductsGallery() {
  return (
    <section
      id="products"
      className="mt-24 flex justify-center flex-col items-center text-center"
    >
      <div className="leading-tight">
        <AnimatedItem delay={200}>
          <h2 className="text-gray-800 text-4xl md:text-6xl font-bold mb-4">
            Nossos produtos
          </h2>
          <span className="text-gray-600 text-xl md:text-lg font-extralight">
            Produtos de qualidade para todos os modelos e marcas
          </span>
        </AnimatedItem>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3">
        <AnimatedItem delay={300}>
          <ProductCard
            title={"Peças de Reposição"}
            image={pecasImg}
            description={
              "Peças de reposição para manter seu dispositivo funcionando como novo."
            }
          />
        </AnimatedItem>
        <AnimatedItem delay={300}>
          <ProductCard
            title={"Capas Protetoras"}
            image={capasImg}
            description={
              "Capas protetoras resistentes e elegantes para manter seu dispositivo seguro."
            }
          />
        </AnimatedItem>
        <AnimatedItem delay={300}>
          <ProductCard
            title={"Carregadores"}
            image={carregadoresImg}
            description={
              "Carregadores de alta qualidade para carregar seu smartphone com conforto."
            }
          />
        </AnimatedItem>
        <AnimatedItem delay={300}>
          <ProductCard
            title={"Fones de Ouvido"}
            image={fonesImg}
            description={
              "Fones de ouvido de alta qualidade para uma experiência sonora imersiva."
            }
          />
        </AnimatedItem>
        <AnimatedItem delay={300}>
          <ProductCard
            title={"Películas de Tela"}
            image={peliculasImg}
            description={
              "Películas de tela duráveis que protegem contra arranhões e impactos."
            }
          />
        </AnimatedItem>
        <AnimatedItem delay={300}>
        <ProductCard
          title={"Power Banks"}
          image={powerBanksImg}
          description={
            "Power banks de alta qualidade para complementar seu smartphone."
          }
        />
        </AnimatedItem>
      </div>
    </section>
  );
}
