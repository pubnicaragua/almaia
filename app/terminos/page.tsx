'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import FloatingWhatsAppButton from '@/components/whatsapp';

export default function TermsAndConditions() {
  return (
    <div className="bg-primary overflow-hidden">
      <FloatingWhatsAppButton />
      <header className="flex md:justify-between items-center px-8 py-8 md:mb-10">
        <Link
          href="/"
          className="flex items-center text-white hover:text-blue-200 transition-colors"
        >
          <ChevronLeft className="mr-2" />
          <span>Volver</span>
        </Link>
        <Image
          src="/log.png"
          alt="AlmaIA Logo"
          width={200}
          height={40}
          className="mx-auto h-10 w-40 sm:w-48"
        />
        <div className="hidden md:block w-[100px]"></div>{' '}
        {/* Spacer for alignment */}
      </header>

      <section className="relative pb-12 md:mb-12">
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center">
                Términos y Condiciones – AlmaIA
              </h1>

              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    1. Aceptación de los Términos
                  </h2>
                  <p>
                    Al utilizar AlmaIA (la "Plataforma"), usted acepta estar
                    sujeto a los presentes Términos y Condiciones. Si no está de
                    acuerdo con alguno de ellos, no utilice la Plataforma.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    2. Definición del Servicio
                  </h2>
                  <p>
                    AlmaIA es una plataforma digital orientada al monitoreo
                    emocional y asistencia escolar, diseñada para uso por
                    alumnos, apoderados, docentes y equipos de gestión escolar.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    3. Acceso y Uso
                  </h2>
                  <p>
                    El acceso a la Plataforma está restringido según el perfil
                    del usuario. Cada usuario es responsable de mantener la
                    confidencialidad de sus credenciales y del uso que se haga
                    de ellas.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    4. Propiedad Intelectual
                  </h2>
                  <p>
                    Todos los derechos de propiedad intelectual relacionados con
                    AlmaIA y sus contenidos pertenecen a la empresa
                    desarrolladora. Queda prohibida su reproducción total o
                    parcial sin autorización escrita.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    5. Limitación de Responsabilidad
                  </h2>
                  <p>
                    AlmaIA entrega información con fines de apoyo educativo y
                    emocional, pero no reemplaza el diagnóstico ni intervención
                    profesional. No nos hacemos responsables por decisiones
                    tomadas con base en los datos entregados por la Plataforma.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    6. Modificaciones
                  </h2>
                  <p>
                    Nos reservamos el derecho de modificar estos Términos y
                    Condiciones en cualquier momento. Las modificaciones serán
                    informadas a través de la Plataforma.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    7. Jurisdicción
                  </h2>
                  <p>
                    Estos Términos y Condiciones se rigen por las leyes de la
                    República de Chile.
                  </p>
                </section>

                <div className="border-t border-gray-200 my-10"></div>

                <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center">
                  Política de Privacidad – AlmaIA
                </h1>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    1. Recolección de Datos
                  </h2>
                  <p>
                    Recopilamos información personal como nombre, edad, curso,
                    historial emocional y asistencia con el único propósito de
                    mejorar la experiencia escolar y apoyar la gestión emocional
                    de los estudiantes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    2. Uso de la Información
                  </h2>
                  <p>Los datos son utilizados para:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Generar alertas para equipos de convivencia escolar.
                    </li>
                    <li>Crear reportes e informes personalizados por rol.</li>
                    <li>
                      Proporcionar estadísticas para apoyar decisiones
                      pedagógicas.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    3. Protección de Datos
                  </h2>
                  <p>
                    AlmaIA implementa medidas técnicas y organizativas para
                    garantizar la seguridad y confidencialidad de la información
                    recopilada.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    4. Compartición de Datos
                  </h2>
                  <p>
                    No compartimos datos con terceros ajenos al establecimiento
                    educacional, salvo requerimiento legal o consentimiento
                    explícito del apoderado o usuario titular.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    5. Derechos de los Usuarios
                  </h2>
                  <p>
                    Los usuarios pueden solicitar en cualquier momento acceso,
                    rectificación, cancelación o oposición al uso de sus datos,
                    escribiendo a contacto@almaia.cl.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    6. Cookies y Tecnologías
                  </h2>
                  <p>
                    La Plataforma puede usar cookies y tecnologías similares
                    para mejorar la experiencia del usuario. Puedes
                    deshabilitarlas en tu navegador, aunque esto podría afectar
                    ciertas funcionalidades.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-blue-600 mb-2">
                    7. Vigencia y Cambios
                  </h2>
                  <p>
                    Nos reservamos el derecho de modificar esta Política. Toda
                    modificación será comunicada oportunamente por los canales
                    oficiales.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:-bottom-28 -bottom-2 left-0 right-0 z-0">
          <WaveSVG />
        </div>
      </section>

      <section className="bg-white pt-16 pb-32 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            ¿Necesitas más información?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Si tienes alguna pregunta sobre nuestros términos y condiciones o
            política de privacidad, no dudes en contactarnos.
          </p>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-block"
          >
            Volver al inicio
          </Link>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          {/* <WaveSVG fill="#a9d4fb" /> */}
        </div>
      </section>

      <footer className="bg-[#a9d4fb]">
        <div className="container mx-auto">
          <div className="py-4 text-center">
            <p className="text-white">
              © {new Date().getFullYear()} AlmaIA. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const WaveSVG = ({
  fill = '#ffffff',
  className = '',
}: {
  fill?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className={`w-full ${className}`}
  >
    <path
      fill={fill}
      fillOpacity="1"
      d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
  </svg>
);
