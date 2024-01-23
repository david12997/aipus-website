
import Link from "next/link";
import CardCalendar from "./components/card.calendar";

const SectionCallToAction = ():JSX.Element => {

    return<>
        <section className="w-screen h-[1700px] md:h-[800px]">
            <div className=" w-[90%] ml-[5%]  md:h-[60px] flex items-center justify-center text-[33px] md:text-[49px] font-extrabold mt-[5%]">
                <h1>EMPIEZA TU PROYECTO EN 3 PASOS</h1>
            </div>
            <div className="container-cards w-[90%] ml-[5%] h-[60%] flex flex-wrap justify-around mt-[70px]">
               
               <CardCalendar
                    img="https://cms.aipus.co/aipus/assets/cyc8y6jjwo0kks8k" 
                    title="Cuéntanos un poco más sobre tu proyecto"
                    text="¿De qué se trata tu empresa, problema o idea? "
               />
               <CardCalendar
                    img="https://cms.aipus.co/aipus/assets/lbzc0x2lqps044kg" 
                    title="Agenda una asesoría con un experto ¡Gratis!"
                    text="Te ayudaremos a definir la mejor solución para tu proyecto "
               />
               <CardCalendar
                    img="https://cms.aipus.co/aipus/assets/4ltybn0zzk00g48c" 
                    title="Adquiere un equipo de desarrollo dedicado"
                    text="Equipos de desarrollo dedicados para tu proyecto "
               />
                     
            </div>

            <div className="container-button w-screen h-[70px] flex items-center justify-center relative mt-[330px] md:mt-0">
                <Link href={'https://aipus.fillout.com/cotizar-proyecto?type=Proyecto%20a%20la%20medida'} className="flex items-center justify-center w-[300px] h-[70px] bg-[#d90100] text-white text-[22px] font-bold rounded-[6px]">
                   3, 2, 1 CREAR PROYECTO
                </Link>
            </div>

        </section>
    
    </>
}

export default SectionCallToAction;