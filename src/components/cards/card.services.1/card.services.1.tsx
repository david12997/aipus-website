'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export type CardServices1Props = {
    img:string;
    name:string;
    link?:string;

}

const CardServices1 = (props:CardServices1Props):JSX.Element => {

    const router = useRouter();

    return<>
        <div onClick={()=>props.link !== undefined && router.push(props.link) } className="ml-4 mr-4 relative Card min-w-[290px] w-[230px] h-[230px]  2xl:min-w-[400px] 2xl:h-[330px] bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.2)] rounded-[9px] flex items-center justify-center">
            <div className="relative  mt-[-60px] w-[50%] h-[60%] flex justify-center items-center">
                <Image
                    src={props.img}
                    alt="Logo" 
                    width={200}
                    height={200}                
                />
            </div>
            <h3 className="absolute top-[72%] font-bold w-[90%] ml-[3%] flex items-center justify-center text-center text-[18px] 2xl:text-[20px]">
                {props.name}
            </h3>
        </div>
    </>
}

export default CardServices1;