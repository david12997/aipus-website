import Image from "next/image"


export type CardCheck1Props = {
    title:string,
    description:string,
    icon:string

}
const CardCheck1 =  (props:CardCheck1Props):JSX.Element=>{

    return<>
        <div className="cursor-pointer w-[360px] min-w-[360px] h-[136px] bg-white rounded-[9px] flex p-2 m-2 shadow-[0px_0px_6px_rgba(0,0,0,0.2)]">

            <div className="container-1 w-[120px] flex items-center justify-center">
                <Image
                    src={props.icon}
                    alt="icono idioma" 
                    width={100} 
                    height={100}
                    />
            </div>
            <div className="container-2 w-[260px]">

                <h2 className="text-[18px] font-bold">{props.title}</h2>
                <p className="text-[#6e6e6e] text-[17px] font-semibold">{props.description}</p>

            </div>
        </div>
    </>
}

export default CardCheck1;