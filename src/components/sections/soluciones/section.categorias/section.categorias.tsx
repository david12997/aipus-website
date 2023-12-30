'use client'

import CardCategory1 from "@/components/cards/card.category.1/card.category.1";

const SectionCategorias = ():JSX.Element => {

    return<>
        <section className="w-[100%] pt-[40px] relative 2xl:w-[90%] 2xl:ml-[5%]">
            <h1 className="w-[90%] ml-[5%] h-50px] text-[36px] md:text-[45px] text-black font-extrabold" >NUESTRAS SOLUCIONES</h1>
            

            <div className="container-categorias w-[90%] ml-[5%] mt-1 mb-1 flex  overflow-x-scroll">
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/3brwycv8ywmc8owk"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Servicios Cloud - Servidores VPS"
                    description={<div className="p-2 overflow-y-scroll max-h-[160px]">
                        <li>Servidores de apps VPS </li>
                        <li>Infraestructura de Servidores </li>
                        <li>Amazon Web Services</li>
                        <li>Google Cloud Platform</li>
                        <li>Azure</li>
                        
                    </div>}
                    link="/soluciones/servidores-apps"
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/lyp0iy118w0wggsw"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Comercio Electronico - eCommerce"
                    description={<div className="p-2 overflow-y-scroll max-h-[160px]">
                        <li>Tiendas online</li>
                        <li>Landing de ventas</li>
                        <li>Bor de ventas</li>
                        <li>Marketplace </li>
                        <li>Comercio a la medida </li>
                    </div>}
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/9ws915ph6ego8gkk"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Websites y Landing Pages"
                    description={<div className="p-2 overflow-y-scroll max-h-[160px]">
                        <li>Websites Informativas</li>
                        <li>Landing Pages</li>
                        <li>Websites Corporativos</li>
                        <li>Website Blogs</li>
                        <li>Websites a la medida </li>
                    </div>}
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/7zt3avaybhgkgwos"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Apps móviles   IOS-Android"
                    description={<div className="p-2 overflow-y-scroll max-h-[160px]">
                        <li>Apps Nativas</li>
                        <li>Apps Hibridas</li>
                        <li>Apps de Domicilios</li>
                        <li>Apps de Ventas</li>
                        <li>Apps a la medida</li>
                    </div>}
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/axovu577hq80444s"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="LLM's -  Machine Learning"
                    description={<div className="p-2 overflow-y-scroll max-h-[160px]">
                        <li>Aplicaciones con el uso de LLM's</li>
                        <li>Computer vision</li>
                        <li>Deep Learning</li>
                        <li>Analisis de datos y Big Data </li>
                        <li>Soluciones a la medida </li>
                    </div>}
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/6sfhge6q89444084"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Software a la medida"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>Software empresarial</li>
                            <li>Software escalable</li>
                            <li>Software a la medida</li>
                            <li>Software en la nube</li>
                            <li>Software de escritorio</li>
                        </div>
                    
                    }
                />
                

            </div>

            <div className="container-categorias w-[90%] ml-[5%] mt-1 mb-1 flex  overflow-x-scroll">
        
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/jv0z6wn8mxc8c8gc"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Equipos de Desarrollo"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>Equipos de desarrollo IT</li>
                            <li>Equipos de diseño</li>
                            <li>Equipos de soporte IT</li>
                            <li>Equipos de ventas IT</li>
                        </div>
                    
                    
                    }
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/lo6naipa4qo0w8o8"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Desarrollo de Plataformas"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>Plataformas de educación</li>
                            <li>Plataformas de streaming</li>
                            <li>Plataformas de marketplace</li>
                            <li>Plataformas de ventas</li>
                            <li>Plataformas de administración</li>
                            <li>Plataformas POS LMS CRM ERP</li>
                        </div>
                    
                    }
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/bhwm4tibq8g80ggw"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Diseño UX/UI - prototipos"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>Diseño de interfaces</li>
                            <li>Diseño de experiencia de usuario</li>
                            <li>Prototipos interactivos</li>
                            <li> UX Research </li>
                            <li>Sistemas de Diseño</li>
                            <li>UI Kits</li>
                            <li>Wireframes</li>
                            <li>Mockups</li>
                        </div>
                    
                    
                    }
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/kjnqyx10bvkgkg80"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Branding - Diseño de marca"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>Branding</li>
                            <li>Diseño de marca</li>
                            <li>Diseño de identidad corporativa</li>
                            <li>Diseño de logotipos</li>
                        </div>
                    
                    
                    
                    }
                />
                 <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/cdw9z4phuagccgks"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Marketing Digital"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>SEO</li>
                            <li>Campañas SEM</li>
                            <li>Campañas de Email Marketing</li>
                            <li>Campañas redes sociales</li>
                        </div>
                    
                    
                    
                    
                    }
                />
                <CardCategory1 
                    img="https://cms.aipus.co/aipus/assets/ax9sb4a4ufc4c0w0"
                    alt="Imagen"
                    width={160}
                    height={160}
                    title="Administración de redes sociales"
                    description={
                        <div className="p-2 overflow-y-scroll max-h-[160px]">
                            <li>Community Manager</li>
                            <li>Social Media Manager</li>
                            <li>Creación de contenido</li>
                            <li>Administración de contenido</li>
                            <li>Administración de redes sociales</li>

                        </div>
                    
                    
                    
                    
                    
                    }
                />

            </div>

        </section>
    </>
    
};

export default SectionCategorias;