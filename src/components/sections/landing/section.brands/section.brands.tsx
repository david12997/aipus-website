import Image from "next/image";

const SectionBrands = ():JSX.Element => {

    return<>
        <section className="w-screen h-[370px] md:h-[290px] bg-[#4301E9] flex items-center">

            <div className="relative contenedor-brands w-screen h-[65%] md:h-[80%] bg-white ">
                
                <div className="absolute flex items-center justify-center title w-[100%] h-[50px]  top-[10px]">
                    <h2 className="text-[20px] md:text-[28px] font-normal text-[#6e6e6e]">Empresas que confían en nosotros</h2>
                </div>

                <div className="relative mt-9 flex overflow-x-hidden overflow-y-hidden">
                    <div className="py-12 animate-marquee whitespace-nowrap flex">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/rs1laschexcc4c0k" 
                            alt="logo runalotus" 
                            width={300}
                            height={100}
                            className="min-w-[390px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/agj5kqyy41s08sco" 
                            alt="Logo" 
                            width={300}
                            height={100}
                            className="min-w-[360px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/nhur9kdvrysocww4" 
                            alt="Logo" 
                            width={300}
                            height={100}
                            className="min-w-[360px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/cgt7m743uyo0w444" 
                            alt="Logo only" 
                            width={300}
                            height={100}
                            className="min-w-[300px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />

                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/anawbk1b5tkwscg4" 
                            alt="logo cominsur" 
                            width={300}
                            height={100}
                            className="min-w-[460px] min-h-[8px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/jxg8vc2s59w804gk" 
                            alt="Logo publimetro" 
                            width={300}
                            height={100}
                            className="min-w-[340px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                    </div>

                    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/rs1laschexcc4c0k" 
                            alt="Logo runalotus" 
                            width={300}
                            height={100}
                            className="min-w-[390px] min-h-[75px] max-h-[84px] ml-4 mr-4 "
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/agj5kqyy41s08sco" 
                            alt="Logo" 
                            width={300}
                            height={100}
                            className="min-w-[360px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/nhur9kdvrysocww4" 
                            alt="Logo" 
                            width={300}
                            height={100}
                            className="min-w-[360px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/cgt7m743uyo0w444" 
                            alt="Logo" 
                            width={300}
                            height={100}
                            className="min-w-[360px] min-h-[75px] max-h-[84px] ml-4 mr-4"
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/jxg8vc2s59w804gk" 
                            alt="Logo" 
                            width={300}
                            height={100}
                            className="min-w-[360px] min-h-[75px] max-h-[84px] ml-4 mr-4 "
                        />
                        <Image
                            loading="lazy"
                            src="https://cms.aipus.co/aipus/assets/anawbk1b5tkwscg4" 
                            alt="logo cominsur" 
                            width={400}
                            height={100}
                            className="min-w-[460px] min-h-[8px] ml-4 mr-4 "
                        />
                    </div>
                </div>

            </div>
        </section>
    </>
}

export default SectionBrands;