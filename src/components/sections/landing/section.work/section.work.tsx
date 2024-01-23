'use client'
import  { useEffect, useState, useRef } from 'react';
import Work1 from "./components/work.1";
import Work2 from "./components/work.2";
import Work3 from "./components/work.3";
import Work4 from "./components/work.4";
import Work5 from "./components/work5";
import { useRouter } from 'next/navigation';


const SectionWork = ():JSX.Element => {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLSpanElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          // entries[0] es el primer (y único) elemento observado
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        // Limpiar el observer cuando el componente se desmonte
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);

    return<>
        <span ref={sectionRef}>
            <Work1/>
            <Work2/>
            <Work3/>
            <Work4/>
            <Work5/>
        </span>
        
        {isVisible && (
            <div className=" z-[9] container-btn-create w-screen h-[70px] fixed bottom-[30px] flex  items-center justify-center md:hidden">
                <button onClick={()=>router.push('https://aipus.fillout.com/cotizar-proyecto?type=Proyecto%20a%20la%20medida')} className=" shadow-[0px_0px_16px_rgba(0,0,0,1)] rounded-[9px] w-[90%] h-[60px] bg-[#e20000] text-white text-[20px] font-bold">
                    Cotizar Proyecto Similar
                </button>
            </div>
        )}
            


    </>
}

export default SectionWork;