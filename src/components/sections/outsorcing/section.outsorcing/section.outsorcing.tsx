import CardCheck1 from "@/components/cards/card.check.1/card.check.1";

const SectionOutsorcing = ():JSX.Element => {

    return<>
        <section className="w-screen p-2 md:p-4 mt-4 relative 2xl:w-[80%] 2xl:ml-[9%] mb-4">
            <h1 className="title text-[36px] md:text-[45px] font-bold w-[96%] ml-[2%] h-[130px] relative">
                PLANES EQUIPOS DE DESARROLLO IT
                <p className="absolute top:[60%] md:top-[49%] text-[18px]  text-[#6e6e6e] font-bold min-w-[330px] max-w-[700px]">
                    Outsourcing en Desarrollo IT y Diseño Interactivo: 
                    Acceda a expertos globales, optimice costos y enfoque su 
                    negocio en lo esencial, mientras nosotros entregamos soluciones 
                    tecnológicas innovadoras y personalizadas.
                </p>
            </h1>
            
            <div className="container-checks  mt-[160px] md:mt-8  p-2 flex md:justify-around overflow-y-scroll">
                <CardCheck1
                    title="RECLUTAMIENTO Y SELECCION"
                    description="Encuentra profesionales calificados en el area del software y el diseño"
                    icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                />
                <CardCheck1
                    title="REDUCCION DE COSTOS"
                    description="Diga adiós a los costos de contratación, capacitación y administración"
                    icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                />
                <CardCheck1
                    title="ENFOQUE EN EL NEGOCIO"
                    description="Concentrese en su negocio mientras nosotros nos ocupamos del resto"
                    icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                />


            </div>

            <div className="container-checks  mt-8 p-2 flex md:justify-around overflow-y-scroll">
                <CardCheck1
                    title="INNOVACION TECNOLOGICA"
                    description="Con nuestros expertos en tecnología, su empresa estará a la vanguardia"
                    icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                />
                <CardCheck1
                    title="REDUCCION DE TIEMPOS"
                    description="Nos movemos rápido, entregamos resultados en tiempos record"
                    icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                />
                <CardCheck1
                    title="ESCALABILIDAD EMPRESARIAL"
                    description="Equipos de desarrollo escalables, crecen a la par de su empresa"
                    icon="https://cms.aipus.co/aipus/assets/p2ohk8mv6rk0g40s"
                />
            </div>
        </section>
    </>
}

export default SectionOutsorcing;