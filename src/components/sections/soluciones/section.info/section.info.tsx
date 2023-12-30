import CardInfo1 from "@/components/cards/card.info.1/card.info.1";
import Image from "next/image";

const SectionInfo = ():JSX.Element => {


    return<>
        <section className="w-[92%] ml-[5%] mt-[50px] 2xl:w-[80%] 2xl:ml-[10%]">
            <div className="texts w-[100%]">
                <h1 className="font-extrabold md:text-[45px] text-[36px]">SOLUCIONES DE IA SOFTWARE Y DISEÑO </h1>
                <h2 className="w-[100%] md:w-[40%] text-[18px] font-semibold text-[#6e6e6e]">
                    Trabajamos en la intersección de estrategia,
                    creatividad y tecnología para ayudar a nuestros
                    clientes a reinventar digitalmente sus negocios
                </h2>
            </div>

            <div className="mt-[50px] container-cards w-[100%] md:w-[96%] md:ml-[2%] flex justify-between overflow-x-scroll">
                
                <CardInfo1
                    title="Desarrollo de Software"
                    description=" Ofrecemos servicios integrales de software, cubriendo 
                    todo el proceso desde el diseño UI/UX hasta el desarrollo,
                    pruebas y soporte, garantizando una experiencia fluida y
                    sin complicaciones"
                    img="https://cms.aipus.co/aipus/assets/4n6hsl46o0e8wgws"
                    btn_text="Ver soluciones"
                />

                <CardInfo1
                    title="Diseño UX/UI"
                    description=" Nuestro diseño, centrado en el usuario, 
                    combina intuición y estética para mejorar significativamente
                     la interacción entre tu producto y tus clientes"
                    img="https://cms.aipus.co/aipus/assets/qnayy8a1jissosos"
                    btn_text="Ver soluciones"
                />

                
            </div>
            <div className="mt-[50px] container-cards w-[100%] md:w-[96%] md:ml-[2%] flex justify-between overflow-x-scroll">
                
                <CardInfo1
                    title="Diseño Interactivo"
                    description=" Nuestro diseño interactivo 
                    fusiona estética y funcionalidad para experiencias 
                    digitales únicas, ofreciendo interfaces visualmente 
                    atractivas y una interacción natural "
                    img="https://cms.aipus.co/aipus/assets/14rsvma830qosgww"
                    btn_text="Ver soluciones"
                />

                <CardInfo1
                    title="Inteligencia Artificial"
                    description="Expertos en inteligencia artificial,
                     brindando soluciones personalizadas que automatizan
                      y potencian la toma de decisiones en tu negocio"
                    img="https://cms.aipus.co/aipus/assets/ebmoht83pzscs8wo"
                    btn_text="Ver soluciones"
                />

                
            </div>
        </section>
    
    </>
}

export default SectionInfo;