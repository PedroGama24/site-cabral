
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
                      href="https://wa.me/5547997532495?text=Olá! Gostaria de agendar um serviço de estética automotiva"
                      className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 transition-colors text-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp mr-4" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
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
