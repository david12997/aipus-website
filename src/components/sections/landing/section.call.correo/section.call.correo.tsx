import Image from "next/image"


const SectionCallCorreo = ():JSX.Element => {

    return<>
        <section className="w-screen h-screen min-h-[750px] max-h-[770px] md:min-h-[690px]">
            <div className="relative mobile block md:hidden w-[100%] h-[100%] pt-[20px]">
                <Image
                    loading="lazy"
                    src="https://cms.aipus.co/aipus/assets/bc9u7c1tscg0gsc8" 
                    alt="Logo" 
                    quality={100}
                    fill={true}
                    
                />

                <div className="text relative w-[90%] ml-[5%] text-center mt-[45px]">
                    <h1 className="text-[33px] font-extrabold text-white">CREA <span className="bg-[#d90100] pl-4 pr-4">SOLUCIONES DE SOFTWARE</span> SOLIDAS AGILES Y ADAPTABLES A LAS NECESIDADES DE TU NEGOCIO</h1>
                </div>

                <div className=" form-crear relative w-[90%] ml-[5%] mt-[20px]  h-[130px] border border-white flex flex-wrap p-2 bg-white justify-center rounded-[9px]">
                    
                    <input className="w-[90%] h-[50%] bg-white text-black text-[26px] font-bold" type="text" placeholder=" Ingresa tu correo electronico"/>
                    <button className="w-[90%] h-[50%] bg-[#d90100] text-white text-[22px] font-bold rounded-[6px]">
                        CREAR PROYECTO
                    </button>
                
                </div>  

            </div>

            <div className=" relative desktop hidden md:block w-[100%] h-[100%] ">
                <Image
                    loading="lazy"
                    src="https://cms.aipus.co/aipus/assets/bc9u7c1tscg0gsc8" 
                    alt="Logo" 
                    quality={100}
                    fill={true}
                    
                />

                <div className="text relative w-[70%] ml-[15%] text-center top-[56px] ">
                    <h1 className="text-[40px] font-extrabold text-white">CREA <span className="bg-[#d90100] pl-4 pr-4">SOLUCIONES DE SOFTWARE</span> SOLIDAS AGILES Y ADAPTABLES A LAS NECESIDADES DE TU NEGOCIO</h1>
                </div>

                <div className=" form-crear relative w-[60%] ml-[20%] mt-[100px]  h-[80px] border border-white flex items-center p-2 bg-white justify-center rounded-[9px]">
                    
                    <input className="w-[65%] h-[100%] bg-white text-black text-[26px] font-bold" type="text" placeholder=" Ingresa tu correo electronico"/>
                    <button className="w-[35%] h-[100%] bg-[#d90100] text-white text-[22px] font-bold rounded-[6px]">
                        CREAR PROYECTO
                    </button>
                
                </div>  


            </div>
        </section>
    </>
}

export default SectionCallCorreo