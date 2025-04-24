// components/FloatingWhatsAppButton.tsx
import React, { useEffect, useState } from 'react';

const FloatingWhatsAppButton: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al montar el componente
    checkScreenSize();

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleClick = () => {
    // Aquí puedes cambiar el número de teléfono y el mensaje predeterminado
    const phoneNumber = '+56929501280'; // Reemplaza con tu número
    const defaultMessage = 'Hola, estoy interesado en tus servicios';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isHovering ? 'animate-bounce' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        onClick={handleClick}
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isMobile ? 'w-12 h-12' : 'w-16 h-16'
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={isMobile ? 'w-6 h-6' : 'w-8 h-8'}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.51c.549 1.507 1.634 2.773 2.925 3.465.297.149.446.248.67.248.223 0 .372-.074.57-.198.198-.124.892-.867 1.115-1.164.223-.297.446-.372.669-.372.223 0 .372.025.52.124.149.099.892.694 1.041.843.149.149.223.273.074.57-.149.297-.595.843-1.19 1.34-.446.372-.893.744-1.29.967-.248.149-.421.224-.644.074-.223-.149-.941-.347-1.785-1.115-.694-.644-1.162-1.439-1.29-1.687-.13-.248-.014-.384.099-.509.104-.116.223-.289.335-.454.112-.165.149-.289.074-.463-.075-.174-.558-1.342-.77-1.835-.213-.492-.432-.426-.558-.434-.124-.008-.26-.01-.384-.01-.124 0-.322.025-.495.074-.174.05-.372.124-.52.26-.149.136-.594.58-.594 1.414 0 .833.595 1.638.694 1.756.099.116.198.232.297.405.099.174.05.297-.025.446-.075.149-.173.322-.248.496-.075.174-.149.298-.025.496.124.198.545.843 1.165 1.364" />
          <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0-2a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;