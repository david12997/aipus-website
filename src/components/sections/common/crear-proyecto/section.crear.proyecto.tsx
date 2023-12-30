'use client'
import Button2 from "@/components/buttons/button.2/button2";
import LottiePlayer from "@/components/lottie.player/lottie.player";
import Image from "next/image";


const SectionCrearProyecto = ():JSX.Element => {

    return<section className="my-linear-gradient-2 w-[100%] min-h-[100vh] relative overflow-hidden">
            <Image
                src="https://cms.aipus.co/aipus/assets/ji9cmlxgxlc8wwco"
                alt="Crear proyecto"
                width={316}
                height={316}
                className="absolute top-[50px]  left-[84%] md:left-[94%]"
                
            />

            <Image
                src="https://cms.aipus.co/aipus/assets/ji9cmlxgxlc8wwco"
                alt="Crear proyecto"
                width={316}
                height={316}
                className="absolute top-[-190px] md:top-[-170px]  md:left-[12%]"
                
            />

        <section className="w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[10]   overflow-hidden mb-8">

            <div className="container-content flex flex-wrap w-[96%] ml-[2%] 2xl:w-[90%] 2xl:ml-[10%] ">

                <div className="block container-1 w-[100%] md:w-[50%] mt-[100px] md:mt-[20vh]">
                    <div className="block p-4 md:hidden">
                        <h1 className="relative title-mobile w-[160px] text-center text-[36px] md:text-[45px] font-bold text-white bg-[#e20000]">
                            ADDA AI
                            <p className="absolute text-[18px] text-start w-[250px] top-[70px]"> Tu visión, potenciada por nuestra IA</p>
                        </h1>
                    </div>
                    
                    <div className="overflow-hidden max-h-[450px] md:max-h-[600px] min-h-[360px] md:mt-[-10vh] container-img w-[200%] ml-[-78%] md:w-[160%] md:ml-[-55%]  2xl:mt-[-4vh]  p-2 md:p-4">
                        
                        <LottiePlayer
                            src="https://cms.aipus.co/aipus/assets/2bnp13ty6gkkcocw"

                        />
                        
                    </div>
                    
                </div>

                <div className="container-2  w-[100%] md:w-[50%]  md:mt-[14vh] 2xl:w-[50%]   pr-[-200px]">
                    <div className="block p-4 ">
                        <h1 className="md:block hidden title-mobile w-[190px] text-center text-[36px] md:text-[45px] font-bold text-white bg-[#e20000]">
                            ADDA AI
                        </h1>
                        <p className="text-[28px] text-white md:w-[90%] font-bold  md:mt-[43px]">
                            ADDA AI Asistente de generación de proyectos y empresas impulsado por IA . 
                            Construya ideas, negocios, productos y servicios  rápidamente
                        </p>
                    </div>

                    <div className="container-button w-[100%] md:w-[90%] md:ml-[2%] md:mt-[20px] 2xl:mt-[50px]">
                        <p className="mb-4 text-[15px] md:text-[18px] font-semibold text-[white] p-4 md:p-0">
                            Soluciones para cada sector y necesidad, 
                            genera productos, servicios y logos creativos, 
                            acompañados con  planes de negocio y soluciones detalladas
                        </p>
                        <input type="text" placeholder=" Nombre del proyecto"
                            className="text-[20px] p-1 mb-4 w-[100%]  font-semibold h-[60px] bg-white rounded-[9px] text-[#6e6e6e]"
                        />

                        <Button2
                            width="100%"
                            height="60px"
                            fontSize="20px"
                            color="#ffffff"
                            background="#e20000"
                            text="Empezar"
                           

                        />
                    </div>
                </div>
            </div>
            
        </section>
    </section>
}

export default SectionCrearProyecto;