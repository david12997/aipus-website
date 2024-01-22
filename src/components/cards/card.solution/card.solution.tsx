'use client';

import Button2 from "@/components/buttons/button.2/button2"
import { useRouter } from "next/navigation";

type CardSolutionsProps = {

    discont: boolean;
    name: string;
    price: string;
    color: string;
    detalles:JSX.Element[];
    
}

const CardSolutions = (props:CardSolutionsProps):JSX.Element =>{

    const router = useRouter();

    return<>
        <div className="card-planes min-w-[320px] w-[330px] min-h-[600px] bg-white rounded-[9px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)] m-4 md:m-10">

            <div className={`${!props.discont && 'invisible' } promo bg-[#e20000] w-[100%] h-[40px] p-2  rounded-t-[9px] flex items-center justify-center`}>
                <h3 className="text-white font-extrabold text-[18px]">MÁS VENDIDO</h3>
            </div>

            <div className="name-plan w-[100%] h-[45px] flex items-center justify-center">
                <h2 style={{color:props.color}} className="font-bold text-[26px] text-[#4200e8]">{props.name}</h2>
            </div>

            <div className="price-plan w-[100%] h-[45px] flex items-ccenter justify-center">
                <h1 className="text-[30px] font-bold  ">{props.price}</h1>
            </div>

            <div className="mensual w-[100%] h-[30px] flex items-center justify-center">
                <p className="bg-[#dfdfdf] text-[#6e6e6e] pl-2 pr-2 rounded-[9px] text-[17px] font-semibold">Pago único</p>
            </div>

            <div className="btn w-[100%] h-[60px] p-2 flex items-center justify-center mt-4">
                <Button2
                    background={props.color}
                    text="Cotizar proyecto "
                    color="white"
                    width="100%"
                    height="50px"
                    fontSize="20px"
                    link={"https://aipus.fillout.com/cotizar-proyecto?type="+props.name}
                />
            </div>

            <div className="container-equipo-dedicado w-[98%] ml-[1%] p-2">
                
                <h1 className="text-[20px] font-bold mt-2">Descripción del proyecto </h1>
                <h1 style={{color:props.color}} className="text-[#4200e8] font-bold mb-2"> Detalles y caracteristicas</h1>
               <div>
                     {props.detalles.map((item,index)=>(
                        <span key={index}>
                            {item}
                        </span>
                          
                     ))}
               </div>
                
            </div>

            



        </div>
    </>
}

export default CardSolutions;