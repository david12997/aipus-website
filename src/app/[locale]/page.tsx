export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'
import Loading from './loading'


export const metadata: Metadata = {
  title: 'AIPUS - Desarrollo de apps, sitios web, software y sistemas a la medidad, creación productos y servicios digitales, Consultoria de proyectos tecnológicos',
  description: 'Ayudamos a las empresas a crecer creando apps, sitios web, productos, servicios y experiencias digitales que impacten. Combinamos los principios del desarrollo de software y el diseño de productos digitales con la inteligencia artificial para construir apps, sitios web, software y sistemas a la medida.',
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
