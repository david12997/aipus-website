import Image from "next/image"

const CardCalendar = (props:{img:string,title:string,text:string}):JSX.Element => {

    return<>
        <div className="card w-[350px] h-[350px] relative mt-[30px] mb-[30px] md:mt-2 md:mb-2">

            <div className="img-card absolute w-[65%] left-[17%] h-[65%] top-[-9%]">
                <Image
                    loading="lazy"
                    src={props.img}
                    alt="Logo" 
                    width={400}
                    height={400}
                />
            </div>

            <div className="container-text bg-white w-[100%] h-[90%] mt-[10%] rounded-[9px] shadow-[2px_2px_7px_rgba(0,0,0,0.4)] ">
                <h3 className="relative  text-[26px] font-bold text-black text-center top-[50%]">
                    {props.title}
                </h3>
                <p className="text-[#6e6e6e] text-[16px] font-semibold text-center top-[55%] relative pl-1 pr-1 ml-2 mr-2">
                    {props.text}
                </p>
            </div>

        </div>
    </>
}

export default CardCalendar