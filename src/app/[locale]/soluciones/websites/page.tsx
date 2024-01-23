import Button2 from '@/components/buttons/button.2/button2';
import CardSolutions from '@/components/cards/card.solution/card.solution';
import NavigationBreadCumb from '@/components/sections/common/navigation/navigation';
import SolutionWebsites from '@/components/sections/soluciones/solucion/section.websites/section.websites';
import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'
import Image from 'next/image';



const SectionNav = myDynamic(() => import('@/components/sections/common/section.nav/section.nav'));

export const metadata: Metadata = {
    title: 'Hosting - Servidores VPS - Bases de Datos - Software en la nube ',
    description: 'Alojamiento Web, Servidores VPS, Servidores de aplicaciones, Servidores de base de datos, Servidores de archivos, Servidores de correo, Servidores de almacenamiento, Servidores de streaming, Servidores de juegos, Servidores',
  }
  

export default function WebsitePage({params: {locale}}: {params: {locale: string}}) {

    return<>
      <SectionNav/>
      <NavigationBreadCumb/>
      <>
        <section className='section-inicio w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10%] flex justify-between relative flex-wrap  mt-[70px]'>
          <div className="container-1 w-[100%] md:w-[48%] p-2 md:p-4">
            <h1 className='text-[36px] md:text-[48px] font-extrabold text-black md:mt-8'>
              CONSTRUIMOS SITIOS WEB QUE HACEN LA DIFERENCIA
            </h1>

            <div className="container-img block md:hidden">
              <Image
                src="https://cms.aipus.co/aipus/assets/gbsmo3h7lds08ckg"
                alt="Picture of the author"
                width={800}
                height={600}
                className='img-desktop'
              />
            </div>

            <h2 className='text-[18px] md:text-[20px] text-[#6e6e6e] font-semibold w-[100%] md:w-[63%] mt-2'>
                Creamos  <span className='text-[#e20000]'>sitios web asombrosos</span> que se adaptan a las necesidades de tu negocio y
                te ayudan a alcanzar tus objetivos de crecimiento.
            </h2>

            <div className='container-button mt-4 md:mt-8 w-[100%] md:w-[50%]'>
              <Button2
                text='Ver soluciones'
                width='100%'
                height='50px'
                background='#4301E9'
                color='white'
                fontSize='20px'
              />
            </div>

           
          </div>
          <div className="container-2  w-[100%] md:w-[48%] p-2 md:p-4 hidden md:flex mt-[-20px] max-h-[490px]">
            <Image
              src="https://cms.aipus.co/aipus/assets/gbsmo3h7lds08ckg"
              alt="Picture of the author"
              width={1100}
              height={800}
              className='object-contain'
            />
          </div>
        </section>
      </>

      <>
        <section className='section-inicio w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10%] flex justify-between flex-row-reverse relative flex-wrap  mt-[50px]'>
          
          <div className="container-1 w-[100%] md:w-[48%] p-2 md:p-4">
            <h1 className='text-[36px] md:text-[45px] font-extrabold text-black md:mt-8'>
                SITIOS WEB QUE SE ADAPTAN A TUS NECESIDADES Y GENERAN RESULTADOS
            </h1>

            <div className="container-img block md:hidden">
              <Image
                src="https://cms.aipus.co/aipus/assets/4puiz83jct8gwkok"
                alt="Picture of the author"
                width={700}
                height={500}
                className='img-desktop'
              />
            </div>

            <h2 className='text-[18px] md:text-[20px] text-[#6e6e6e] font-semibold w-[100%] md:w-[63%] mt-2'>
                Desarrollamos sitios web que generan conversiones y ventas, con un diseño atractivo y una experiencia de usuario única.
            </h2>

            <div className='container-button mt-4 md:mt-8 w-[100%] md:w-[50%]'>
              <Button2
                text='Ver soluciones'
                width='100%'
                height='50px'
                background='#4301E9'
                color='white'
                fontSize='20px'
              />
            </div>

           
          </div>
          <div className="container-2  w-[100%] md:w-[40%] p-2 md:p-4 hidden md:block mt-[-20px]">
            <Image
              src="https://cms.aipus.co/aipus/assets/4puiz83jct8gwkok"
              alt="Picture of the author"
              width={900}
              height={700}
            />
          </div>
        </section>
      </>

     <SolutionWebsites/>

    </>
  }