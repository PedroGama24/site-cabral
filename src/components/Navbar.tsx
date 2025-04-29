
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="bg-cabral-blue text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a3dc8a57-408e-4a11-9945-d7908d660d59.png" 
              alt="Cabral Estética Automotiva" 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-200 font-medium">Home</Link>
          <Link to="/servicos" className="hover:text-gray-200 font-medium">Serviços</Link>
          <Link to="/planos" className="hover:text-gray-200 font-medium">Planos</Link>
          <Link to="/sobre" className="hover:text-gray-200 font-medium">Sobre</Link>
          <Link to="/contato" className="hover:text-gray-200 font-medium">Contato</Link>
        </nav>
        
        <Button asChild variant="outline" className="bg-white text-cabral-blue hover:bg-gray-100">
          <Link to="/agendar">Agendar</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
