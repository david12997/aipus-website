
type Button3Props = {
    title:string,
    color:string,
    background:string,
    
    
}

const Button3 = (props:Button3Props):JSX.Element => {

    return<>
        <div style={{background:props.background}} className="cursor-pointer p-4 m-2 button-work w-[250px] min-w-[200px] flex items-center  h-[60px] rounded-[50px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)] bg-white">
           <p style={{color:props.color}} className="truncate text-ellipsis max-w-[100%] text-[18px] font-semibold w-[90%] ml-[5%] text-center">{props.title}</p>
        </div>
    </>
}

export default Button3;