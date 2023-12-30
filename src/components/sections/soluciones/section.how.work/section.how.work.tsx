import Button3 from "@/components/buttons/button.3/button.3";
import Image from "next/image";

const SectionHowWork = ():JSX.Element => {

    return<>
        <section className="w-[92%] ml-[5%] mt-[50px] 2xl:w-[80%] 2xl:ml-[10%]">

            <div className="container-with-flex w-[100%] flex">
                
                <div className="container-texts w-[100%] md:w-[50%]">
                    <h1 className="font-extrabold md:text-[45px] text-[36px]">LA FORMA EN LA QUE TRABAJAMOS</h1>
                    <p className="font-semibold text-[#6e6e6e] text-[18px] w-[100%] md:w-[90%] mt-2">
                        Utilizamos metodologías ágiles para asegurar una entrega 
                        de software rápida y eficiente, centrada en 
                        la calidad y la satisfacción del cliente.
                    </p>
                    <div className="container-img  md:hidden block">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/3ebtpo7zto8wg8gk"
                            alt="Logo" 
                            width={500} 
                            height={500}
                            className="object-contain"
                        />
                    </div>
                    <p className="font-semibold text-[#6e6e6e] text-[18px] w-[100%] md:w-[90%] mt-8">
                    Nuestra flexibilidad y respuesta rápida a los cambios, 
                    a través de iteraciones cortas y colaboración constante, 
                    promueven la transparencia y el alineamiento con los objetivos de cada proyecto
                    </p>
                </div>

                <div className="container-img w-[40%] hidden md:block ml-10 mt-[-20px]">
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/3ebtpo7zto8wg8gk"
                        alt="Logo" 
                        width={600} 
                        height={600}
                        className="object-contain max-w-[500px]"
                    />
                </div>

            </div>

            <div className="container-btns w-[100%] flex overflow-x-scroll mt-8 md:mt-0 justify-start md:justify-between ">
               <Button3 title=" 1. Definición y Análisis"
                        color="white"
                        background="#4301E9"
               />
               <Button3 title=" 2. Planeación y Diseño"
                        color="#4301E9"
                        background="white"
               />
               <Button3 title=" 3. Desarrollo e Implementacion"
                        color="#4301E9"
                        background="white"
               />
               <Button3 title=" 4. Entrega y Soporte"
                        color="#4301E9"
                        background="white"
               />
            </div>

            <div className="container-info-work w-[100%] flex justify-between mt-4">
                <div className="container-info-1 hidden md:block w-[40%]">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/e6oigqkzjj4g4oc8"
                            alt="análisis y planeación" 
                            width={700} 
                            height={600}
                            className="object-contain max-w-[500px]"
                        />
                </div>
                <div className="container-info-2 w-[100%] md:w-[50%]">
                    <div className="info mt-8 mb-2">
                        <h1 className="font-extrabold text-[23px] md:text-[30px]">1. Definir el Alcance</h1>
                        <p className="font-semibold text-[#6e6e6e] text-[18px] w-[100%] md:w-[90%]">
                            Comprender los objetivos del proyecto, 
                            identificar las necesidades del usuario y 
                            definir claramente lo que se espera lograr con el producto.
                        </p>
                    </div>
                    <div className="info mt-8 mb-2">
                        <h1 className="font-extrabold text-[23px] md:text-[30px]">2. Reuniones con Stakeholders</h1>
                        <p className="font-semibold text-[#6e6e6e] text-[18px] w-[100%] md:w-[90%]" >
                        Involucrar a todas las partes interesadas en el proyecto para recopilar sus requisitos y expectativas.
                        </p>
                    </div>
                    <div className="info mt-8 mb-2">
                        <h1 className="font-extrabold text-[23px] md:text-[30px]">3. Definir User Stories / Casos de Uso</h1>
                        <p className="font-semibold text-[#6e6e6e] text-[18px] w-[100%] md:w-[90%]" >
                        Desarrollar historias de usuario que describan las funcionalidades desde la perspectiva del usuario final.
                        </p>
                    </div>
                    
                </div>
            </div>

        </section>
    </>
}

export default SectionHowWork;