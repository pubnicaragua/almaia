"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu } from "lucide-react"
import { useState } from "react";
import { useRef } from "react";
import { SlideMenu } from "@/components/menu";

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Envía el formulario realmente
      const form = e.target;
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primary overflow-hidden">
      {/* Header */}
      <header className="flex md:justify-between items-center px-8 py-8">
        <button className="text-white md:invisible" onClick={toggleMenu}>
          {isMenuOpen ? <SlideMenu isOpen={isMenuOpen} onClose={toggleMenu} ></SlideMenu> : null}
          <Menu size={24} />
        </button>
        <h1 className="text-4xl md:w-auto w-full text-center md:text-left md:text-5xl font-bold text-white">Alma<span className="text-[#b03aae9f]">IA</span> </h1>
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
          onClick={() => endOfPageRef.current?.scrollIntoView({ behavior: "smooth" })}>
          Contactanos
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative pb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 relative z-10 ">
            <Image src="/almie-hero.svg" alt="Almie character" width={300} height={300} className="mx-auto" />
          </div>
          <div className="md:w-1/2 z-10">
            <div className="bg-white p-8 rounded-3xl max-w-md">

              <h2 className="text-2xl font-bold mb-2 text-gray-800">Bienvenido a Alma IA,</h2>
              <p className="text-xl text-gray-800">
                soy <span className="font-bold">Almie</span>, y sere tu guia en tu recorrido nuestra web
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <div className="scale-y-200 origin-left"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pt-16 pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10 pl-4 md:pb-24">
              <h2 className="text-4xl font-bold mb-8 md:text-left text-center text-blue-500">Divertido, facil y seguro</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-transparent  p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/diario.svg" alt="Diary" width={32} height={32} />
                  </div>
                  <p className="text-neutral-700">Tienes un diario para registrar sus emociones.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/chat.svg" alt="Chat" width={32} height={32} />
                  </div>
                  <p className="text-neutral-700">Chat personalizado con Almie.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent  p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/calendario.svg" alt="Tasks" width={32} height={32} />
                  </div>
                  <p className="text-neutral-700">Organización de tareas y recordatorios divertidos.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/editar.svg" alt="Personalize" width={32} height={32} />
                  </div>
                  <p className="text-neutral-700">Personaliza a Almie y hazlo mas cercano a ti.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent  p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/sos.svg" alt="Help" width={32} height={32} />
                  </div>
                  <p className="text-neutral-700">Tenemos un boton de ayuda y denuncia cuando lo necesites.</p>
                </div>
              </div>
            </div>
            <div className="relative justify-self-end z-10 ">
              <Image
                src="/almie-emociones.svg"
                alt="Almie happy"
                width={500}
                height={400}
                className="bottom-0 right-0"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a9d4fb"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Psychologists Section */}
      <section className="bg-[#a9d4fb] pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <Image src="/almie-psicologo.svg" alt="Almie with glasses" width={300} height={300} className="mx-auto" />
            </div>
            <div className="md:w-1/2 z-10">
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-white pt-16 pb-32 relative">
        <div className="container mx-auto px-4 md:pb-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <h2 className="text-4xl text-center md:text-left font-bold mb-8 text-blue-500">Ayuda a los docentes</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/profesores/diario.svg" alt="Summary" width={44} height={44} />
                  </div>
                  <p className="text-neutral-700">Tendras resúmenes con el estado emocional de los estudiantes.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/profesores/alertas.svg" alt="Alerts" width={44} height={44} />
                  </div>
                  <p className="text-neutral-700">Alertas sobre cambios de comportamiento facilitando una intervención oportuna.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/profesores/graficos.svg" alt="Graphs" width={44} height={44} />
                  </div>
                  <p className="text-neutral-700">Gráficos de evolución a lo largo del tiempo para detectar patrones.</p>
                </div>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a9d4fb"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Parents Section */}
      <section className="bg-[#a9d4fb] pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center z-10">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <Image src="/almie-padre.svg" alt="Almie with family" width={300} height={300} className="mx-auto" />
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
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white pt-16 md:pb-80 pb-52 relative">
        <div className="container mx-auto px-4 text-center  ">
          <h2 className="text-4xl text-center md:text-left font-bold mb-12 text-blue-500 max-w-3xl mx-auto">
            Transformemos la forma que cuidas tu bienestar con AlmaIA
          </h2>
          <form
            // action="https://formsubmit.co/elieserhs999omega@gmail.com"
            action="https://formsubmit.co/Alexmedel@almaia.cl"
            method="POST"
            onSubmit={handleSubmit}
            className="w-[70%] mx-auto"
            ref={endOfPageRef}
          >
            {/* Campos ocultos para configuración de FormSubmit */}
            <input type="hidden" name="_subject" value="Nuevo contacto desde el sitio web AlmaIA" />
            <input type="hidden" name="_cc" value="dxgabalt@gmail.com" />
            <input type="hidden" name="_cc" value="Alexmedel@almaia.cl" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex flex-col md:flex-row relative z-10 rounded-lg md:border-2 md:border-blue-700 w-full">
              <div className=" md:w-1/2 my-2 md:my-0">
                <Input
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={formData.name}
                  className="text-center placeholder:text-center  md:rounded-l-lg md:border-none md:border-r-0 border-blue-700 border"
                />
              </div>
              <div className="md:w-1/2 my-2 md:my-0">
                <Input
                  name="email"
                  type="tel"
                  placeholder="Gmail"
                  onChange={handleChange}
                  value={formData.phone}
                  className="text-center placeholder:text-center md:border-none rounded-4 border-blue-700 border active:border-none"
                />
              </div>
              <div className="md:w-1/2 my-2 md:my-0">
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  value={formData.phone}
                  className="text-center placeholder:text-center md:border-none rounded-4 border-blue-700 border active:border-none"
                />
              </div>
              <div className="pt-1 md:pt-0 md:w-1/2v my-2 md:my-0">
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white md:rounded-r-lg md:rounded-l-none" disabled={isLoading || isSubmitted}>
                  {isLoading ? "Enviando..." : isSubmitted ? "✓ Enviado" : "Contáctanos"}
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a9d4fb"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#a9d4fb]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center mb-12 pb-8">
            <div className="flex mb-8 md:mb-0 mr-12  justify-center justify-items-center items-start w-full md:w-auto">
              <div className="md:self-start flex flex-col items-center">
                <div className=" p-2 rounded-md">
                  <Image src="/almaia-icon-app.svg" alt="Almie logo" width={105} height={105} />
                </div>
                <span className="text-xl font-bold text-white">AlmaIA</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div>
                <h4 className="text-white font-bold mb-4">Productos</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="#" className="hover:underline">
                      AlmaIA app
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      AlmaIA web
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Almie
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Redes</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="https://www.instagram.com/almaia.cl" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/almaia-cl" className="hover:underline">
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtu.be/vo6OhdCxnCM?si=O5CE4Wb9VInUNxnl" className="hover:underline">
                      Youtube
                    </Link>
                  </li>
                  <li>
                    <Link href="https://x.com/almaia_cl" className="hover:underline">
                      X
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Términos y privacidad</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="#" className="hover:underline">
                      Términos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
