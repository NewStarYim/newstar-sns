import { NextPage } from "next";

interface propTypes {
    icon : any;
    position : string;
    buttonName : string;
}

const ButtonWithIcons:NextPage<propTypes> = ({icon, buttonName}) => {
    return(
        <button className="bg-gray-100 hover:bg-white text-left rounded-lg px-2 py-2 inline-flex items-center gap-2">
            {icon}
            <span className="text-sm font-semibold"> {buttonName} </span>
        </button>
    )
}

export default ButtonWithIcons;