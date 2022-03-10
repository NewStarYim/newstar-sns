import { NextPage } from "next";
import { Search } from "./IconsSvg";

const SerachBox:NextPage = () => {
    return(
        <div className="flex w-full rounded-xl gap-5 justify-between bg-white px-2 py-3 shadow-md">
            <input className="text-left bg-white w-11/12 focus-visible:outline-none px-1" placeholder="제목, #해쉬태그, @멘션으로 검색해보세요." />
            <Search color="text-gray-600" size="6"/> 
        </div>
    );
}

export default SerachBox