
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve!",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cabral-blue">Entre em Contato</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cabral-blue">Fale Conosco</h3>
            <p className="text-gray-600 mb-6">
              Estamos prontos para atender você e cuidar do seu veículo com a atenção que ele merece.
              Entre em contato para saber mais sobre nossos serviços ou agendar um horário.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-cabral-blue p-2 rounded-full text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Endereço</h4>
                  <p className="text-gray-600">Rua Exemplo, 123 - Centro, Blumenau, SC</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cabral-blue p-2 rounded-full text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-gray-600">(47) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cabral-blue p-2 rounded-full text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contato@cabralestética.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://wa.me/5547987654321"
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="mr-2" />
                  <span>Fale pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">Nome</label>
                <Input id="name" placeholder="Seu nome completo" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">Email</label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">Telefone</label>
                <Input id="phone" placeholder="(00) 00000-0000" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">Mensagem</label>
                <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} required />
              </div>
              
              <Button type="submit" className="bg-cabral-blue hover:bg-cabral-darkBlue w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
