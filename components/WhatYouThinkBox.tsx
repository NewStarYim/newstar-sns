import { NextPage } from "next";
import { useRouter } from "next/router";

const WhatYouThinkBox:NextPage = () => {
    const router = useRouter();
    const goToCreate = () => {
        router.push('/create');
    }
    return(
        <div className="flex w-full rounded-xl gap-4 bg-white px-4 py-3 shadow-md items-center">
            <div className="h-11 w-11 bg-gray-200  rounded-full"/>
            <button onClick={goToCreate} className="text-left bg-gray-100 w-11/12 focus-visible:outline-none py-2 px-3 items-center rounded-md hover:bg-gray-200">
                <span className="text-sm font-semibold">{"임새별님, 무슨 생각을 하고 계신가요?"}</span>
            </button>
        </div>
    )
}

export default WhatYouThinkBox;