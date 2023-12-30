import LottiePlayer from "@/components/lottie.player/lottie.player";
import Image from "next/image"
import TextsIndex from "./components/texts";
import { IconEnterProject } from "@/components/icons";
import Button1 from "@/components/buttons/button.1/button1";

const SectionIndex = ():JSX.Element => {

    return<>
        <section className="w-screen h-screen ">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/9c873jul2twcko48" 
                    alt="Logo" 
                    priority={true}
                    quality={100}
                    fill={true}
                    
                />

                <div className="absolute container-lottie w-[96%] top-[14%]  bg-[#f8f8f8] rounded-[50%] p-[29px] min-w-[270px] min-h-[270px]">
                    <LottiePlayer
                        src="https://cms.aipus.co/aipus/assets/8l6ifs584a8skk8c"
                    />
                </div>

                <TextsIndex screen="mobile"/>

                <div className="absolute top-[98%]  container-button w-[100%] flex justify-end">
                    <Button1
                        text="Crear Proyecto"
                        icon={<IconEnterProject width="30" height="30" fill="#ffffff" />}
                        width="300px"
                        height="60px"
                        color="white"
                        background="#E20000"
                        fontSize="20px"
                    />
                </div>
               
            </div>

            <div className="container-desktop hidden md:flex w-[100%] h-[100%]">

                <div className="relative contenedor-1 w-[43%] h-[100%] flex items-center justify-end">

                    <div className="container-lottie w-[90%]   mt-[-50px]">
                        <LottiePlayer
                            src='https://cms.aipus.co/aipus/assets/8l6ifs584a8skk8c'
                        />
                    </div>

                    
                    <h1 className="w-[129%] absolute left-[50px] text-[18px] top-[86%] font-bold text-[#6C6C6C]">
                        Combinamos los  principios del <span className="text-[#D91600]">desarrollo de software </span> y el diseño
                        de <span className="text-[#D91600]"> productos digitales </span> con la <span className="text-[#D91600]"> inteligencia artificial </span>
                         para  construir <span className="text-[#D91600]"> apps, sitios web, software y sistemas a la medida</span>
                    </h1>

                </div>

                <div className="relative contenedor-2 w-[57%] h-[100%] ">
                    <Image
                        src="https://cms.aipus.co/aipus/assets/pauafjahptwkkogw" 
                        alt="Logo" 
                        priority={true}
                        quality={100}
                        fill={true}
                       
                    />
                    <TextsIndex screen="desktop"/>

                    <div className="absolute top-[85%]  container-button w-[90%] flex justify-end ml-[9%]">
                        <Button1
                            text="Crear Proyecto"
                            icon={<IconEnterProject width="30" height="30" fill="#ffffff" />}
                            width="250px"
                            height="60px"
                            color="white"
                            background="#E20000"
                            fontSize="22px"
                        />
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default SectionIndex;