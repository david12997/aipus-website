import Image from "next/image";

const Work2 = ():JSX.Element => {

    return<>
            <section className=" w-screen h-screen  max-h-[500px] md:max-h-[930px]">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/1ki0j5toeef4s0kg" 
                    alt="Logo" 
                    loading="lazy"
                    quality={100}
                    fill={true}
                    
                />
            </div>

            <div className="container-desktop hidden md:flex w-[100%] h-[100%]  ">

                <div className="relative contenedor-1 w-[43%] h-[100%] flex ">
                    <div className="absolute img w-[96%] ml-[30px] mt-[45vh] 2xl:mt-[35vh] z-[9]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/nuo0yvkfy2o440sw" 
                            alt="Logo" 
                            width={1728}
                            height={1230}
                            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] rounded-[20px]"
                        />
                    </div>
                </div>

                <div className="relative contenedor-2 w-[57%] h-[100%] ">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/bb3bzlwxv808ow0o" 
                        alt="Logo" 
                       loading="lazy"
                        quality={100}
                        fill={true}
                       
                    />

                    <div className="absolute container-images-2 flex w-[100%] justify-around">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/pw27brai1bkoog8g" 
                            alt="Logo" 
                            width={300}
                            height={580}
                            className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/78q9o2kaal0cg4ow" 
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

export default Work2;