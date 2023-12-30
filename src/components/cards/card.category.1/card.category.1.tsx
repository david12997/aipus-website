'use client'
import Image from "next/image"
import { useRouter } from "next/navigation";

export interface CardCategory1Props {
    img: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    description: JSX.Element;
    link?: string;

}

const CardCategory1 = (props:CardCategory1Props):JSX.Element => {

    const router= useRouter();

    return<>
        <div onClick={()=>props.link !== undefined && router.push(props.link)} className=" cursor-pointer card-category min-w-[300px] md:min-w-[360px]  min-h-[390px] md:min-h-[420px] max-w-[390px] max-h-[460px]  bg-white rounded-[9px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)] flex mt-6 mb-6 ml-2 mr-2 flex-col">
            <div className="container-img flex justify-center items-center">
                <Image
                    src={props.img}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                />
            </div>
            <div className="container-desc mt-2 mb-2 md:ml-6 md:mt-6">
                <h1 className="text-[#00000] font-extrabold text-[18px] md:text-[25px] w-[90%] ml-[5%] md:ml-0">{props.title} </h1>
                <div className="text-[#6e6e6e] font-semibold text-[16px] md:text-[18px] mt-2 p-2">{props.description}</div>
            </div>
        </div>
    </>
}

export default CardCategory1;