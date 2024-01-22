import Image from "next/image";

const Work1 = ():JSX.Element => {

    return<>
            <section className="w-screen h-screen min-h-[690px]">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/9c873jul2twcko48" 
                    alt="Logo" 
                    loading="lazy"
                    quality={100}
                    fill={true}
                    
                />
                <div className="relative title-nuestro-trabajo w-[90%] bg-[#d91600] ml-[5%] h-[50px] justify-center   flex items bg-center">
                    <h1 className="text-[30px] text-white  font-extrabold">NUESTRO TRABAJO</h1>
                </div>

                <div className="text-nuestro-trabajo mt-[40px] flex items-center justify-end w-[90%] ml-[5%]   relative">
                    <ul className="text-right w-[50%]">
                        <li className="text-right text-[18px] font-semibold text-white">Un pequeño vistazo a nuestros diseños y proyectos</li>
                    </ul>
                </div>
                <div className="images-mobile  mt-[30px] w-[100%] flex flex-wrap justify-center mt-[60px ]">
                    <span className="relative z-[9]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/sv6lgj2dia8co0s8" 
                            alt="Logo" 
                            width={300}
                            height={580}
                            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] rounded-[20px]"
                        />
                    </span>
                    <span className="block w-[90%] ml-[5%] mt-10 relative z-[9]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/gb2bssb5nooow8wg" 
                            alt="Logo" 
                            width={1440}
                            height={787}
                            className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                        />
                    
                    </span>

                    <span className="block w-[90%] ml-[5%] mt-10 relative z-[9]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/nuo0yvkfy2o440sw" 
                            alt="Logo" 
                            width={1720}
                            height={1230}
                            className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                        />
                    
                    </span>

                </div>
            </div>

            <div className=" relative container-desktop hidden md:flex w-[100%] h-[100%] ">

                <div className=" contenedor-1 w-[43%] h-[100%]  justify-start pt-[20vh] 2xl:pt-[10vh] p-4">
                    <span className="bg-[#D90100] block w-[300px] lg:w-[330px]  h-[64px] p-2 ml-6">
                        <h1 className=" relative text-[33px] lg:text-[36px]  font-extrabold text-white">NUESTRO TRABAJO</h1>
                    </span>
                    <ul className="w-[100%] text-[18px] font-semibold text-[#6e6e6e] mt-2 ml-6">
                        <li>Un pequeño vistazo a nuestros diseños y proyectos...</li>
                    </ul>
                    <div className="images  flex justify-center mt-[70px]  w-[90%]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/sv6lgj2dia8co0s8" 
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
                        loading="lazy"
                        quality={100}
                        fill={true}
                       
                    />

                    <div className="absolute  w-[100%] mt-[140px] right-[39px]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/gb2bssb5nooow8wg" 
                            alt="Logo" 
                            width={1440}
                            height={787}
                            className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                        />
                    </div>

                </div>

            </div>
        </section>
        
    </>
}

export default Work1;