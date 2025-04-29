
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactSection from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-cabral-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Contato</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Entre em contato conosco para tirar dúvidas, solicitar orçamentos ou agendar um serviço.
            </p>
          </div>
        </section>
        
        <ContactSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-cabral-blue">Onde Estamos</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28573.58038214489!2d-49.09099333700413!3d-26.914063888613403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e408b5c3095%3A0xacfb8a999ef6f151!2sBlumenau%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1682455230000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa de localização"
              ></iframe>
            </div>
          </div>
        </section>
        
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
