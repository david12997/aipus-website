import Image from "next/image"

const Work5 = ():JSX.Element => {

    return<>
        <section className="w-screen h-screen min-h-[930px] max-h-[930px]+ block md:hidden">
            <div className="relative container-mobile block md:hidden w-[100%] h-[100%]">
                <Image
                    src="https://cms.aipus.co/aipus/assets/9c873jul2twcko48" 
                    alt="Logo" 
                    priority={true}
                    quality={100}
                    fill={true}
                    
                />
                <div className="relative w-[100%] container-mobile- flex flex-wrap justify-center p-2">
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/7kodm1kd09og4oko" 
                        alt="Logo" 
                        width={1380}
                        height={1096}
                        className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
                    />
                    <Image
                        loading="lazy"
                        src="https://cms.aipus.co/aipus/assets/lz8hvc4q9n4cg0c4" 
                        alt="Logo" 
                        width={300}
                        height={580}
                        className="rounded-[16px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]  mt-[36px]"
                    />
                    
                </div>
            </div>


    </section>
    </>
}

export default Work5;