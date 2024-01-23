'use client'

import CardSolutions from "@/components/cards/card.solution/card.solution"
import useDragScroll from "@/hooks/use.drag.scroll";
import useScrollToCard from "@/hooks/use.scrolltocard";


const SolutionWebsites = ():JSX.Element => {

    const scrollDesktop1 = useDragScroll({multiplier:1});
    const scorllToCard = useScrollToCard({numCards:4,externalRef:scrollDesktop1.externalRef});


    return<>
          <span>
           
          <section className='section-inicio w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10%]  mt-[50px]'>
          <div className="title text-[36px] md:text-[45px] text-black p-2 md:p-4 font-extrabold">
          SOLUCIONES PARA LA WEB
          </div>

         
            
            <div className="circles w-[96%] ml-[2%] block md:hidden">
                <div className="flex justify-center space-x-4 mb-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <button 
                            key={index} 
                            className={`w-8 h-8 rounded-full ${index === scorllToCard.activeIndex ? 'bg-[#e20000]' : 'bg-[#4200e8]'}`} 
                            onClick={() => scorllToCard.scrollToCard(index)} 
                        />
                    ))}
                </div>
            </div>

            <div ref={scrollDesktop1.externalRef} 
              onMouseDown={scrollDesktop1.startDragging}
              onMouseUp={scrollDesktop1.stopDragging}
              onMouseLeave={scrollDesktop1.stopDragging}
              onMouseMove={scrollDesktop1.onDrag}  
              className="container-soluciones flex w-[100%] overflow-x-scroll">
                <CardSolutions
                name='Landing Pages'
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
                    name='Web informativas'
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
                    name='Webs corporativas'
                    price='$ 2.490.000 COP'
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
                    name='Soluciones a la medida'
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
      </span>
    </>
}

export default SolutionWebsites