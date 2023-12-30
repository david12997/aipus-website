import CardServices1 from "@/components/cards/card.services.1/card.services.1";
import Image from "next/image";

const SectionServicios = ():JSX.Element => {

    return<>
        <section className="servicios w-screen h-screen min-h-[860px] max-h-[900px] md:min-h-[650px] md:max-h-[930px]">

            <div className="relative mobile block md:hidden w-[100%] h-[100%]">

                <div className="flex overflow-y-scroll z-[9] p-2 absolute container-cards-services w-[95%] ml-[2%] h-[260px] top-[250px]">
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/3brwycv8ywmc8owk"
                        name="Infraestructura Cloud - Servidores VPS"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/lyp0iy118w0wggsw"
                        name="Tiendas online y plataformas de comercio electrónico"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/9ws915ph6ego8gkk"
                        name="Sitios web y Landing pages"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/jv0z6wn8mxc8c8gc" 
                        name="Contrata equipos de desarrollo a medida - remotos"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/lo6naipa4qo0w8o8"
                        name="Plataformas POS - CMS - LMS - CRM"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/cdw9z4phuagccgks"
                        name="Marketing Publicidad digital - SEO - SEM - SMM"
                    />
                    

                    

                </div>
                <div className="flex overflow-y-scroll z-[9] p-2 absolute container-cards-services w-[95%] ml-[2%] h-[260px] top-[550px]">
                    
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/7zt3avaybhgkgwos"
                        name="Desarrollo de apps móviles - Android - IOS"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/axovu577hq80444s"
                        name="LLM's - Inteligencia artificial y Machine Learning"
                    />

                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/6sfhge6q89444084"
                        name="Software y sistemas a la medida "
                    />
                    
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/bhwm4tibq8g80ggw"
                        name="Diseño UX/UI y prototipados interactivos de alta fidelidad"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/kjnqyx10bvkgkg80"
                        name="Diseño de marca e identidad corporativa"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/ax9sb4a4ufc4c0w0"
                        name="Administración de redes sociales - Community manager"
                    />
                </div>

                <Image
                    src="https://cms.aipus.co/aipus/assets/1ki0j5toeef4s0kg" 
                    alt="Logo" 
                    priority={true}
                    quality={100}
                    fill={true}
                    className="z-[-1]"
                
                />

                <div className="top-[130px] absolute font-bold contaier-title w-[90%] ml-[5%] bg-[#E20000] text-white p-2 text-[24px] flex items-center justify-center">
                    <h1>NUESTRAS SOLUCIONES</h1>
                </div>
                <div className="top-[180px] absolute font-bold contaier-title w-[90%] ml-[5%]  text-white p-2 text-[18px] flex items-center justify-center">
                    <h1>Ver todas {`>`}</h1>
                </div>

            </div>

            <div className="relative desktop hidden md:flex w-[100%] h-[100%]">

                <div className="flex overflow-y-scroll z-[9] p-2 absolute container-cards-services w-[95%] ml-[2%] h-[260px] top-[110px] 2xl:h-[400px]">
                    
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/3brwycv8ywmc8owk"
                        name="Infraestructura Cloud - Servidores VPS"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/lyp0iy118w0wggsw"
                        name="Tiendas online y plataformas de comercio electrónico"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/9ws915ph6ego8gkk"
                        name="Sitios web y Landing pages"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/jv0z6wn8mxc8c8gc" 
                        name="Contrata equipos de desarrollo a medida - remotos"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/lo6naipa4qo0w8o8"
                        name="Plataformas POS - CMS - LMS - CRM"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/cdw9z4phuagccgks"
                        name="Marketing Publicidad digital - SEO - SEM - SMM"
                    />
                    

                    

                </div>
                <div className="flex overflow-y-scroll z-[9] p-2 absolute container-cards-services w-[95%] ml-[2%] h-[260px] 2xl:top-[530px] top-[410px] 2xl:h-[400px]">
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/axovu577hq80444s"
                        name="LLM's - Inteligencia artificial y Machine Learning"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/7zt3avaybhgkgwos"
                        name="Desarrollo de apps móviles - Android - IOS"
                    />

                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/6sfhge6q89444084"
                        name="Software y sistemas a la medida "
                    />
                    
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/bhwm4tibq8g80ggw"
                        name="Diseño UX/UI y prototipados interactivos de alta fidelidad"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/kjnqyx10bvkgkg80"
                        name="Diseño de marca e identidad corporativa"
                    />
                    <CardServices1 
                        img="https://cms.aipus.co/aipus/assets/ax9sb4a4ufc4c0w0"
                        name="Administración de redes sociales - Community manager"
                    />
                </div>

                <div className="contenedor-1 w-[45%] h-[100%] mt-[10px]">
                    <h1 className="w-[490px] h-[50px] ml-[5%] text-[36px]  text-black font-extrabold mt-[30px]">
                        NUESTRAS SOLUCIONES<span className="cursor-pointer text-[20px] font-semibold text-[#E20000] ml-1">{`Ver todas >`}</span>
                    </h1>

                </div>
                <div className="relative contenedor-2 w-[57%] h-[100%]">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/bb3bzlwxv808ow0o" 
                        alt="Logo" 
                        priority={true}
                        quality={100}
                        fill={true}
                    
                    />
                </div>

            </div>

        </section>
    </>
}

export default SectionServicios;