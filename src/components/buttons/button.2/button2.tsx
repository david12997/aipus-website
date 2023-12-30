'use client'

import { useRouter } from "next/navigation"

type PropsButton2 ={
    text:string
    width:string
    height:string
    color:string
    background:string,
    fontSize:string
    link?:string
}

const Button2 = (props:PropsButton2):JSX.Element => {

    const router = useRouter();

    const styleButton = {
        width: props.width,
        height: props.height,
        color: props.color,
        background: props.background,
        fontSize: props.fontSize
    }

    return<>
        <button onClick={()=> props.link !== undefined && router.push(props.link)} style={styleButton} className="button rounded-[6px] font-bold ">
           {props.text}
        </button>
    </>
}

export default Button2;