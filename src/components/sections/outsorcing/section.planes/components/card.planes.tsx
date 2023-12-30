import Button2 from "@/components/buttons/button.2/button2"

type CardPalnesProps = {

    discont: boolean;
    plan: string;
    price: string;
    color: string;
    equipo_dedicado:{
        perfiles:number;
        perfiles_name:string[];
    };
    equipo_sobre_demanda:{
        perfiles:number;
        perfiles_name:string[];
    };
    
}

const CardPalnes = (props:CardPalnesProps):JSX.Element =>{

    return<>
        <div className="card-planes min-w-[320px] w-[330px] min-h-[600px] bg-white rounded-[9px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)] m-4">

            <div className={`${!props.discont && 'invisible' } promo bg-[#e20000] w-[100%] h-[40px] p-2  rounded-t-[9px] flex items-center justify-center`}>
                <h3 className="text-white font-extrabold text-[18px]">MÁS VENDIDO</h3>
            </div>

            <div className="name-plan w-[100%] h-[45px] flex items-center justify-center">
                <h2 style={{color:props.color}} className="font-bold text-[26px] text-[#4200e8]">{props.plan}</h2>
            </div>

            <div className="price-plan w-[100%] h-[45px] flex items-ccenter justify-center">
                <h1 className="text-[30px] font-bold  ">{props.price}</h1>
            </div>

            <div className="mensual w-[100%] h-[30px] flex items-center justify-center">
                <p className="bg-[#dfdfdf] text-[#6e6e6e] pl-2 pr-2 rounded-[9px] text-[17px] font-semibold">Mensual</p>
            </div>

            <div className="btn w-[100%] h-[60px] p-2 flex items-center justify-center mt-4">
                <Button2
                    background={props.color}
                    text="Seleccionar"
                    color="white"
                    width="100%"
                    height="50px"
                    fontSize="20px"
                />
            </div>
            <div className="message w-[94%] ml-[3%] p-2" >
                <p className="text-[#6e6e6e] font-normal tex-[16px]">En promedio un proyecto nuevo puede tardar entre 3 y 6 meses</p>
            </div>

            <div className="container-equipo-dedicado w-[98%] ml-[1%] p-2">
                
                <h1 className="text-[20px] font-bold mt-2">Tu equipo dedicado </h1>
                <h1 style={{color:props.color}} className="text-[#4200e8] font-bold mb-2">{props.equipo_dedicado.perfiles} perfiles</h1>
                {
                    props.equipo_dedicado.perfiles_name.map((perfil:string,index:number)=>{

                        return <h2 key={index} className="text-[18px] font-normal text-[#6e6e6e]">{perfil}</h2>
                    
                    })
                }
                
            </div>

            <div className="container-equipo-dedicado w-[98%] ml-[1%] p-2">
                
                <h1 className="text-[20px] font-bold mt-2">Tu equipo sobre demanda </h1>
                <h1 style={{color:props.color}} className="text-[#4200e8] font-bold mb-2">{props.equipo_sobre_demanda.perfiles} perfiles</h1>
                {
                    props.equipo_sobre_demanda.perfiles_name.map((perfil:string,index:number)=>{
                        return <h2 key={index} className="text-[18px] font-normal text-[#6e6e6e]">{perfil}</h2>
                    
                    })
                }

                
            </div>

            <div className="planes-terms w-[98%] ml-[1%] p-2 mt-4">
                <h5 className="text-[16px] font-normal text-[#6e6e6e] pt-2"><span className="text-black font-bold">Equipo dedicado </span>trabaja exclusivamente en tu proyecto</h5>
                <h5 className="text-[16px] font-normal text-[#6e6e6e] pt-2"><span className="text-black font-bold">Equipo sobre demanda </span>trabaja en tu proyecto por horas, hasta 60 horas al mes </h5>
            </div>



        </div>
    </>
}

export default CardPalnes;