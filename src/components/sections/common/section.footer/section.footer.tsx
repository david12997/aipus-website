import Image from "next/image"

const SectionFooter = ():JSX.Element =>{

    return<>
        <section className="relative w-[100%]  mt-[100px]">
            <Image
                loading="lazy"
                src="https://cms.aipus.co/aipus/assets/5h5mz6xo4toogwwg" 
                alt="Logo" 
                quality={100}
                fill={true}
                className="hidden md:block"
                
            />
            <Image
                loading="lazy"
                src="https://cms.aipus.co/aipus/assets/9sfd8iemu5oowcwo" 
                alt="Logo" 
                quality={100}
                fill={true}
                className="block md:hidden"
                
            />

            <div className="container-logo w-[100%] h-[250px] flex items-center justify-center relative top-[-50px] md:top-[-100px]">
                <div className="img-logo-aipus w-[200px] h-[200px] ">
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/h0s22d26ue0c00gg" 
                        alt="Logo" 
                        width={200}
                        height={200}

                    />
                </div>
            </div>

            <div className="relative container-links w-[90%] ml-[5%] h-[80%] flex flex-wrap items-center justify-around mt-[60px] md:mt-[-100px]">
                <div className="flex flex-wrap p-4 text-white container-link w-[290px] h-[300px] md:h-[360px]">
                    <p className="w-[100%] text-[22px] font-bold">Nosotros</p>
                    <p className="w-[100%] text-[18px]">atencion@aipus.co</p>
                    <p className="w-[100%] text-[18px]">Carrera 87f # 40 - 94</p>
                    <p className="w-[100%] text-[18px]">Bogotá Colombia</p>
                    <p className="w-[100%] text-[18px]">(+57) 319 394 9315</p>

                </div>
                <div className="flex flex-wrap p-4 text-white container-link w-[290px] h-[300px] md:h-[360px]">
                <p className="w-[100%] text-[22px] font-bold">Legal</p>
                    <p className="w-[100%] text-[18px]">Términos y condiciones</p>
                    <p className="w-[100%] text-[18px]">Tratamiento de datos</p>
                    <p className="w-[100%] text-[18px]">T & C Servicios </p>
                    <p className="w-[100%] text-[18px]">T & C Contratación de equipos</p>

                </div>
                <div className="flex flex-wrap p-4 text-white container-link w-[290px] h-[300px] md:h-[360px]">
                <p className="w-[100%] text-[22px] font-bold">Extras</p>
                    <p className="w-[100%] text-[18px]">Servicio de ayuda</p>
                    <p className="w-[100%] text-[18px]">Preguntas frecuentes</p>
                    <p className="w-[100%] text-[18px]">ADDA API v1</p>
                    <p className="w-[100%] text-[18px]">Blog</p>

                </div>

            </div>

        </section>

    </>
}

export default SectionFooter;