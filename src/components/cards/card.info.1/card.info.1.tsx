import Image from "next/image";

type CardInfo1Props = {
    img:string,
    title:string,
    description:string
    btn_text:string
}

const CardInfo1 = (props:CardInfo1Props):JSX.Element => {

    return<>
        <div className="relative m-2 card-info p-2 min-w-[300px] md:min-w-[490px] w-[300px] md:w-[490px] h-[330px] md:h-[290px] bg-white rounded-[9px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)]">
            <div className="title w-[90%] ml-[5%] flex items-center">
                <div className="icon w-[50px] h-[50px]">
                    <Image
                        src={props.img}
                        alt="Logo" 
                        width={300} 
                        height={300}
                        className="object-contain"
                    />
                </div>
                <h1 className="ml-4 text-[#4301E9] text-[18px] md:text-[20px] font-semibold">{props.title}</h1>
            </div>
            <div className="text w-[90%] ml-[5%] md:mt-4">
                <p className="text-[#6e6e6e] text-[18px] font-semibold">
                    {props.description}
                </p>
            </div>

            <div className="absolute bottom-[20px] button w-[90%] ml-[5%] mt-4  md:mt-10">
                <button className="bg-[#4301E9] text-white w-[96%] h-[50px] rounded-[6px] font-semibold">
                    {props.btn_text}
                </button>
            </div>
        </div>
    </>
}

export default CardInfo1;