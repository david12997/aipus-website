import Button3 from "@/components/buttons/button.3/button.3"
import Image from "next/image"

export type CardPortafolioProps = {
    title:string,
    img:string,

}
const CardPortafolio = (props:CardPortafolioProps):JSX.Element=>{

    return<>
        <div className="card-portafolio w-[300px] md:w-[390px] 2xl:w-[500] m-2 md:m-4">
            <div className="container-img w-[290px] ml-[5px] md:w-[380px]  2xl:w-[490]">
                <Image
                    src={props.img}
                    alt="Picture of the author"
                    width={490}
                    height={490}
                    className="rounded-[10px] object-cover"
                />
            </div>
            <div className="name p-2">
                <p className="w-[300px] truncate text-[18px] mt-2 md:text-[20px] font-semibold">{props.title}</p>
                <div className="container-buttons flex  overflow-x-scroll max-h-[100px] relative mt-2">
                    <Button3
                        title="Prototype"
                        color="black"
                        background="white"
                    />
                    <Button3
                        title="Branding"
                        color="black"
                        background="white"
                    />
                    <Button3
                        title="UX Experience"
                        color="black"
                        background="white"
                    />
                    <Button3
                        title="UI Desing"
                        color="black"
                        background="white"
                    />
                </div>
            </div>

        </div>
    </>
}

export default CardPortafolio;