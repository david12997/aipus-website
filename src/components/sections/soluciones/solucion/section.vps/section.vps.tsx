'use client';

import CardBrand1 from "@/components/cards/card.brand.1/caed.brand.1";
import CardCheck1 from "@/components/cards/card.check.1/card.check.1";
import CardVps from "@/components/cards/card.vps/card.vps"
import useDragScroll from "@/hooks/use.drag.scroll";
import useScrollToCard from "@/hooks/use.scrolltocard";
import Image from "next/image";


const SectionVPS = ():JSX.Element => {

    const numCards = 4;

    const {
        isDragging,
        startDragging,
        stopDragging,
        onDrag,
        externalRef
    } = useDragScroll({ multiplier: 3 });

    const {
        activeIndex,
        scrollToCard
    } = useScrollToCard({ numCards, externalRef: externalRef });

    const DragScrollChecks1 = useDragScroll({  multiplier: 3 });
    const DragScrollChecks2 = useDragScroll({  multiplier: 3 });


    return<>

        <section className="w-[96%] ml-[2%] md:w-[96vw] md:ml-[4vh] p-2 md:p-4 2xl:w-[80vw] 2xl:ml-[10vw]">

            <div className="section1 w-[100%] mt-[50px] mb-[20px] flex justify-around flex-wrap">

                <div className="container-1-vps w-[100%] md:w-[50%]">
                    <h1 className="uppercase font-extrabold text-[36px] md:text-[45px] text-black">Servidores de Aplicaciones y Servicios Cloud</h1>
                    <h6 className="desc text-[19px] md:text-[21px] font-bold text-[#e20000] relative ">Despliegue aplicaciones que requieren recursos privados y escalables</h6>
                    <div className="container-mi-img w-[100%] mt-4 mb-4 block md:hidden">
                        <Image
                            src="https://cms.aipus.co/aipus/assets/1sc9g0qulbnogc0g"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                    
                    <h6 className="text-[#6e6e6e] font-semibold text-[18px] mt-2">
                    Nos especializamos en la creación y administración de infraestructuras en la nube,
                     proporcionando soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.
                    </h6>
                    <h6 className="text-[#6e6e6e] font-semibold text-[18px] mt-4">
                        Tecnologías que usamos en nuestros proyectos
                    </h6>

                    <div className="contiabner-brands w-[100%] flex flex-wrap justify-between mt-2">
                        <CardBrand1
                            img="https://cms.aipus.co/aipus/assets/76xkfv1ynj0g4wwo"
                        />
                        <CardBrand1
                            img="https://cms.aipus.co/aipus/assets/mdt80tjxps0wcs4g"
                        />
                        <CardBrand1
                            img="https://cms.aipus.co/aipus/assets/lt73s0pcxj4www4w"
                        />
                        <CardBrand1
                            img="https://cms.aipus.co/aipus/assets/sv3fnoec5tcsg4ks"
                        />
                        <CardBrand1
                            img="https://cms.aipus.co/aipus/assets/4ps8t5q1s9es8cco"
                        />
                        <CardBrand1
                            img="https://cms.aipus.co/aipus/assets/qcz020e5tuswgkws"
                        />
                    </div>
                </div>

                <div className="containe-2-vps w-[50%] hidden md:flex items-center justify-end">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/1sc9g0qulbnogc0g"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-contain"
                    />

                </div>

            </div>



           {/* <div className="section2 w-[100%] mt-[60px] md:mt-[90px] mb-[20px] flex justify-around flex-wrap">
                <div className="containers2-1 md:block hidden md:w-[50%]">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/tqepb3icidwscs44"
                        alt="Picture of the author"
                        width={600}
                        height={350}
                        className="object-contain"
                    />
                </div>
                <div className="containers2-2 w-[100%] md:w-[45%] md:mt-8">
                    <h1 className="uppercase font-bold w-[100%] text-[28px] md:text-[40px] text-black text-start md:text-end">Arquitectura de software escalabe y mantenible</h1>
                        <div className="container-mi-img w-[100%] mt-4 mb-4 block md:hidden">
                        <Image
                            src="https://cms.aipus.co/aipus/assets/tqepb3icidwscs44"
                            alt="Picture of the author"
                            width={600}
                            height={350}
                            className="object-contain"
                        />
                    </div>
                    <h6 className="text-[#6e6e6e] font-semibold text-[18px] mt-4 text-start md:text-end">
                    Nuestra especialidad es la ingeniería de software y el desarrollo de aplicaciones robustas y escalables. 
                    Con una profunda comprensión de las arquitecturas de software modernas, construimos soluciones a medida 
                    que no solo satisfacen las necesidades actuales de su negocio, sino que también se adaptan a sus aspiraciones futuras
                    </h6>
                </div>
            </div>
            */}

            <div className="section3 w-[100%] mt-[60px] md:mt-[90px] mb-[20px] flex justify-around flex-wrap">
              
              <div className="containers3-2 w-[100%] md:w-[45%] md:mt-10">
                  <h1 className="uppercase font-bold w-[100%] text-[28px] md:text-[40px] text-black text-start">Gestion de Servicios Escalables en la Nube</h1>
                    <div className="container-mi-img w-[100%] mt-4 mb-4 block md:hidden">
                        <Image
                            src="https://cms.aipus.co/aipus/assets/ateatui6fd44wkoo"
                            alt="Picture of the author"
                            width={600}
                            height={350}
                            className="object-contain"
                        />
                    </div>
                    <h6 className="text-[#6e6e6e] font-semibold text-[18px] mt-4 text-start ">
                        Nos destacamos en la configuración y gestión de servicios en la nube, trabajando con
                        plataformas líderes como AWS, Google Cloud y Azure para ofrecer infraestructuras seguras, 
                        resilientes y de alta disponibilidad. Nuestro equipo de expertos en la nube diseña y
                        despliega entornos optimizados que garantizan eficiencia operativa y escalabilidad,
                        permitiéndole mantenerse a la vanguardia en un mercado en constante cambio
                    </h6>
              </div>
              <div className="containers3-1 md:block hidden md:w-[50%]">
                  <Image
                      src="https://cms.aipus.co/aipus/assets/h26wqdhx2jkg8w0k"
                      alt="Picture of the author"
                      width={600}
                      height={350}
                      className="object-contain md:ml-10"
                  />
              </div>
              
            </div>


            <div className="section-4  w-[100%] mt-[60px] md:mt-[90px] mb-[20px]">
                <h1 className="uppercase font-bold w-[100%] text-[28px] md:text-[40px] text-black text-start ">
                   Servidores de aplicaciones
                </h1>
                <h6 className="text-[18px] font-semibold text-[#6e6e6e] w-[100%] md:w-[50%]">
                Servidores vps preconfigurados con diferentes servicios de bases de datos, headless CMS y
                 sistemas de gestión de contenido para adminstrar información
                 y simplificar la construccion de API's
                </h6>

                <div ref={DragScrollChecks1.externalRef} 
                    onMouseDown={DragScrollChecks1.startDragging} 
                    onMouseMove={DragScrollChecks1.onDrag}
                    onMouseUp={DragScrollChecks1.stopDragging}   
                    className="w-[100%] container-ckecks mt-8 p-2 flex md:justify-around overflow-y-scroll">
                    
                    <CardCheck1
                        title="Headless CMS"
                        description="Creacion y Gestión de contenido para el desarrollo de apis y aplicaciones"
                        icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                    />
                     <CardCheck1
                        title="Panel de Administración"
                        description="Panel visual para manejar archivos multimedia y bases de datos"
                        icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                    />
                     <CardCheck1
                        title="API First"
                        description="Cree apis de forma rapida y sencilla con la ayuda de un panel de administración"
                        icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                    />
                </div>
                <div ref={DragScrollChecks2.externalRef} 
                    onMouseDown={DragScrollChecks2.startDragging} 
                    onMouseMove={DragScrollChecks2.onDrag}
                    onMouseUp={DragScrollChecks2.stopDragging}  
                    className="w-[100%] container-ckecks mt-8 p-2 flex md:justify-around overflow-y-scroll">
                    
                    <CardCheck1
                        title="Recursos Dedicados"
                        description="Servidores VPS con recursos dedicados, escalables y de alta disponibilidad"
                        icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                    />
                     <CardCheck1
                        title="Tus Datos te Pertenecen"
                        description="Tu tienes el control total de tu servidor y de tus datos,"
                        icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                    />
                     <CardCheck1
                        title="Backups Diarios"
                        description="Copias de seguridad diarias para garantizar la seguridad de tus datos"
                        icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                    />
                </div>

            </div>


            <div className="precios w-[100%] mt-[60px] ">
                <h1 className="uppercase font-bold w-[100%] text-[28px] md:text-[40px] text-black text-start ">
                   Nuestros Servidores
                </h1>
            </div>


            <div className="circles w-[96%] ml-[2%] block md:hidden">
                <div className="flex justify-center space-x-4 mb-4">
                    {Array.from({ length: numCards }).map((_, index) => (
                        <button 
                            key={index} 
                            className={`w-8 h-8 rounded-full ${index === activeIndex ? 'bg-[#e20000]' : 'bg-[#4200e8]'}`} 
                            onClick={() => scrollToCard(index)} 
                        />
                    ))}
                </div>
            </div>

            <div  ref={externalRef} onMouseDown={startDragging} onMouseUp={stopDragging} onMouseMove={onDrag} 
                className={`flex overflow-auto container-cards w-[100%] mt-8  ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>

                <CardVps
                    discont={false}
                    plan="SERVIDOR APP 1"
                    price="$ 169.000 COP"
                    color="#4301E9"
                    cpu="2 Core"
                    ram="4 GB"
                    ssd="60 GB"
                    anchodeBanda="3 TB"
                    aconvenir={false}
                />
                <CardVps
                    discont={true}
                    plan="SERVIDOR APP 2"
                    price="$ 239.000 COP"
                    color="#e20000"
                    cpu="4 Core"
                    ram="8 GB"
                    ssd="160 GB"
                    anchodeBanda="5 TB"
                    aconvenir={false}
                />
                <CardVps
                    discont={false}
                    plan="SERVIDOR APP 3"
                    price="$ 390.000"
                    color="#4301E9"
                    cpu="8 Core"
                    ram="16 GB"
                    ssd="320 GB"
                    anchodeBanda="7 TB"
                    aconvenir={false}
                />
                <CardVps
                    discont={false}
                    plan="SERVIDORES A  MEDIDA"
                    price=" A CONVENIR"
                    color="#4301E9"
                    aconvenir={true}
                    cpu="A CONVENIR"
                    ram="A CONVENIR"
                    ssd="A CONVENIR"
                    anchodeBanda="A CONVENIR"
                />
            
            </div>
        </section>

    </>
}

export default SectionVPS;
