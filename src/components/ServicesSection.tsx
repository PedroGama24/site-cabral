
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const services: Service[] = [
  {
    id: 1,
    title: 'Revitalização de Plásticos Externos Interna',
    description: 'Lavagem externa completa, limpeza de rodas, pneus, caixa de roda e compartimento de motor.',
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 2,
    title: 'Limpeza de Couro',
    description: 'Remoção de riscos leves e médios, recuperação de brilho e proteção da pintura.',
    imageUrl: 'https://imgs.search.brave.com/-WqrWc-oG8LGvM2PlYGiQYktj1jo1iqCk9vpSGRoIMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXBh/cmFkb3JzYS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDgvUlNBX01B/VEVSSUFfMDJfSEVB/REVSLmpwZw'
  },
  {
    id: 3,
    title: 'Vidrificação de plasticos de 1 a 3 anos',
    description: 'Proteção cerâmica de alta durabilidade para pintura, vidros e partes plásticas.',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 4,
    title: 'Vidrificação de Couro',
    description: 'Limpeza profunda de todo o interior, incluindo bancos, carpetes e painel.',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=500&h=350'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cabral-blue">Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="service-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-cabral-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
