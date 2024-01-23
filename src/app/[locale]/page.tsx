export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'



export const metadata: Metadata = {
  metadataBase: new URL('https://www.aipus.co'),
  title: 'AIPUS - Desarrollo de apps, sitios web, software y sistemas a la medidad',
  description: 'Creación apps, plataformas, productos y servicios digitales - Diseño UX/UI Consultoria de proyectos tecnológicos',
  keywords: 'diseño web, desarrollo de apps, desarrollo de paginas web, desarrollo de apps de envios, desarrollo de software, diseño ui, diseño grafirco',
  openGraph: { 
    type: 'website',
    url: 'https://www.aipus.co',
    siteName: 'AIPUS.CO',
    locale: 'es-CO',
    title: 'Ayudamos a las empresas a crecer creando productos, servicios, marcasa y experiencas digitales',
    description: 'Empresa de desarrollo de software y diseño de productos digitales Combinamos los principios del desarrollo de software y el diseño de productos digitales con la inteligencia artificial para construir apps, sitios web, software y sistemas a la medida',
    countryName: 'Colombia',
    images: [{
      url: '/metadata-img-big-.webp',
      width: 1200,
      height: 630
    }, {
      url: '/metadata-img-medium.webp',
      width: 800,
      height: 420
    }, {
      url: '/metadata-img-medium.webp',
      width: 600,
      height: 315
    }]
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/android-chrome-192x192.png'],
    shortcut: ['/apple-touch-icon.png']
  },
  robots: 'index, follow',
  authors: {name: 'AIPUS SAS', url: 'https://www.aipus.co'}
}


const SectionBrands = myDynamic(() => import('@/components/sections/landing/section.brands/section.brands'));
const SectionCallToAction = myDynamic(() => import('@/components/sections/landing/section.call.action/section.call.action'));
const SectionCallCorreo = myDynamic(() => import('@/components/sections/landing/section.call.correo/section.call.correo'));
const SectionFooter = myDynamic(() => import('@/components/sections/common/section.footer/section.footer'));
const SectionIndex = myDynamic(() => import('@/components/sections/landing/section.index/section.index'));
const SectionNav = myDynamic(() => import('@/components/sections/common/section.nav/section.nav'));
const SectionServicios = myDynamic(() => import('@/components/sections/landing/section.servicios/section.servicios'));
const SectionUseCase = myDynamic(() => import('@/components/sections/landing/section.usecase/section.usecase'));
const SectionWork = myDynamic(() => import('@/components/sections/landing/section.work/section.work'));
const SectionTestimonio = myDynamic(() => import('@/components/sections/landing/section.testimonio/section.testimonio'));


export default function Inicio({params: {locale}}: {params: {locale: string}}) {

  console.log(locale,'ja');

  return<>
    <SectionNav/>
    <SectionIndex/>
    <SectionBrands/>
    <SectionServicios/>
    <SectionTestimonio/>
    <SectionWork/>
    <SectionUseCase/>
    <SectionBrands/>
    <SectionCallCorreo/>
    <SectionCallToAction/>
    <SectionFooter/>
    
  </>
}
