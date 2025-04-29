
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  "Lavagem Completa",
  "Polimento Técnico",
  "Vitrificação Premium",
  "Higienização Completa",
  "Cristalização de Vidros",
  "Revitalização de Plásticos"
];

const SchedulePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-cabral-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Agendar Serviço</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Agende seu serviço de estética automotiva rapidamente pelo WhatsApp.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-cabral-blue">Como agendar seu serviço</CardTitle>
                  <CardDescription className="text-lg">É simples e rápido! Escolha o serviço e entre em contato</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-cabral-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Escolha o serviço desejado</h3>
                        <p className="text-gray-600 mb-4">
                          Selecione entre nossos diversos serviços de estética automotiva:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {services.map((service, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cabral-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Entre em contato pelo WhatsApp</h3>
                        <p className="text-gray-600 mb-2">
                          Envie-nos uma mensagem informando:
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start">
                            <span className="text-cabral-blue mr-2">•</span>
                            <span>O serviço que você deseja</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cabral-blue mr-2">•</span>
                            <span>Marca, modelo e ano do seu veículo</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cabral-blue mr-2">•</span>
                            <span>Data e horário de sua preferência</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cabral-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Confirmação do agendamento</h3>
                        <p className="text-gray-600">
                          Nossa equipe confirmará a disponibilidade, valores e detalhes do serviço. Após a confirmação, seu horário estará reservado!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <a
                      href="https://wa.me/5547987654321?text=Olá! Gostaria de agendar um serviço de estética automotiva"
                      className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 transition-colors text-lg"
                    >
                      <MessageCircle className="mr-2" size={24} />
                      <span>Agendar pelo WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-cabral-blue">Horário de Funcionamento</h2>
            <div className="max-w-md mx-auto grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-bold">Segunda a Sexta</h3>
                <p className="text-gray-600">8:00 - 18:00</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="font-bold">Sábado</h3>
                <p className="text-gray-600">8:00 - 12:00</p>
              </div>
            </div>
            <p className="text-gray-600">
              Recomendamos o agendamento prévio para garantir o melhor atendimento.
            </p>
          </div>
        </section>
        
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;
