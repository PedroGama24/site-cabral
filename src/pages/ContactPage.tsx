
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4278521209335!2d-44.131813!3d-22.52564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e98ff82d61525%3A0x2ee3c2c3129452fa!2svia%20S%C3%A9rgio%20Braga%2C%20Ponte%20Alta%2C%20Volta%20Redonda%20-%20Rio%20de%20Janeiro%2C%2027265%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1745937141101!5m2!1spt-BR!2sbr" 
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
