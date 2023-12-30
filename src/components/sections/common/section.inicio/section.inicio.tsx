import Image from "next/image"

export interface SectionInicioProps {
    img_mobile: string;
    img_desktop: string;
    alt: string;
    width_mobile: number;
    height_mobile: number;
    width_desktop: number;
    height_desktop: number;        
    
}

const SectionInicio = (props:SectionInicioProps):JSX.Element => {

    return<>
        <section className="w-[100%] pt-[70px] relative">
            <Image
                className="mobile block md:hidden max-h-[560px]"
                src={props.img_mobile} 
                alt={props.alt}
                width={props.width_mobile}
                height={props.height_mobile}
            />
            <Image
                className="desktop hidden md:block"
                src={props.img_desktop}
                alt={props.alt} 
                width={props.width_desktop} 
                height={props.height_desktop}
            />
        </section>

    </>
    
}

export default SectionInicio;