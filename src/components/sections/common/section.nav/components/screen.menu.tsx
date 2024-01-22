'use client'

import Button2 from "@/components/buttons/button.2/button2"
import { IconArrowRight } from "@/components/icons"
import { RefObject } from "react"

type PropsScreenMenu = {

    screenMenu:RefObject<HTMLElement>,
    toggleScreenMenu: (reference:RefObject<HTMLElement>)=>void


}

const ScreenMenu = (props:PropsScreenMenu):JSX.Element => {


    return<>
        <section ref={props.screenMenu} className="hidden top-0 shadow-[-5px_9px_9px_rgba(0,0,0,0.1)] screen-menu w-[90vw] left-[10vw] md:w-[50vw] md:left-[50vw] fixed bg-white h-screen">
            
            <div className="relative w-[99%] h-[50px] border-y p-2 flex items-center justify-center">

                <h1 className="text-[22px] text-[#4100E6] font-bold">Menu</h1>
                <span onClick={()=>props.toggleScreenMenu(props.screenMenu)} className="absolute container-arrow left-[86%] md:left-[92%] cursor-pointer">
                    <IconArrowRight width="32" height="30" fill="#4100E6"/>
                </span>
                
            </div>

            <div className="menu-body w-[99%] h-[85%] mt-4 p-2 md:p-6">
                <div className="mt-2 mb-6">
                    <Button2
                        text="Inicio"
                        width="100%"
                        height="70px"
                        color="#ffffff"
                        background="#ee0100"
                        fontSize="22px"
                        link="/"
                    />
                </div>
                <div className="mt-6 mb-6">
                    <Button2
                        text="Soluciones"
                        width="100%"
                        height="70px"
                        color="#ffffff"
                        background="#4100E6"
                        fontSize="22px"
                        link="/soluciones"
                    />
                </div>
                <div className="mt-6 mb-6">
                    <Button2
                        text="Portafolio"
                        width="100%"
                        height="70px"
                        color="#ffffff"
                        background="#4100E6"
                        fontSize="22px"
                        link="/portafolio"
                    />
                </div>
                <div className="mt-6 mb-6">
                    <Button2
                        text="Equipos IT"
                        width="100%"
                        height="70px"
                        color="#ffffff"
                        background="#4100E6"
                        fontSize="22px"
                        link="/equipos"
                    />
                </div>
                <div className="mt-6 mb-6">
                    <Button2
                        text="Crear Proyecto"
                        width="100%"
                        height="70px"
                        color="#ffffff"
                        background="#4100E6"
                        fontSize="22px"
                        link="https://aipus.fillout.com/cotizar-proyecto?type=Proyecto%20a%20la%20medida"
                    />
                </div>



                
                
            </div>

        </section>
    </>
}

export default ScreenMenu