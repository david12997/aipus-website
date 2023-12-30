import Button3 from "@/components/buttons/button.3/button.3"
import PortafolioContent from "./portafolio.content"

const SectionPortafolio = ():JSX.Element => {

    return<>
         <section className="flex flex-wrap flex-col-reverse md:flex-row w-[96%] ml-[2%] 2xl:w-[80%] 2xl:ml-[9%]  mt-[60px] relative rounded-[10px]">
               <div className="flex container-options w-[100%] md:w-[60%] overflow-x-scroll max-h-[100px] relative">
                   
                    <Button3
                        title="Ver Todos los Proyectos"
                        color="white"
                        background="#4301E9"
                    />
                    <Button3
                        title="Branding"
                        color="black"
                        background="white"
                    />
                    <Button3
                        title="UX Experience"
                        color="black"
                        background="white"
                    />
                    <Button3
                        title="UI Desing"
                        color="black"
                        background="white"
                    />
               </div>
               <div className="container-title w-[100%] md:w-[40%] p-2 flex md:justify-end">
                    <div className="cont">
                        <h1 className="bg-[#e20000] text-white  text-[45px] w-[300px] flex items-center justify-center font-bold">PORTAFOLIO</h1>
                        <p className="text-[18px] font-semibold mt-4 w-[300px] text-[#6e6e6e]  mb-4 md:mb-0">Personalizamos nuestro proceso en torno
                            a la historia y los objetivos únicos de su marca, 
                            generando conocimientos estratégicos
                        </p>
                    </div>
               </div>
        </section>
        <PortafolioContent/>
    </>
}

export default SectionPortafolio