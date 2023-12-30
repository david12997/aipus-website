export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import SectionCrearProyecto from '@/components/sections/common/crear-proyecto/section.crear.proyecto'
import SectionNav from '@/components/sections/common/section.nav/section.nav'

import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'


export const metadata: Metadata = {
  title: 'AIPUS - Desarrollo de apps, sitios web, software y sistemas a la medidad, creación productos y servicios digitales, Consultoria de proyectos tecnológicos',
  description: 'Ayudamos a las empresas a crecer creando apps, sitios web, productos, servicios y experiencias digitales que impacten. Combinamos los principios del desarrollo de software y el diseño de productos digitales con la inteligencia artificial para construir apps, sitios web, software y sistemas a la medida.',
}


export default function CrearProyecto({params: {locale}}: {params: {locale: string}}) {

    console.log(locale,'ja');
  
    return<>
        <SectionNav/>
        <SectionCrearProyecto/>

      
     
      
    </>
  }
  