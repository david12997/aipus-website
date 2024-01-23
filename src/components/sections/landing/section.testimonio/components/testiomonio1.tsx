
import Button2 from "@/components/buttons/button.2/button2";
import Image from "next/image";

const Testimonio1 = ():JSX.Element => {

    return<>
            <section className="w-screen h-screen min-h-[690px] max-h-[730px] md:max-h-[750px]">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/9c873jul2twcko48" 
                    alt="Logo" 
                    loading="lazy"
                    quality={100}
                    fill={true}
                    
                />

                <div className="w-[90%] ml-[5%] flex items-center p-2 bg-[#ee0100] text-[32px] font-bold relative  rounded-[6px]">
                    <h1 className="text-white">¿QUE DICEN SOBRE NOSOTROS?</h1>
                </div>

                <Image
                    className="w-[100%] relative mt-[50px]"
                    src="https://cms.aipus.co/aipus/assets/5d5pils8ydgkswc0" 
                    alt="Logo" 
                    loading="lazy"
                    width={600}
                    height={500}
                />

                <div className="w-[70%] ml-[20%] flex justify-end text-end relative text-[20px] font-semibold text-white">
                    <h2 className="text-end">¡ Más importante que nuestra propia opinión, la opinión de nuestros clientes y usuarios !</h2>
                </div>

                <div className="btn-container w-[90%] h-[60px] ml-[5%] relative mt-[60px]">
                    <Button2
                        width="100%"
                        height="54px"
                        background="#ee0100"
                        color="#fff"
                        text="Cotizar proyecto"
                        fontSize="19px"
                        link="https://aipus.fillout.com/cotizar-proyecto?type=Proyecto%20a%20la%20medida"


                    />
                </div>

            </div>

            <div className=" relative container-desktop hidden md:flex w-[100%] h-[100%] ">

                <div className=" contenedor-1 w-[43%] h-[100%]  justify-start pt-[20vh] 2xl:pt-[10vh] p-4">
                    <div className="w-[90%] ml-[5%] flex items-center p-2 text-[45px] font-bold relative h-[100px] rounded-[6px]">
                        <h1 className="text-black">¿QUE DICEN SOBRE <span className="text-[#ee0100]">NOSOTROS</span>?</h1>
                    </div>

                    
                    <Image
                        className="w-[100%] ml-[5%] relative mt-[14px] max-w-[700px]"
                        src="https://cms.aipus.co/aipus/assets/5d5pils8ydgkswc0" 
                        alt="Logo" 
                        loading="lazy"
                        width={700}
                        height={600}
                    />

                </div>

                <div className="relative contenedor-2 w-[57%] h-[100%] ">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/pauafjahptwkkogw" 
                        alt="Logo" 
                        loading="lazy"
                        quality={100}
                        fill={true}
                       
                    />
                     <div className=" w-[67%] ml-[28%] text-end p-2 text-[45px] font-bold relative  rounded-[6px] mt-[120px] flex flex-wrap justify-end">
                        <h1 className="text-white text-end bg-[#ee0100] p-1"> LO QUE DICEN NUESTROS</h1>
                        <h1 className="text-white text-end bg-[#ee0100] w-[200px] p-1"> CLIENTES</h1>
                    </div>

                    
                     <div className="w-[60%] ml-[35%] text-end flex items-center p-2 text-[20px] font-semibold relative h-[100px] rounded-[6px] mt-[20px] justify-end">
                        <h1 className="text-white text-end">¡ Más importante que nuestra propia opinión, la opinión de nuestros clientes y usuarios !</h1>
                    </div>

                    <div className="btn-container w-[35%] ml-[60%]  absolute bottom-[64px]">
                        <Button2
                            width="100%"
                            height="64px"
                            background="#ee0100"
                            color="#fff"
                            text="Cotizar proyecto"
                            fontSize="20px"
                            link="https://aipus.fillout.com/cotizar-proyecto?type=Proyecto%20a%20la%20medida"


                        />
                    </div>

                </div>

            </div>
        </section>
        
    </>
}

export default Testimonio1;