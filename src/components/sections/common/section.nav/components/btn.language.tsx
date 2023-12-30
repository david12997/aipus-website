'use client'

import { IconTimesClose } from "@/components/icons";
import SelectLanguage from "@/components/react.select/select.1/select.1";
import CurrencySelect from "@/components/react.select/select.2/select2";
import Image from "next/image"
import { useRef } from "react";

const BtnLanguage = ():JSX.Element => {

    const screenLaguageRef = useRef<HTMLElement>(null);

    const clickLanguageSection = (e:React.MouseEvent<HTMLElement>):void => {
        const sectionElement = e.currentTarget as HTMLElement;
        sectionElement.classList.toggle('hidden');
        sectionElement.classList.toggle('flex');
       
      
    }

    const clickLanguageDiv = (e:React.MouseEvent<HTMLElement>):void => {
        e.stopPropagation();
    }

    const toogleScreenLanguage = (reference:React.RefObject<HTMLElement>):void => {
        reference.current?.classList.toggle('hidden');
        reference.current?.classList.toggle('flex');

    }

    return<>
        <section onClick={clickLanguageSection}  ref={screenLaguageRef} className="hidden screen-language fixed w-screen h-screen bg-[#0000008d] top-0 left-0  items-center justify-center">
                <div onClick={clickLanguageDiv} className="bg-white w-[80%] md:w-[45%] h-[80%] md:h-[75%] rounded-[9px] flex flex-wrap justify-center p-2 md:p-4">
                   <div className="relative w-[100%] h-[9%] flex items-center justify-center">
                        <h2 className="text-[22px] font-bold text-black">Prefrencias</h2>
                        <span onClick={()=>toogleScreenLanguage(screenLaguageRef)} className="absolute cursor-pointer left-[92%] md:left-[95%]">
                            <IconTimesClose width="20" height="20" fill="#000000" />
                        </span>
                   </div>
                   <form className="relative w-[100%] h-[90%] pt-4">
                        <label className="w-[100%] text-[20px] font-semibold text-[#6e6e6e]">Elige tu idioma</label>
                        <SelectLanguage/>

                        <label className="block mt-[50px] w-[100%] text-[20px] font-semibold text-[#6e6e6e]">Elige tu moneda</label>
                        <CurrencySelect />
                        <button className="absolute text-[20px] font-bold bottom-0 w-[100%] h-[60px] bg-[#D90100] text-white flex items-center justify-center rounded-[9px]">
                            Guardar Cambios
                        </button>
                   </form>
                </div>
        </section>
        <button onClick={()=>toogleScreenLanguage(screenLaguageRef)} className="bg-[#4301E9] locale flex items-center justify-around w-[100px] md:w-[209px] h-[45px] border-2 border-white rounded-[6px]">
            <span className="w-[100%] flex items-center justify-around">
                <Image
                    src="https://cms.aipus.co/aipus/assets/g2yjtx8n0xwkw0k0" 
                    alt="icono idioma" 
                    width={40} 
                    height={40}
                />
                <span className="text-[22px] font-semibold text-white mr-2">ES </span>
            </span>

            <span className="hidden md:flex w-[100%] items-center justify-around">
                <Image
                    src="https://cms.aipus.co/aipus/assets/o2kz03wtz4g8ww8o" 
                    alt="icono divisa" 
                    width={43} 
                    height={43}
                />
                <span className="mr-1 text-[22px] font-semibold text-white">COP</span>
            </span>
            
        </button>
    </>
}

export default BtnLanguage;