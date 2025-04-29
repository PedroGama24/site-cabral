
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-cabral-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça a história da Cabral Estética Automotiva e nosso compromisso com a excelência.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cabral-blue">Nossa História</h2>
                <p className="mb-4 text-gray-600">
                  Fundada em 2015, a Cabral Estética Automotiva nasceu da paixão por carros e do desejo de oferecer serviços de estética automotiva de excelência em Blumenau.
                </p>
                <p className="mb-4 text-gray-600">
                  O que começou como um pequeno empreendimento, hoje se tornou referência no mercado de estética automotiva na região, atendendo clientes exigentes que buscam o melhor para seus veículos.
                </p>
                <p className="text-gray-600">
                  Nossa missão é proporcionar experiências excepcionais aos nossos clientes, através de serviços de alta qualidade, atendimento personalizado e resultados que superam expectativas.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Equipe Cabral Estética Automotiva" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-cabral-blue">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-cabral-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-cabral-blue">Excelência</h3>
                <p className="text-gray-600 text-center">
                  Buscamos a perfeição em cada detalhe, utilizando as melhores técnicas e produtos do mercado.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-cabral-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-cabral-blue">Transparência</h3>
                <p className="text-gray-600 text-center">
                  Mantemos uma comunicação clara e honesta com nossos clientes em todas as etapas do serviço.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-cabral-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-cabral-blue">Compromisso</h3>
                <p className="text-gray-600 text-center">
                  Cumprimos o que prometemos, respeitando prazos e garantindo a satisfação total de nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-cabral-blue">Nossa Equipe</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600">
              Contamos com profissionais altamente qualificados e apaixonados por estética automotiva.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member + 60}.jpg`} 
                    alt="Membro da equipe" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-cabral-blue">
                      {member === 1 ? "João Cabral" : 
                       member === 2 ? "Ana Silva" : 
                       member === 3 ? "Carlos Santos" : "Mariana Oliveira"}
                    </h3>
                    <p className="text-gray-600">
                      {member === 1 ? "Fundador & Especialista em Polimento" : 
                       member === 2 ? "Especialista em Higienização" : 
                       member === 3 ? "Técnico em Vitrificação" : "Atendimento ao Cliente"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
