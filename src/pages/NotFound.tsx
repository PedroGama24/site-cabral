
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-cabral-blue mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Página não encontrada</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button asChild className="bg-cabral-blue hover:bg-cabral-darkBlue">
            <Link to="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
