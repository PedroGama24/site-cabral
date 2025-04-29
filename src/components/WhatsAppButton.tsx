
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5547987654321" 
      className="whatsapp-button"
      aria-label="Contato pelo WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsAppButton;
