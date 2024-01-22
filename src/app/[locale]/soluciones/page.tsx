export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import SectionFooter from '@/components/sections/common/section.footer/section.footer'
import SectionCategorias from '@/components/sections/soluciones/section.categorias/section.categorias'
import SectionHowWork from '@/components/sections/soluciones/section.how.work/section.how.work'
import SectionInfo from '@/components/sections/soluciones/section.info/section.info'
import SectionInicioSoluciones from '@/components/sections/soluciones/section.inicio/section.inicio'
import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'



export const metadata: Metadata = {
  title: 'Soluciones - Apps, Websites, Software y Sistemas - Encuentra soluciones especificas a problemas recurrentes ',
  description: 'Encuentre soluciones predefinidas a problemas recurrentes en el desarrollo de apps, sitios web, software y sistemas a la medida. Soluciones especificas para problemas especificos.',
}





const SectionNav = myDynamic(() => import('@/components/sections/common/section.nav/section.nav'));


export default function Soluciones({params: {locale}}: {params: {locale: string}}) {

  console.log(locale,'ja');

  return<>
    <SectionNav/>
    <SectionInicioSoluciones/>
    <SectionCategorias/>
    <SectionInfo/>
    <SectionHowWork/>
    <SectionFooter/>

  </>
}
