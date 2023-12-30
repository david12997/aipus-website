'use client'
import CardPalnes from "./components/card.planes";
import useSectionPlanes from "@/hooks/use.drag.plans";

const SectionPlanes = ():JSX.Element => {

    const {
        isDragging,
        scrollContainerRef,
        scrollMobileContainerRef,
        startDragging,
        stopDragging,
        onDrag,
        handleScroll,
        scrollToChild,
        activeIndex,
        childrenWidth
    } = useSectionPlanes();


    return<>
        <section  className="mobile  w-screen min-h-[500px] p-4 md:p-6  block md:hidden">
            <h1 className="title--planes w-[96%] ml-[2%] h-[50px] font-bold text-[36px] flex items-center mb-8 mt-8">
                <span className="pl-1 pr-1  text-black">ELIGE TU PLAN</span>
            </h1>
            <p className="w-[96%] ml-[2%]  mt-[-20px] mb-[20px] text-[#6e6e6e] text-[18px] font-semibold"> 
            Equipos de desarrollo: talento de clase mundial a su alcance, 
                soluciones innovadoras a medida. Le permitimos acceder a 
                talento especializado y diverso, reducir costos operativos 
                y enfocarse en el núcleo de su negocio.  
            </p>

            <div className="circles w-[96%] ml-[2%]">
                <div className="flex justify-center space-x-4 mb-4">
                {childrenWidth.map((_, index) => (
                    <button 
                        key={index} 
                        className={`w-8 h-8 rounded-full ${index === activeIndex ? 'bg-[#e20000]' : 'bg-[#4200e8]'}`} 
                        onClick={() => scrollToChild(index)} 
                    />
                ))}
                </div>
            </div>

            <div  ref={scrollMobileContainerRef}
                onScroll={handleScroll}
                className="container-cards w-[100%]  flex overflow-auto cursor-grab justify-between snap-mandatory snap-x">
                <CardPalnes
                    color="#4200e8"
                    plan="PLAN EXPERT"
                    price="$ 12.900.000 COP"
                    discont={false}
                    equipo_dedicado={{
                        perfiles:3,
                        perfiles_name:["1 Diseñador UX/UI","1 Desarrollador fullStack","1 Analista de software"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                <CardPalnes
                    color="#e20000"
                    plan="PLAN PREMIUM"
                    price="$ 17.900.000 COP"
                    discont={true}
                    equipo_dedicado={{
                        perfiles:4,
                        perfiles_name:["1 Diseñador UX/UI","2 Desarrollador fullStack","1 Analista de software"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                <CardPalnes
                    color="#4200e8"
                    plan="PLAN ELITE"
                    price="$ 25.000.000 COP"
                    discont={false}
                    equipo_dedicado={{
                        perfiles:6,
                        perfiles_name:["2 Diseñador UX/UI","2 Desarrollador fullStack","1 Analista de software","1 Asesor Soporte Tecnico"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                <CardPalnes
                    color="#4200e8"
                    plan="PLAN ENTERPRISE"
                    price="CONSULTAR PR COPECIO"
                    discont={false}
                    equipo_dedicado={{
                        perfiles:3,
                        perfiles_name:["Diseñador UX/UI","Desarrollador fullStack","Analista de software"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                
            </div>


        </section>
        
        <section className="desktop w-screen min-h-[500px] p-6  hidden md:block 2xl:w-[80%] 2xl:ml-[9%]">

            <h1 className="title--planes w-[96%] ml-[2%] h-[50px] font-bold text-[45px] flex items-center mb-8 mt-8">
                <span className="pl-1 pr-1  text-black">ELIGE TU PLAN</span>
            </h1>
            <p className="w-[39%] ml-[2%]  mt-[-20px] mb-[25px] text-[#6e6e6e] text-[18px] font-semibold"> 
                Talento de clase mundial a su alcance, 
                soluciones innovadoras a medida. Le permitimos acceder a 
                talento especializado y diverso, reducir costos operativos 
                y enfocarse en el núcleo de su negocio.
            </p>

            <div ref={scrollContainerRef}
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={onDrag}
                className={`flex overflow-auto ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
            >
                               <CardPalnes
                    color="#4200e8"
                    plan="PLAN EXPERT"
                    price="$ 12.900.000 COP"
                    discont={false}
                    equipo_dedicado={{
                        perfiles:3,
                        perfiles_name:["1 Diseñador UX/UI","1 Desarrollador fullStack","1 Analista de software"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                <CardPalnes
                    color="#e20000"
                    plan="PLAN PREMIUM"
                    price="$ 17.900.000 COP"
                    discont={true}
                    equipo_dedicado={{
                        perfiles:4,
                        perfiles_name:["1 Diseñador UX/UI","2 Desarrollador fullStack","1 Analista de software"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                <CardPalnes
                    color="#4200e8"
                    plan="PLAN ELITE"
                    price="$ 25.000.000 COP"
                    discont={false}
                    equipo_dedicado={{
                        perfiles:6,
                        perfiles_name:["2 Diseñador UX/UI","2 Desarrollador fullStack","1 Analista de software","1 Asesor Soporte Tecnico"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                <CardPalnes
                    color="#4200e8"
                    plan="PLAN ENTERPRISE"
                    price="CONSULTAR PRECIO"
                    discont={false}
                    equipo_dedicado={{
                        perfiles:3,
                        perfiles_name:["Diseñador UX/UI","Desarrollador fullStack","Analista de software"]
                        
                    }}
                    equipo_sobre_demanda={{
                        perfiles:4,
                        perfiles_name:["1 Analista QA","1 Project Manager","1 Arquitecto de software","1 Ingeniero DevOps"]
                        
                        
                    }}
                />
                
                
            </div>


            
        </section>
    </>
}

export default SectionPlanes;