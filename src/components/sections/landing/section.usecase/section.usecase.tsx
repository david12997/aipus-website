import Image from "next/image"
import ButtonUseCase from "./components/button.usecase";

const SectionUseCase = ():JSX.Element => {

    return<>
        <section className="w-screen h-screen min-h-[1030px] max-h-[800px] md:min-h-[690px]">
            <div className="relative mobile block md:hidden w-[100%] h-[100%] pt-[20px]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/gwuxmt5elr4gws8k" 
                    alt="Logo" 
                    priority={true}
                    quality={100}
                    fill={true}
                    
                />

                <div className=" relative w-[90%] ml-[5%] bg-[#d90100] h-[60px] flex items-center justify-center">
                    <h1 className="text-white font-bold text-[30px]">CASOS DE USO</h1>
                </div>

                <div className="description w-[63%] ml-[30%] relative text-end mt-6">
                    <p className="text-white font-semibold text-[18px]">Creamos experiencias digitales que se adaptan a las necesidades especificas de cada proyecto</p>
                </div>

                <div className="container-img-icon w-[100%] relative mt-4">
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/oooemwgn1r4gc4g4" 
                        alt="Logo" 
                        quality={100}
                        width={934}
                        height={594}

                    />
                </div>

                <div className="title-text-2 w-[90%] ml-[5%] relative mt-[25px]">
                    <h1 className="text-[30px] font-extrabold"><span className="text-[#fb0100]">ELIGE LA CATEGORIA</span> A LA QUE PERTENECE TU PROYECTO</h1>
                </div>

                <div className="container-buttons-mobile relative h-[360px] overflow-y-scroll">
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/p1e4uv36ojkwogwo" 
                        text="Comercio Electronico"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/3brwycv8ywmc8owk"
                        text="Servidores y Hosting"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/fj26utgl83s44c80"
                        text="Websites y Landing Pages"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/7zt3avaybhgkgwos"
                        text="Aplicaciones Moviles"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/ibaf812xok088oog"
                        text="Software a la medida"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/6sfhge6q89444084"
                        text="Sistemas POS | CMS | LMS "
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/kjnqyx10bvkgkg80"
                        text="Diseño de marca e identidad"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/bhwm4tibq8g80ggw"
                        text="Diseño UX/UI y prototipado"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/eix7sava0lk4osgw"
                        text="Producción Audiovisual"
                    />
                    <ButtonUseCase
                        icon="https://cms.aipus.co/aipus/assets/ax9sb4a4ufc4c0w0"
                        text="Marketing y Publicidad"
                    />
                </div>

            </div>

            <div className=" relative desktop hidden md:flex w-[100%] h-[100%] ">

                <div className=" contenedor-1 w-[43%] h-[100%]  justify-start pt-[9vh] p-4">
                    <div className="container-title w-[90%] ml-4">
                        <h1 className="text-[39px] font-extrabold"><span className="text-[#D40000]">ELIGE LA CATEGORIA</span> A LA QUE PERTENECE TU PROYECTO</h1>
                    </div>

                    <div className="container-buttons w-[80%] h-[400px] p-2 mt-4 overflow-y-scroll">
                       <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/p1e4uv36ojkwogwo" 
                            text="Comercio Electronico"
                       />
                       <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/3brwycv8ywmc8owk"
                            text="Servidores y Hosting"
                       />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/fj26utgl83s44c80"
                            text="Websites y Landing Pages"
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/7zt3avaybhgkgwos"
                            text="Aplicaciones Moviles"
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/ibaf812xok088oog"
                            text="Software a la medida"
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/6sfhge6q89444084"
                            text="Sistemas POS | CMS | LMS "
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/kjnqyx10bvkgkg80"
                            text="Diseño de marca e identidad"
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/bhwm4tibq8g80ggw"
                            text="Diseño UX/UI y prototipado"
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/eix7sava0lk4osgw"
                            text="Producción Audiovisual"
                        />
                        <ButtonUseCase
                            icon="https://cms.aipus.co/aipus/assets/ax9sb4a4ufc4c0w0"
                            text="Marketing y Publicidad"
                        />
                    </div>
                </div>

                <div className="relative contenedor-2 w-[57%] h-[100%] ">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/pauafjahptwkkogw" 
                        alt="Logo" 
                        priority={true}
                        quality={100}
                        fill={true}
                       
                    />

                    <div className="title d text-white bg-[#d40000] relative w-[38%] ml-[56%] 2xl:w-[30%] 2xl:ml-[64%] mt-[9vh] flex items-center justify-end ">
                        <h1 className="text-[39px] font-extrabold mr-4">CASOS DE USO</h1>
                    </div>

                    <div className="descripcion relative text-end  w-[70%] ml-[24%]">
                        <h3 className="text-white text-[20px] font-semibold mt-2">Creamos experiencias digitales que se ajustan a las necesidades de cada proyecto</h3>
                    </div>

                    <div className="absolute container-image max-w-[650px] left-[-6%] min-w-[550px] 2xl:left-[16%]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/oooemwgn1r4gc4g4" 
                            alt="Logo" 
                            quality={100}
                            width={934}
                            height={594}
                          
                        />
                    </div>

                </div>

            </div>
        </section>
    
    </>
}

export default SectionUseCase;