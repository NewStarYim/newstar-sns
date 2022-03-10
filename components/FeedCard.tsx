import { NextPage } from "next";
import ButtonPopover from "./ButtonPopover";
import ButtonWithIcons from "./ButtonWithIcons";
import { Chat, Share } from "./IconsSvg";

const FeedCard:NextPage = () => {
    return(
        <div className="bg-white grid auto-rows-max gap-3 p-5 shadow-md rounded-xl">
            <div className="flex gap-5">
                <div className="h-12 w-12 bg-gray-200  rounded-full"/>
                <div className="grid auto-cols-max gap-1">
                    <span className="text-md font-bold">스터디 하기 좋은 카페 추천좀 해주세요.</span>
                    <span className="text-xs text-gray-500">{`임새별 2022년 03월 01일 오전 09:10`}</span>
                </div>
            </div>
            <div className="py-5">
                <span className="text-sm">
                    요즘 집에서 공부하기엔 너무 집중이 안돼서 <br/>
                    카페가서 하고 싶은데 스터디할만 한 곳 있나요? 👀<br/>
                    이왕이면 커피도 맛있었으면 좋겠어요!<br/>
                </span>
            </div>
            <div>
                <hr className="border-gray-100 border-t-2"/>
                <div className="flex space-between my-0.5">
                    <ButtonPopover icon="" buttonName="11" position="start" />
                    <button className="bg-white flex gap-1 hover:bg-gray-200 rounded-lg w-full py-2 justify-center items-center">
                        <Chat color="text-gray-500" size="6" />
                        <span className="text-sm text-gray-500">대화하기</span>
                    </button>
                    <button className="bg-white flex gap-1 hover:bg-gray-200 rounded-lg w-full py-2 justify-center items-center">
                        <Share color="text-gray-500" size="6" />
                        <span className="text-sm text-gray-500">공유하기</span>
                    </button>
                </div>
                <hr className="border-gray-100 border-t-2" />
            </div>
        </div>
    );
}

export default FeedCard;