
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cabral-blue">Por que escolher a Cabral</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-cabral-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-cabral-blue">Qualidade Garantida</h3>
            <p className="text-gray-600">Utilizamos produtos premium e técnicas avançadas para garantir resultados excepcionais.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-cabral-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-cabral-blue">Atendimento Ágil</h3>
            <p className="text-gray-600">Respeitamos seu tempo com agendamentos precisos e serviços realizados no prazo combinado.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-cabral-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-cabral-blue">Profissionais Qualificados</h3>
            <p className="text-gray-600">Nossa equipe é formada por especialistas treinados nas melhores técnicas de estética automotiva.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
