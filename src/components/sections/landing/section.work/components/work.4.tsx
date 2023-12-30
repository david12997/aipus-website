import Image from "next/image";

const Work4 = ():JSX.Element => {

    return<>
            <section className=" w-screen h-screen min-h-[860px]  max-h-[960px] md:max-h-[800px] md:min-h-[690px]">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/1ki0j5toeef4s0kg" 
                    alt="Logo" 
                    priority={true}
                    quality={100}
                    fill={true}
                    
                />
                <div className="relative w-[100%] container-mobile- flex flex-wrap justify-center p-2">
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/8nyuyes2gp8oc4gw" 
                        alt="Logo" 
                        width={300}
                        height={580}
                        className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                    />
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/o80bni40kiswcos0" 
                        alt="Logo" 
                        width={1380}
                        height={1096}
                        className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] mt-[36px]"
                    />
                </div>
            </div>

            <div className="container-desktop hidden md:flex w-[100%] h-[100%]  ">

                <div className="relative contenedor-1 w-[43%] h-[100%] flex ">
                    <div className="container-img absolute w-[120%] mt-[100px] ml-[6%]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/7kodm1kd09og4oko" 
                            alt="Logo" 
                            width={1440}
                            height={885}
                            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] rounded-[20px] relative z-[9]"
                        />
                    </div>
                </div>

                <div className="relative contenedor-2 w-[57%] h-[100%] flex items-center justify-end ">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/bb3bzlwxv808ow0o" 
                        alt="Logo" 
                        priority={true}
                        quality={100}
                        fill={true}
                       
                    />

                    <div className="container-imagen-desktop mr-[100px]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/lz8hvc4q9n4cg0c4" 
                            alt="Logo" 
                            width={300}
                            height={580}
                            className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                        />
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default Work4;