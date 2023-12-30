import Image from "next/image";

type CardBrand1Props = {
 img:string;
}

const CardBrand1 : React.FC<CardBrand1Props> = (props) => {

    return<>
        <div className="card-brand-1 m-2 p-4 shadow-[0px_0px_6px_rgba(0,0,0,0.2)] w-[150px] h-[60px] bg-white rounded-[9px] flex items-center justify-center">
            <Image
                src={props.img}
                alt="Picture of the author"
                width={150}
                height={60}
                className="object-contain"
            />
        </div>
    </>
}

export default CardBrand1;