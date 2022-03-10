import { NextPage } from "next";

interface PropTypes {
    text:string;
}

const Chips:NextPage<PropTypes> = ({text}) => {
    return(
        <div className="border-2 border-gray-300 rounded-full bg-white px-3 py-1 text-center items-center">
            <span className="text-sm font-semibold">{text}</span>
        </div>
    );
}

export default Chips;