import { NextPage } from "next";
import ButtonWithIcons from "../../components/ButtonWithIcons";
import FeedCard from "../../components/FeedCard";
import { AtSymbol, BookmarkFill, Spark, Speaker } from "../../components/IconsSvg";
import SerachBox from "../../components/SearchBox";
import WhatYouThinkBox from "../../components/WhatYouThinkBox";
const Group:NextPage = () => {
    return (
        <div className="flex justify-start bg-gray-100">
            {/* side navi */}
            <div className="hidden lg:grid auto-rows-max w-1/4 border-x-2 border-x-white items-center py-5 px-5 gap-5">
                <span className="text-2xl font-bold">NEW STAR</span>
                <ButtonWithIcons icon={<Speaker color="text-blue-600" size="6"/>} buttonName="전체글 보기"  position="start"/>
                <ButtonWithIcons icon={<AtSymbol color="text-violet-500" size="6"/>} buttonName="멘션 보기"  position="start"/>
                <ButtonWithIcons icon={<Spark color="text-amber-500" size="6"/>} buttonName="인기글 보기"  position="start"/>
                <span className="text-2xl font-bold">MY GROUP</span>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
                <ButtonWithIcons icon={<BookmarkFill color="text-rose-300" size="6"/>} buttonName="그룹명"  position="start"/>
            </div>
            {/* feed content */}
            <div className="flex flex-col gap-7 w-full lg:w-6/12 py-5 lg:px-5 scrollbar-hide">
                <SerachBox/>
                <WhatYouThinkBox />
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
            </div>
        </div>
    );
}

export default Group;