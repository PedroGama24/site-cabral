
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsApp } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Básico",
    description: "Ideal para manter seu veículo sempre limpo",
    features: [
      "Lavagem externa completa",
      "Aplicação de cera de carnaúba",
      "Limpeza de rodas e pneus",
      "Aspiração interna básica"
    ]
  },
  {
    id: 2,
    name: "Premium",
    description: "Tratamento completo para aparência impecável",
    features: [
      "Lavagem externa detalhada",
      "Polimento técnico",
      "Higienização interna completa",
      "Hidratação de plásticos e couro",
      "Cristalização de vidros"
    ]
  },
  {
    id: 3,
    name: "Gold",
    description: "Proteção máxima e durabilidade para seu veículo",
    features: [
      "Lavagem técnica",
      "Descontaminação ferrosa",
      "Polimento em 3 etapas",
      "Vitrificação de pintura",
      "Higienização interna premium",
      "Proteção de tecidos e couro",
      "Revisão completa após 30 dias"
    ]
  }
];

const PlansPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-cabral-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Nossos Planos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça nossos planos de cuidados periódicos para manter seu veículo sempre impecável.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card key={plan.id} className="flex flex-col relative overflow-hidden">
                  <CardHeader className="text-center bg-gray-50 pb-6">
                    <CardTitle className="text-2xl text-cabral-blue">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <p className="text-center text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <a
                      href={`https://wa.me/5547987654321?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}`}
                      className="w-full flex items-center justify-center bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600 transition-colors"
                    >
                      <WhatsApp className="mr-2" /> 
                      <span>Solicitar Orçamento</span>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-cabral-blue">Planos Corporativos</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Temos planos especiais para empresas com frota de veículos. Entre em contato conosco para uma proposta personalizada.
            </p>
            <a
              href="https://wa.me/5547987654321?text=Olá! Gostaria de informações sobre planos corporativos"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              <WhatsApp className="mr-2" />
              <span>Solicitar proposta corporativa</span>
            </a>
          </div>
        </section>
        
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
