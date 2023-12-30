
import Image from "next/image";

const Testimonio2 = ():JSX.Element => {

    return<>
        <section className="w-screen h-screen min-h-[690px]">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/1ki0j5toeef4s0kg" 
                    alt="Logo" 
                    loading="lazy"
                    quality={100}
                    fill={true}
                    
                />

                <div className="w-[94%] ml-[3%] flex items-center overflow-y-scroll pt-2">
                    <Image
                        className="w-[330px] min-w[330px] max-h-[700px]  rounded-[10px] shadow-[0_0px_9px_rgba(0,0,0,0.45)] relative ml-2 mr-2"
                        src="https://cms.aipus.co/aipus/assets/6ii96ojyz1s8coko" 
                        alt="Logo" 
                        loading="lazy"
                        width={300}
                        height={700}
                    />

                    <Image
                        className=" w-[330px] ml-22 mr-2 min-w[330px] max-h-[700px]  rounded-[10px] shadow-[0_0px_9px_rgba(0,0,0,0.45)] relative"
                        src="https://cms.aipus.co/aipus/assets/6q4qyhqklvcw4ooc" 
                        alt="Logo" 
                        loading="lazy"
                        width={300}
                        height={700}
                    />
                    <Image
                        className="w-[330px]ml-2 mr-2 rounded-[10px] shadow-[0_0px_9px_rgba(0,0,0,0.45)] relative"
                        src="https://cms.aipus.co/aipus/assets/ppbfti6pr6swcgks" 
                        alt="Logo" 
                        loading="lazy"
                        width={300}
                        height={700}
                    />
                </div>

            </div>

            <div className=" relative container-desktop hidden md:flex w-[100%] h-[100%] ">

                <div className=" contenedor-1 w-[43%] h-[100%]  justify-start pt-[20vh] 2xl:pt-[10vh] p-4">

                    <Image
                        className="w-[330px] ml-[9%] rounded-[10px] shadow-[0_0px_9px_rgba(0,0,0,0.45)] mt-[-60px]"
                        src="https://cms.aipus.co/aipus/assets/ppbfti6pr6swcgks" 
                        alt="Logo" 
                        loading="lazy"
                        width={300}
                        height={700}
                    />

                </div>

                <div className="relative contenedor-2 w-[57%] h-[100%] flex">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/bb3bzlwxv808ow0o" 
                        alt="Logo" 
                        loading="lazy"
                        quality={100}
                        fill={true}
                       
                    />

                    <Image
                        className="w-[330px] min-w[330px] max-h-[700px]  rounded-[10px] shadow-[0_0px_9px_rgba(0,0,0,0.45)] mt-[10px] ml-[-50px]  relative"
                        src="https://cms.aipus.co/aipus/assets/6ii96ojyz1s8coko" 
                        alt="Logo" 
                        loading="lazy"
                        width={300}
                        height={700}
                    />

                    <Image
                        className="absolute w-[330px] right-[46px]  min-w[330px] max-h-[700px]  rounded-[10px] shadow-[0_0px_9px_rgba(0,0,0,0.45)] mt-[54px] z-[9]  ml-[20%]"
                        src="https://cms.aipus.co/aipus/assets/6q4qyhqklvcw4ooc" 
                        alt="Logo" 
                        loading="lazy"
                        width={300}
                        height={700}
                    />




                </div>

            </div>
        </section>
        
    </>
}

export default Testimonio2;