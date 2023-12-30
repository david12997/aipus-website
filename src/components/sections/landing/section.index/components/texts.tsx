'use client'

import { Typewriter } from "react-simple-typewriter";

const TextsIndex = (props:{screen:string}):JSX.Element => {

    
    return<>

        {
            props.screen === 'mobile'
            ?
            <>
                <h1 className="text-1  absolute top-[66%] w-[78%] ml-[16%] text-[26px] font-bold text-right text-white">
                    AYUDAMOS A LAS EMPRESAS A CRECER 
                    CREANDO <span className="bg-[#D91600] pl-1 pr-1 ">{
                        <Typewriter
                            words={['PRODUCTOS Y SERVICIOS DIGITALES', 'APPS Y SITIOS WEB',"SOFTWARE Y SISTEMAS", "SISITEMAS CONTABLES", "MARCAS Y EXPERIENCIAS DIGITALES", "SISTEMAS POS, CRM Y CMS"]}   
                            loop={0}
                            typeSpeed={120}
                            deleteSpeed={26}
                            
                        />
                    }</span>
                </h1>
            
            </>
            :
            <>
                <h1 className=" absolute top-[20%] w-[65%] ml-[31%] text-[45px] font-bold text-right text-white">
                    AYUDAMOS A LAS EMPRESAS A CRECER 
                    CREANDO <span className="bg-[#D91600] pl-1 pr-1 ">{
                        <Typewriter
                            words={['PRODUCTOS Y SERVICIOS DIGITALES', 'APPS Y SITIOS WEB',"SOFTWARE Y SISTEMAS", "SISITEMAS CONTABLES", "MARCAS Y EXPERIENCIAS DIGITALES", "SISTEMAS POS, CRM Y CMS"]}   
                            loop={0}
                            typeSpeed={120}
                            deleteSpeed={26}
                        />
                    }</span> 
                </h1>
            </>
        }

    </>
}

export default TextsIndex;