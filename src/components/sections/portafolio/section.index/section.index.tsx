'use client'

import Button2 from "@/components/buttons/button.2/button2"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

const SectionIndexPortafolio = ():JSX.Element => {

    return<section className="w-[100%] my-linear-gradient">
        <section className="flex flex-wrap w-[100%] 2xl:w-[80%] 2xl:ml-[9%]  pt-[90px] relative ">
                <div className="container-text w-[100%] md:w-[45%] p-4 md:p-14">
                    <h1 className="md:text-[48px] text-[30px] font-bold uppercase text-white mt-[-20px] mb-16">
                        Desarrollamos productos y 
                        servicios digitales 
                        para su
                        <Typewriter
                            words={[' negocio.', ' marca.'," proyecto.", " idea.", " empresa."]}   
                            loop={0}
                            typeSpeed={120}
                            deleteSpeed={26}
                            
                        />
                    </h1>
                    <span className="w-[100%] flex justify-center md:block">
                        <Button2
                            text="Ver Portafolio"
                            width="300px"
                            height="60px"
                            background="#e20000"
                            color="white"
                            fontSize="20px"
                        />
                    </span>
                    
                </div>
                <div className="container-imgs w-[100%] md:w-[55%] md:min-h-[400px] p-2">
                    <Image
                        
                        src="https://cms.aipus.co/aipus/assets/3n51xb7aixus404s"
                        alt="Picture of the author"
                        width={1700}
                        height={900}
                        className="object-cover rounded-[50px]"
                        
                    />
                </div>
        </section>
    </section>
    
}

export default SectionIndexPortafolio