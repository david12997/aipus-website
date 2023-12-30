import NavigationBreadCumb from '@/components/sections/common/navigation/navigation';
import SectionFooter from '@/components/sections/common/section.footer/section.footer';
import SectionVPS from '@/components/sections/soluciones/solucion/section.vps/section.vps';
import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'



const SectionNav = myDynamic(() => import('@/components/sections/common/section.nav/section.nav'));

export const metadata: Metadata = {
    title: 'Hosting - Servidores VPS - Bases de Datos - Software en la nube ',
    description: 'Alojamiento Web, Servidores VPS, Servidores de aplicaciones, Servidores de base de datos, Servidores de archivos, Servidores de correo, Servidores de almacenamiento, Servidores de streaming, Servidores de juegos, Servidores',
  }
  

export default function ServidoresVpsPage({params: {locale}}: {params: {locale: string}}) {

    return<>
      <SectionNav/>
      <NavigationBreadCumb/>
      <SectionVPS/>
      <SectionFooter/>
    </>
  }