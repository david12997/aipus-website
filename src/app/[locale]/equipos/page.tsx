export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import SectionFooter from '@/components/sections/common/section.footer/section.footer'
import SectionRed from '@/components/sections/outsorcing/section.red/section.red'
import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'



export const metadata: Metadata = {
  title: 'Equipos IT - Diseño  - Outsorcing de equipos de desarrollo IT - Creamos de apps, sitios web, software y sistemas a la medidad, creación productos y servicios digitales, Consultoria de proyectos tecnológicos',
  description: 'Ayudamos a las empresas a crecer creando apps, sitios web, productos, servicios y experiencias digitales que impacten. Combinamos los principios del desarrollo de software y el diseño de productos digitales con la inteligencia artificial para construir apps, sitios web, software y sistemas a la medida.',
}





const SectionNav = myDynamic(() => import('@/components/sections/common/section.nav/section.nav'));
const SectionInicioPlanes = myDynamic(() => import('@/components/sections/outsorcing/section.inicio/section.inicio'));
const SectionBrands = myDynamic(() => import('@/components/sections/landing/section.brands/section.brands'));
const SectionOutsorcing = myDynamic(() => import('@/components/sections/outsorcing/section.outsorcing/section.outsorcing')); 
const SectionPlanes = myDynamic(() => import('@/components/sections/outsorcing/section.planes/section.planes'));



export default function EquiposIT({params: {locale}}: {params: {locale: string}}) {

  console.log(locale,'ja');

  return<>
    <SectionNav/>
    <SectionInicioPlanes/>
    <SectionRed/>
    <SectionOutsorcing/>
    <SectionBrands/>
    <SectionPlanes/>
    <SectionFooter/>
    
  </>
}
