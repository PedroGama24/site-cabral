
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-cabral-blue text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Cabral Estética Automotiva</h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          Seu carro merece esse cuidado. Serviços de estética automotiva 
          de alta qualidade em Blumenau, SC.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Button asChild className="bg-white text-cabral-blue hover:bg-gray-200">
            <Link to="/agendar">Agendar Agora</Link>
          </Button>
          
          <Button asChild variant="outline" className="border-white hover:bg-cabral-darkBlue">
            <Link to="/servicos">Nossos Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
