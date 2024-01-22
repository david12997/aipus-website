import Button2 from '@/components/buttons/button.2/button2';
import Button3 from '@/components/buttons/button.3/button.3';
import CardSolutions from '@/components/cards/card.solution/card.solution';
import NavigationBreadCumb from '@/components/sections/common/navigation/navigation';
import type { Metadata } from 'next'
import myDynamic  from 'next/dynamic'
import Image from 'next/image';



const SectionNav = myDynamic(() => import('@/components/sections/common/section.nav/section.nav'));

export const metadata: Metadata = {
    title: 'Hosting - Servidores VPS - Bases de Datos - Software en la nube ',
    description: 'Alojamiento Web, Servidores VPS, Servidores de aplicaciones, Servidores de base de datos, Servidores de archivos, Servidores de correo, Servidores de almacenamiento, Servidores de streaming, Servidores de juegos, Servidores',
  }
  

export default function EcommercePage({params: {locale}}: {params: {locale: string}}) {

    return<>
      <SectionNav/>
      <NavigationBreadCumb/>
      <>
        <section className='section-inicio w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10%] flex justify-between relative flex-wrap  mt-[70px]'>
          <div className="container-1 w-[100%] md:w-[45%] p-2 md:p-4">
            <h1 className='text-[36px] md:text-[48px] font-extrabold text-black md:mt-8'>
              CREACION DE TIENDAS ONLINE  BOT DE VENTAS Y MARKETPLACE
            </h1>

            <div className="container-img block md:hidden">
              <Image
                src="https://cms.aipus.co/aipus/assets/3eqou6rdii688gwo"
                alt="Picture of the author"
                width={600}
                height={600}
                className='img-desktop'
              />
            </div>

            <h2 className='text-[18px] md:text-[20px] text-[#6e6e6e] font-semibold w-[100%] md:w-[63%] mt-2'>
             Fortalezca su marca, venda en internet, <span className='text-[#4301E9]'>incremente sus ventas</span>  y expanda su negocio
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
          <div className="container-2  w-[100%] md:w-[44%] p-2 md:p-4 hidden md:flex mt-[-20px]">
            <Image
              src="https://cms.aipus.co/aipus/assets/3eqou6rdii688gwo"
              alt="Picture of the author"
              width={900}
              height={900}
            />
          </div>
        </section>
      </>

      <>
        <section className='section-inicio w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10%] flex justify-between flex-row-reverse relative flex-wrap  mt-[20px]'>
          
          <div className="container-1 w-[100%] md:w-[48%] p-2 md:p-4">
            <h1 className='text-[36px] md:text-[45px] font-extrabold text-black md:mt-8'>
            PROYECTOS DE COMERCIO ELECTRONICO QUE  GENERAN CONVERSIONES
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
              Ofrecemos soluciones innovadoras para crear tiendas online,
              integrar bots de ventas inteligentes y establecer  marketplaces
              líderes en el intercambio de productos y servicios.
            </h2>

            <div className='container-button mt-4 md:mt-8 w-[100%] md:w-[50%]'>
              <Button2
                text='Ver servicios'
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

      <>
        <section className='section-inicio w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10%]  mt-[20px]'>
          <div className="title text-[36px] md:text-[45px] text-black p-2 md:p-4 font-extrabold">
            SOLUCIONES ECOMMERCE
          </div>

          <div className="container-soluciones flex w-[100%] overflow-x-scroll">
          <CardSolutions
            name='Landing de Ventas'
            price='$ 990.000 COP'
            color='#4301E9'
            discont={false}
            detalles={[
              <li className='text-[#6e6e6e] m-2 mt-6'>Hosting y dominio <strong >gratis primer año</strong> desde segundo año 350.000 COP/anual</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >1 Pagnia web</strong> optimida para ventas</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pasarela de pagos <strong >Integrada</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Stock de <strong >100 productos</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Diseño <strong >Personalizado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pagina responsive <strong > y adaptable</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Panel de administración <strong > de tu pagina</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Manejas <strong >Productos - Pagos - Envios</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >50 GB</strong> de almacenamiento SSD</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >5 correos </strong> corporativos personalizados</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Optimización para <strong >SEO y Marketing</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Certificado SSL<strong >ilimitado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >3</strong> Bases de datos</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >1</strong> Dominio incluido</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Tiempo de entrega <strong >10 días</strong> habiles</li>,


            ]}
          />

          <CardSolutions
            name='Catálogo de Ventas'
            price='$ 1.630.000 COP'
            color='#4301E9'
            discont={false}
            detalles={[
              <li className='text-[#6e6e6e] m-2 mt-6'>Hosting y dominio <strong >gratis primer año</strong> desde segundo año 350.000 COP/anual</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >1 Pagnia web</strong> optimida para ventas</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pasarela de pagos <strong >Integrada</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Stock de <strong >100 productos</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Diseño <strong >Personalizado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pagina responsive <strong > y adaptable</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Panel de administración <strong > de tu pagina</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Manejas <strong >Productos - Pagos - Envios</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >50 GB</strong> de almacenamiento SSD</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >5 correos </strong> corporativos personalizados</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Optimización para <strong >SEO y Marketing</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Certificado SSL<strong >ilimitado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >3</strong> Bases de datos</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >1</strong> Dominio incluido</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Tiempo de entrega <strong >10 días</strong> habiles</li>,


            ]}
          />

          <CardSolutions
            name='Tienda Profesional'
            price='$ 3.390.000 COP'
            color='#e20000'
            discont={true}
            detalles={[
              <li className='text-[#6e6e6e] m-2 mt-6'>Hosting y dominio <strong >gratis primer año</strong> desde segundo año 350.000 COP/anual</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >1 Pagnia web</strong> optimida para ventas</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pasarela de pagos <strong >Integrada</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Stock de <strong >100 productos</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Diseño <strong >Personalizado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pagina responsive <strong > y adaptable</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Panel de administración <strong > de tu pagina</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Manejas <strong >Productos - Pagos - Envios</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >50 GB</strong> de almacenamiento SSD</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >5 correos </strong> corporativos personalizados</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Optimización para <strong >SEO y Marketing</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Certificado SSL<strong >ilimitado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >3</strong> Bases de datos</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >1</strong> Dominio incluido</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Tiempo de entrega <strong >10 días</strong> habiles</li>,


            ]}
          />

          <CardSolutions
            name='Marketplace'
            price='$ 9.000.000 COP'
            color='#4301E9'
            discont={false}
            detalles={[
              <li className='text-[#6e6e6e] m-2 mt-6'>Hosting y dominio <strong >gratis primer año</strong> desde segundo año 350.000 COP/anual</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >1 Pagnia web</strong> optimida para ventas</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pasarela de pagos <strong >Integrada</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Stock de <strong >100 productos</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Diseño <strong >Personalizado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pagina responsive <strong > y adaptable</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Panel de administración <strong > de tu pagina</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Manejas <strong >Productos - Pagos - Envios</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >50 GB</strong> de almacenamiento SSD</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >5 correos </strong> corporativos personalizados</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Optimización para <strong >SEO y Marketing</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Certificado SSL<strong >ilimitado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >3</strong> Bases de datos</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >1</strong> Dominio incluido</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Tiempo de entrega <strong >10 días</strong> habiles</li>,


            ]}
          />
          <CardSolutions
            name='Comercio a la medida'
            price='Consultar Precio'
            color='#4301E9'
            discont={false}
            detalles={[
              <li className='text-[#6e6e6e] m-2 mt-6'>Hosting y dominio <strong >gratis primer año</strong> desde segundo año 350.000 COP/anual</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >1 Pagnia web</strong> optimida para ventas</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pasarela de pagos <strong >Integrada</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Stock de <strong >100 productos</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Diseño <strong >Personalizado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Pagina responsive <strong > y adaptable</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Panel de administración <strong > de tu pagina</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Manejas <strong >Productos - Pagos - Envios</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >50 GB</strong> de almacenamiento SSD</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >5 correos </strong> corporativos personalizados</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Optimización para <strong >SEO y Marketing</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Certificado SSL<strong >ilimitado</strong></li>,
              <li className='text-[#6e6e6e] m-2 mt-4'><strong >3</strong> Bases de datos</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'> <strong >1</strong> Dominio incluido</li>,
              <li className='text-[#6e6e6e] m-2 mt-4'>Tiempo de entrega <strong >10 días</strong> habiles</li>,


            ]}
          />


          </div>

        </section>
      </>

    </>
  }