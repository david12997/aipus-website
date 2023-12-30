'use client'

type PropsButton1 ={
    text:string
    icon:JSX.Element
    width:string
    height:string
    color:string
    background:string,
    fontSize:string
}

const Button1 = (props:PropsButton1):JSX.Element => {

    const styleButton = {
        width: props.width,
        height: props.height,
        color: props.color,
        background: props.background,
        fontSize: props.fontSize
    }

    return<>
        <button style={styleButton} className="flex items-center justify-center mr-6 font-bold  rounded-[9px]">
            {props.text} {props.icon}
        </button>
    </>
}

export default Button1;