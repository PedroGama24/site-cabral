
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 1,
    title: 'Lavagem Completa',
    description: 'Lavagem externa completa, limpeza de rodas, pneus, caixa de roda e compartimento de motor.',
    details: 'Nossa lavagem completa remove sujeiras profundas, insetos, excrementos de pássaros e outros contaminantes. Utilizamos produtos de alta qualidade que não danificam a pintura e garantem um resultado perfeito.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 2,
    title: 'Polimento Técnico',
    description: 'Remoção de riscos leves e médios, recuperação de brilho e proteção da pintura.',
    details: 'O polimento técnico é realizado em etapas, com equipamentos profissionais e compostos abrasivos específicos para cada tipo de pintura. O resultado é uma superfície livre de imperfeições, com brilho intenso e proteção duradoura.',
    imageUrl: 'https://images.unsplash.com/photo-1635774855536-9728f2610245?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 3,
    title: 'Vitrificação Premium',
    description: 'Proteção cerâmica de alta durabilidade para pintura, vidros e partes plásticas.',
    details: 'A vitrificação premium cria uma camada protetora sobre a pintura, vidros e partes plásticas do veículo, aumentando a resistência a riscos, raios UV e contaminantes. Além disso, proporciona um brilho espelhado e facilita a limpeza do veículo.',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 4,
    title: 'Higienização Completa',
    description: 'Limpeza profunda de todo o interior, incluindo bancos, carpetes e painel.',
    details: 'Nossa higienização completa remove sujeiras, manchas, odores e agentes alérgenos do interior do seu veículo. Utilizamos equipamentos de extração e produtos específicos para cada tipo de material, garantindo um ambiente limpo e saudável.',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 5,
    title: 'Cristalização de Vidros',
    description: 'Tratamento que aumenta a visibilidade e repele água e sujeira dos vidros.',
    details: 'A cristalização cria uma película invisível sobre os vidros, que repele água, poeira e facilita a remoção de insetos. Também melhora a visibilidade em dias de chuva e reduz o acúmulo de sujeira.',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 6,
    title: 'Revitalização de Plásticos',
    description: 'Recuperação da cor e brilho de plásticos externos e internos.',
    details: 'Nossa revitalização de plásticos recupera a aparência original de parachoques, painéis e outros componentes plásticos que ficaram ressecados ou desbotados devido à exposição solar. O tratamento inclui limpeza profunda, hidratação e proteção UV.',
    imageUrl: 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&q=80&w=800&h=500'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-cabral-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça todos os serviços de estética automotiva que oferecemos para cuidar do seu veículo.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-cabral-blue text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-cabral-blue">Precisa de atendimento personalizado?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Entre em contato conosco via WhatsApp para tirar dúvidas, solicitar orçamentos ou agendar um serviço.
            </p>
            <a
              href="https://wa.me/5547987654321"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="mr-2" />
              <span>Fale pelo WhatsApp</span>
            </a>
          </div>
        </section>
        
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
