import { ToastContainer } from 'react-toastify';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background3D from '@/components/Experience';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jose Sojo", // Permite que otras páginas añadan su título
    default: "Jose Sojo | Full Stack Developer", // Título principal
  },
  description: "Ingeniero de Software especializado en desarrollo web con Next.js, Node.js y despliegue de infraestructuras escalables.",
  keywords: ["Software Engineer", "Desarrollador Full Stack", "Next.js", "React", "Portafolio"],
  authors: [{ name: "Jose Sojo" }],
  creator: "Jose Sojo",
  // Configuración para Redes Sociales
  openGraph: {
    title: "Jose Sojo | Full Stack Developer",
    description: "Explora mis proyectos y experiencia en el desarrollo de software de alto impacto.",
    url: "https://tu-dominio.com",
    siteName: "Portafolio de Jose Sojo",
    images: [
      {
        url: "https://tu-dominio.com/og-image.png", // Crea una imagen de 1200x630
        width: 1200,
        height: 630,
        alt: "Preview del Portafolio de Jose Sojo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  // Configuración para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Jose Sojo | Full Stack Developer",
    description: "Desarrollador de software enfocado en soluciones modernas y escalables.",
    creator: "@tu_usuario",
    images: ["https://tu-dominio.com/og-image.png"],
  },
  // Verificación de Google Search Console (opcional)
  verification: {
    google: "tu_codigo_de_verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background3D />
        <div className='z-10'>
          {children}
        </div>
        
        <ToastContainer
          position="bottom-right" // Posición de las alertas
          autoClose={5000}       // Duración en milisegundos
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tu Nombre",
              "jobTitle": "Software Engineer",
              "url": "https://tu-dominio.com",
              "sameAs": [
                "https://github.com/tu-usuario",
                "https://linkedin.com/in/tu-usuario"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
