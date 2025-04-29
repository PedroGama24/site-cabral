
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cabral-darkBlue text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cabral Estética Automotiva</h3>
            <p className="mb-4">Serviços de estética automotiva de alta qualidade em Blumenau, SC.</p>
            <p>Seu carro merece esse cuidado.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/servicos" className="hover:text-gray-300">Nossos Serviços</Link></li>
              <li><Link to="/sobre" className="hover:text-gray-300">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-gray-300">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>Rua Exemplo, 123 - Blumenau, SC</li>
              <li>contato@cabralestética.com</li>
              <li>(47) 98765-4321</li>
              <li className="pt-2">
                <a href="https://wa.me/5547987654321" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded inline-flex items-center mt-2">
                  <span>Fale pelo WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Cabral Estética Automotiva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
