import Image from "next/image"

const Work3 = ():JSX.Element => {

    return<>
        <section className="w-screen h-screen max-h-[730px] md:max-h-[900px]">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/9c873jul2twcko48" 
                    alt="Logo" 
                    priority={true}
                    quality={100}
                    fill={true}
                    
                />
                <div className="images-mobile absolute top-[90px] z-[9] w-[100%] flex flex-wrap justify-center mt-[60px ]">
                    <span>
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/78q9o2kaal0cg4ow" 
                            alt="Logo" 
                            width={300}
                            height={580}
                            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] rounded-[20px]"
                        />
                    </span>


                </div>
            </div>

            <div className="container-desktop hidden md:flex w-[100%] h-[100%] ">

                <div className="relative contenedor-1 w-[43%] h-[100%] flex ">
                    <div className="images absolute  flex justify-center top-[120px]  w-[90%]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/8nyuyes2gp8oc4gw" 
                            alt="Logo" 
                            width={300}
                            height={580}
                            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] rounded-[20px]"
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

                    <div className="absolute  w-[100%] mt-[140px] right-[39px]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/o80bni40kiswcos0" 
                            alt="Logo" 
                            width={1380}
                            height={1096}
                            className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                        />
                    </div>

                </div>
            </div>
    </section>
    </>
}

export default Work3;