"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import { useState, useRef } from "react";
import { SlideMenu } from "@/components/menu";
import { InteractiveRatingGrid } from "@/components/hand";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const endOfPageRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gmail: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.currentTarget as HTMLFormElement;
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', gmail: '' });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToContact = () => endOfPageRef.current?.scrollIntoView({ behavior: "smooth" });

  const featureItems = [
    { icon: "/niños/diario.svg", text: "Tienes un diario para registrar sus emociones." },
    { icon: "/niños/chat.svg", text: "Chat personalizado con Almie." },
    { icon: "/niños/calendario.svg", text: "Organización de tareas y recordatorios divertidos." },
    { icon: "/niños/editar.svg", text: "Personaliza a Almie y hazlo mas cercano a ti." },
    { icon: "/niños/sos.svg", text: "Tenemos un boton de ayuda y denuncia cuando lo necesites." }
  ];

  const teacherFeatures = [
    { icon: "/profesores/diario.svg", text: "Tendras resúmenes con el estado emocional de los estudiantes." },
    { icon: "/profesores/alertas.svg", text: "Alertas sobre cambios de comportamiento facilitando una intervención oportuna." },
    { icon: "/profesores/graficos.svg", text: "Gráficos de evolución a lo largo del tiempo para detectar patrones." }
  ];

  const footerLinks = {
    products: [
      { name: "AlmaIA app", href: "#" },
      { name: "AlmaIA web", href: "#" },
      { name: "Almie", href: "#" }
    ],
    social: [
      { name: "Instagram", href: "https://www.instagram.com/almaia.cl" },
      { name: "Linkedin", href: "https://www.linkedin.com/company/almaia-cl" },
      { name: "Youtube", href: "https://youtu.be/vo6OhdCxnCM?si=O5CE4Wb9VInUNxnl" },
      { name: "X", href: "https://x.com/almaia_cl" }
    ],
    legal: [
      { name: "Términos", href: "#" },
      { name: "Privacidad", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  };

  return (
    <div className="bg-primary overflow-hidden">
      <header className="flex md:justify-between items-center px-8 py-8 md:mb-10">
        {isMenuOpen && <SlideMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
        <button className="text-white md:hidden" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
        <Image src="/log.png" alt="Almie character" width={144} height={40} className="mx-auto h-10 w-36" />
        <button
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
          onClick={scrollToContact}>
          Contactanos
        </button>
      </header>

      <section className="relative pb-12 md:mb-12">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 relative z-10">
            <Image src="/almie-hero.svg" alt="Almie character" width={300} height={300} className="mx-auto" />
          </div>
          <div className="flex md:flex-row flex-col-reverse md:w-1/2 z-10 pl-32 mb-6">
            <Image src="/chat.svg" alt="Chat bubble" width={80} height={80} className="-rotate-90 md:rotate-0 ml-6 md:ml-0" />
            <div className="bg-white p-8 rounded-3xl max-w-xs">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Bienvenido <span className="font-normal">a</span> Alma IA,</h2>
              <p className="text-xl text-gray-800">
                Soy <span className="font-bold">Almie</span>, y sere tu <span className="font-bold">guia</span> en tu recorrido <span className="font-bold">nuestra web</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute md:-bottom-28 -bottom-2 left-0 right-0 z-0">
          <WaveSVG />
        </div>
      </section>

      <section className="bg-white pt-32 pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10 pl-4 md:pb-24">
              <h2 className="text-4xl font-bold mb-8 md:text-left text-center text-blue-500">Divertido, facil y seguro</h2>
              <div className="space-y-4">
                {featureItems.map((item, index) => (
                  <FeatureItem key={index} icon={item.icon} text={item.text} />
                ))}
              </div>
            </div>
            <div className="relative justify-self-end z-10 w-full">
              <InteractiveRatingGrid />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 md:-bottom-64 left-0 right-0 z-0 w-full scale-x-125 md:rotate-2 -rotate-6">
          <Image
            src="/vector-3.svg"
            alt="Wave background"
            width={1440}
            height={320}
            className="w-full h-auto -rotate-2"
          />
        </div>
      </section>

      <section className="bg-[#a9d4fb] pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:mt-0 mt-20">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10 order-2 md:order-1 md:mt-0 mt-20">
              <Image src="/almie-psicologo.svg" alt="Almie with glasses" width={300} height={300} className="mx-auto" />
            </div>
            <div className="md:w-1/2 z-10 md:order-2 order-1">
              <h2 className="text-4xl text-center md:text-left font-bold mb-6 text-white">Respaldado por psicologos</h2>
              <p className="text-neutral-700">
                AlmalA ha sido desarrollado junto a un equipo de psicólogos y especialistas en bienestar infantil,
                asegurando que cada herramienta y actividad esté basada en evidencia científica para el desarrollo
                emocional de los estudiantes.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <WaveSVG />
        </div>
      </section>

      <section className="bg-white pt-16 pb-32 relative">
        <div className="container mx-auto px-4 md:pb-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <h2 className="text-4xl text-center md:text-left font-bold mb-8 text-blue-500">Ayuda a los docentes</h2>
              <div className="space-y-4">
                {teacherFeatures.map((item, index) => (
                  <FeatureItem key={index} icon={item.icon} text={item.text} size={44} />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 z-10">
              <Image
                src="/almie-reportes.svg"
                alt="Almie with megaphone"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <WaveSVG fill="#a9d4fb" />
        </div>
      </section>

      <section className="bg-[#a9d4fb] pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center z-10">
            {/* Contenedor con dimensiones fijas */}
            <div className="relative w-[500px] h-[200px] mb-8 md:mb-0 z-10 flex-shrink-0">
              <Image
                src="/papahijo.svg"
                alt="Almie with family"
                width={500}
                height={200}
                className="absolute w-[500px] h-[200px] object-contain"
              />
              <Image
                src="/ojos.svg"
                alt="Eyes"
                width={48}
                height={48}
                className="absolute right-[140px] top-[96px] animate-oscillate delay-1000"
              />
              <Image
                src="/mouth/good.svg"
                alt="Mouth"
                width={24}
                height={24}
                className="absolute right-[140px] top-[128px]"
              />
              <Image
                src="/manospadre.svg"
                alt="Hands"
                width={50}
                height={50}
                className="absolute right-[160px] top-[38px] animate-oscillate"
              />
            </div>

            <div className="md:w-1/2 z-10">
              <h2 className="text-5xl font-bold mb-6 md:text-left text-center text-white">Conoce mejor a tu hijo</h2>
              <p className="text-neutral-700">
                Accede a información sobre el estado emocional de tu hijo, sus avances y necesidades. Recibe reportes
                claros y herramientas para fortalecer su bienestar desde casa.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute md:-bottom-28 -bottom-0 left-0 right-0 z-0">
          <WaveSVG className="scale-y-125" />
        </div>
      </section>

      <section className="bg-white pt-16 md:pb-80 pb-52 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-center font-bold mb-12 text-blue-500 max-w-3xl mx-auto">
            Transformemos la forma que cuidas tu bienestar con AlmaIA
          </h2>
          <form
            action="https://formsubmit.co/Alexmedel@almaia.cl"
            method="POST"
            onSubmit={handleSubmit}
            className="w-[70%] mx-auto"
            ref={endOfPageRef}
          >
            <input type="hidden" name="_subject" value="Nuevo contacto desde el sitio web AlmaIA" />
            <input type="hidden" name="_cc" value="dxgabalt@gmail.com,Alexmedel@almaia.cl" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex flex-col md:flex-row relative z-10 rounded-lg md:border-2 md:border-blue-700 w-full md:gap-0 gap-y-4 ">
              <Input
                name="name"
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                value={formData.name}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 text-center placeholder:text-center md:rounded-l-lg md:border-none md:border-r-0 border-blue-700 border"
              />
              <Input
                name="email"
                type="tel"
                placeholder="Gmail"
                onChange={handleChange}
                value={formData.phone}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 text-center placeholder:text-center md:border-none border-blue-700 border"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Teléfono"
                onChange={handleChange}
                value={formData.phone}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 text-center placeholder:text-center md:border-none border-blue-700 border"
              />
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white md:rounded-r-lg md:rounded-l-none"
                disabled={isLoading || isSubmitted}>
                {isLoading ? "Enviando..." : isSubmitted ? "✓ Enviado" : "Contáctanos"}
              </Button>
            </div>
          </form>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <WaveSVG fill="#a9d4fb" />
        </div>
      </section>

      <footer className="bg-[#a9d4fb]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center mb-12 pb-8">
            <div className="flex mb-8 md:mb-0 mr-12 justify-center items-start w-full md:w-auto">
              <div className="md:self-start flex flex-col items-center">
                <div className="p-2 rounded-md">
                  <Image src="/almaia-icon-app.svg" alt="Almie logo" width={105} height={105} />
                </div>
                <span className="text-xl font-bold text-white">AlmaIA</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <FooterColumn title="Productos" links={footerLinks.products} />
              <FooterColumn title="Redes" links={footerLinks.social} />
              <FooterColumn title="Términos y privacidad" links={footerLinks.legal} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const WaveSVG = ({ fill = "#ffffff", className = "" }: { fill?: string; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${className}`}>
    <path
      fill={fill}
      fillOpacity="1"
      d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
  </svg>
);

const FeatureItem = ({ icon, text, size = 32 }: { icon: string; text: string; size?: number }) => (
  <div className="flex items-start">
    <div className="bg-transparent p-2 rounded-md mr-4">
      <Image
        src={icon}
        alt=""
        width={size}
        height={size}
        className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]"
      />
    </div>
    <p className="text-neutral-700">{text}</p>
  </div>
);

const FooterColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
  <div>
    <h4 className="text-white font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-white">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="hover:underline">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);