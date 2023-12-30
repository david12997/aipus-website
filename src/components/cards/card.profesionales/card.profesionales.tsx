import Image from "next/image"

export type CardProfesionalesProps = {

    img:string,
    name:string,
    profesion:string,
    speciality:string,
    skills_1:string[],
    skills_2:string[]
}

const CardProfesionales = (props: CardProfesionalesProps) :JSX.Element=> {

    return<>
        <div className="ml-2 mr-4 flex card-profesional w-[470px] min-w-[470px] bg-white h-[196px] rounded-[9px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)]">
            <div className="container-img w-[40%] flex items-center justify-center p-2">
                <Image
                    src={props.img}
                    alt="Aliado profesional aipus" 
                    width={128} 
                    height={128}
                    className="object-contain max-w-[130px]"
                />
            </div>
            <div className="container-info w-[60%] p-2">
                <h1 className="text-[22px] font-bold text-black">
                    {props.name}
                </h1>
                <p className="text-[18px] text-[#6e6e6e] font-bold">{props.profesion}</p>
                <p className="text-[18px] text-[#6e6e6e] font-bold">{props.speciality}</p>
                <div className="skills-1 flex overflow-y-scroll">
                    {
                        props.skills_1.map((skill,index) => (
                            <div key={index} className="m-2 text-[14px] skill rounded-[50px] w-[100px] min-w-[100px] h-[30px] bg-[#4301E9] text-white flex items-center justify-center">{skill}</div>
                        ))
                    }
                </div>
                <div className="skills-2 flex overflow-y-scroll">
                    {
                        props.skills_2.map((skill,index) => (
                            <div key={index} className="m-2 text-[14px] skill rounded-[50px] w-[100px] min-w-[100px] h-[30px] bg-[#4301E9] text-white flex items-center justify-center">{skill}</div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    </>
}

export default CardProfesionales;