
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 1,
    title: 'Revitalização de Plásticos Externos Interna',
    description: 'Lavagem externa completa, limpeza de rodas, pneus, caixa de roda e compartimento de motor.',
    details: 'Nossa lavagem completa remove sujeiras profundas, insetos, excrementos de pássaros e outros contaminantes. Utilizamos produtos de alta qualidade que não danificam a pintura e garantem um resultado perfeito.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 2,
    title: 'Remoção de Chuva Ácida',
    description: 'Remoção de riscos leves e médios, recuperação de brilho e proteção da pintura.',
    details: 'O polimento técnico é realizado em etapas, com equipamentos profissionais e compostos abrasivos específicos para cada tipo de pintura. O resultado é uma superfície livre de imperfeições, com brilho intenso e proteção duradoura.',
    imageUrl: 'https://imgs.search.brave.com/-WqrWc-oG8LGvM2PlYGiQYktj1jo1iqCk9vpSGRoIMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBh/cmFkb3JzYS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDgvUlNBX01B/VEVSSUFfMDJfSEVB/REVSLmpwZw'
  },
  {
    id: 3,
    title: 'Vidrificação de plasticos de 1 a 3 anos',
    description: 'Proteção cerâmica de alta durabilidade para pintura, vidros e partes plásticas.',
    details: 'A vitrificação premium cria uma camada protetora sobre a pintura, vidros e partes plásticas do veículo, aumentando a resistência a riscos, raios UV e contaminantes. Além disso, proporciona um brilho espelhado e facilita a limpeza do veículo.',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 4,
    title: 'Limpeza de Couro',
    description: 'Limpeza profunda de todo o interior, incluindo bancos, carpetes e painel.',
    details: 'Nossa higienização completa remove sujeiras, manchas, odores e agentes alérgenos do interior do seu veículo. Utilizamos equipamentos de extração e produtos específicos para cada tipo de material, garantindo um ambiente limpo e saudável.',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 5,
    title: 'Polimento Geral',
    description: 'Tratamento que aumenta a visibilidade e repele água e sujeira dos vidros.',
    details: 'A cristalização cria uma película invisível sobre os vidros, que repele água, poeira e facilita a remoção de insetos. Também melhora a visibilidade em dias de chuva e reduz o acúmulo de sujeira.',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800&h=500'
  },
 /*  {
    id: 6,
    title: 'Revitalização de Plásticos',
    description: 'Recuperação da cor e brilho de plásticos externos e internos.',
    details: 'Nossa revitalização de plásticos recupera a aparência original de parachoques, painéis e outros componentes plásticos que ficaram ressecados ou desbotados devido à exposição solar. O tratamento inclui limpeza profunda, hidratação e proteção UV.',
    imageUrl: 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?auto=format&fit=crop&q=80&w=800&h=500'
  } */
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
              href="https://wa.me/5547997532495"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
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
