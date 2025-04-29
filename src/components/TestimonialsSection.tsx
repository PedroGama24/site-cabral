
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Testimonial = {
  id: number;
  name: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    text: "Fiquei muito satisfeito com o serviço de polimento. Meu carro ficou como novo, com um brilho impressionante!",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Oliveira",
    text: "A higienização interna foi perfeita. Removeram manchas que eu achava impossíveis de sair, recomendo!",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Santos",
    text: "Serviço de vitrificação excelente. Já percebi a diferença na facilidade de limpar o carro depois.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cabral-blue">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <p className="font-medium">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
