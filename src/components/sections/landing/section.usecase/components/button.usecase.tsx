import Image from "next/image"

const ButtonUseCase = (props:{icon:string,text:string}):JSX.Element =>{

    return<>
        <button className="mt-4 mb-4 w-[90%] ml-[5%] rounded-[9px] h-[69px] bloxk bg-[#e6e6e6] text-[#6e6e6e] flex items-center justify-center">

            <Image
                src={props.icon}
                alt="Logo" 
                width={50}
                height={50}

            />
            <p className="ml-1 text-[20px] font-semibold">{props.text}</p>
        </button>
    </>
}

export default ButtonUseCase;