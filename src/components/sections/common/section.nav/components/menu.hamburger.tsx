'use client'

import Button2 from "@/components/buttons/button.2/button2";
import { IconArrowRight, IconHamburgerBars } from "@/components/icons";
import { RefObject, useEffect, useRef } from "react";
import ScreenMenu from "./screen.menu";

const MenuHamburger = ():JSX.Element => {

    const screenMenu = useRef<HTMLElement>(null);
 
    const toggleScreenMenu = (reference:RefObject<HTMLElement>):void => {

        reference.current?.classList.toggle('hidden');

    }

    useEffect(()=>{
        console.log(window.location.pathname);
    },[])

    return<>
        
        <ScreenMenu screenMenu={screenMenu} toggleScreenMenu={toggleScreenMenu}/>
       <div onClick={()=>toggleScreenMenu(screenMenu)} className="container-iconHamburguer cursor-pointer">
            <IconHamburgerBars width="45" height="45" fill="#4301E9"/>
        </div>
    </>
}

export default MenuHamburger;
