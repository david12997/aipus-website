'use client';

import Button2 from "@/components/buttons/button.2/button2"

type CardVpsProps = {

    discont: boolean;
    plan: string;
    price: string;
    color: string;
    cpu:string;
    ram:string;
    ssd:string;
    anchodeBanda:string;
    aconvenir:boolean;
   
    
}

const CardVps = (props:CardVpsProps):JSX.Element =>{

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
                    text="Ver Solución"
                    color="white"
                    width="100%"
                    height="50px"
                    fontSize="20px"
                />
            </div>

            <div className="w-[90%] ml-[5%]">
                <small className="text-[#6e6e6e] text-[14px] font-semibold text-center">
                Servidor VPS preconfigurado para crear apis y administrar bases de datos de manera visual 
                a partir de soluciones open source headless cms
                </small>
            </div>

            
            
            <div className="w-[94%] ml-[3%] p-2 text-[#6e6e6e]" >
            
                
                <li>Acceso <strong className="text-black">root</strong> al servidor</li>
                <li><strong className="text-black">{props.cpu}</strong> CPU</li>
                <li><strong className="text-black">{props.ram}</strong> RAM</li>
                <li><strong className="text-black">{props.ssd}</strong> SSD</li>
                <li><strong className="text-black">1 IP</strong> dedicada</li>
                <li><strong className="text-black">{props.anchodeBanda}</strong> Ancho de Banda </li>
                <li><strong className="text-black">Linux</strong> Ubuntu 22.04 LTS </li>

            </div>
            

            {
                !props.aconvenir 
                &&
                <div className="message w-[94%] ml-[3%] p-2" >

                    <div className="text-[#6e6e6e] font-normal tex-[16px] ">
                        <li className="mt-4 mb-2"> Servidor <strong className="text-black">recursos dedicados</strong> </li>
                        <li className="mt-4 mb-2"> Servidor <strong className="text-black">nginx</strong> configurado </li>
                        <li className="mt-4 mb-2"> <strong className="text-black">Arquitectura</strong> de  contenedores<strong className="text-black"> docker</strong> escalable  y mantenible </li>
                        <li className="mt-4 mb-2"> <strong className="text-black">MySQL </strong>  - phpMyAdmin</li>
                        <li className="mt-4 mb-2"><strong className="text-black">Headless CMS</strong> para gestionar bases de datos  y crear apis</li>
                        <li className="mt-4 mb-2"><strong className="text-black">API</strong> para consumir contenido desde cualquier aplicacion</li>
                        <li className="mt-4 mb-2"><strong className="text-black">SSL</strong> automatizado</li>
                    </div>
                
                </div>

            }
            
            

        

       

        </div>
    </>
}

export default CardVps;