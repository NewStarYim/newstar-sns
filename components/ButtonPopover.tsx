import { NextPage } from "next";
import { useState } from "react";
import { Cake, Heart } from "./IconsSvg";

interface propTypes {
    icon : any;
    position : string;
    buttonName : string;
}

const ButtonPopover:NextPage<propTypes> = ({icon, buttonName}) => {
    
    const [popoverShow, setPopoverShow] = useState(false);
    const handlePopover = () => {
        setPopoverShow(!popoverShow);
    }

    return(
        <>
            <div className="flex flex-wrap w-full">
                <div className="relative w-full">
                    <div className={ 
                    (popoverShow ? 
                    "absolute animate-bounce temporary-bounce z-10 -top-16 rounded-2xl bg-white border-2 border-gray-200 mb-3 block font-noral leading-normal text-sm max-w-xs text-left no-underline break-words" 
                    : "hidden")}>
                        <div>
                            <div className="p-3 flex gap-5 items-center">
                                <Cake color="text-violet-400" size="6" />
                                <Cake color="text-violet-400" size="6" />
                                <Cake color="text-violet-400" size="6" />
                                <Cake color="text-violet-400" size="6" />
                                <Cake color="text-violet-400" size="6" />
                            </div>
                        </div>
                    </div>
                    <button className="bg-white flex gap-1 hover:bg-gray-200 rounded-lg w-full py-2 justify-center items-center" onClick={handlePopover}> 
                        <Heart color="text-gray-500" size="6" />
                        <span className="text-sm text-gray-500">공감하기</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ButtonPopover;