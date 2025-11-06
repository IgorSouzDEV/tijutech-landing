export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-20 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0">
                <img src="./src/assets/images/logo_tijutech.png" alt="Logo Tijutech" className="w-45"/>
            </div>
            <div className="mr-0 md:mr-10 text-center md:text-end">
                <p>&copy; {new Date().getFullYear()} TijuTech. Todos os direitos reservados.</p>
                <span>R. Barão de Mesquita, 365 - Loja A - Tijuca, Rio de Janeiro - RJ, 20540-001</span>
                <p>Desenvolvido por: <a className="text-gray-300" href="https://github.com/IgorSouzDEV">Igor de Souza Aguiar</a></p>
            </div>
        </footer>
    );
}