import Button2 from "@/components/buttons/button.2/button2";
import Image from "next/image";
import MenuHamburger from "./components/menu.hamburger";
import BtnLanguage from "./components/btn.language";
import Link from "next/link";


const SectionNav = ():JSX.Element => {

    return<>
        <nav className="shadow-[0_5px_5px_rgba(0,0,0,0.09)] w-screen  h-[60px] grid  grid-cols-2 grid-rows-1 fixed z-[99] bg-white pt-2">

            <div className="container-nav-1 col-span-1 row-span-1 w-[95%] ml-[2%] md:w-[90%] md:ml-[5%]">

                <div className="logo flex items-center w-[50px] h-[50px]">
                    <Image 
                        src="https://cms.aipus.co/aipus/assets/rxll78sakisw0koc" 
                        alt="Logo Aipus" 
                        width={45} 
                        height={45} 
                    />
                    <h1 className="font-extrabold text-[30px] text-[#4301e9]">AIPUS</h1>
                </div>

            </div>

            <div className=" container-nav-2 col-span-1 row-span-1  w-[95%]  md:w-[96%] flex item-center justify-end">

                <div className="absolute md:flex links w-[400px] h-[80%] hidden items-center justify-between right-[540px] text-[18px] font-bold text-[#7d7d7d]">
                    <Link href="/"> Inicio </Link>
                    <Link href="/soluciones"> Soluciones </Link>
                    <Link href="/portafolio"> Portafolio </Link>
                    <Link href="/equipos"> Equipos IT </Link>
                    
                </div>
                <div className="container-locale mr-4">
                   <BtnLanguage/>
                </div>
                
                <div className="container-button hidden md:block mr-4">
                    <Button2
                        text="Cotizar Proyecto"
                        width="200px"
                        height="45px"
                        color="#ffffff"
                        background="#ee0100"
                        fontSize="20px"
                        link="https://aipus.fillout.com/cotizar-proyecto?type=Proyecto%20a%20la%20medida"
                    />
                </div>
               <MenuHamburger/>
            </div>

        </nav>
    </>
}

export default SectionNav;