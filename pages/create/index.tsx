import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "../../components/IconsSvg";

const ToastUiEditor = dynamic(
    () => import('../../components/ToastUiEditor'),
    { ssr : false }
);


const Create:NextPage = () => {

    const [htmlStr, setHtmlStr] = useState<string>('');
    const viewContainerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const backToGroup = () => {
        router.push('/group');
    }

    useEffect(() => {
        if(viewContainerRef.current){
            viewContainerRef.current.innerHTML = "<h2> htmlCode Test View </h2>";
            viewContainerRef.current.innerHTML += htmlStr;
        }
    }, [htmlStr]);

    return(
        <div className="relative grid auto-rows-max py-3 px-3 gap-5 ">
            <div>
                <button onClick={backToGroup} className="rounded-full items-center hover:bg-gray-200 p-3">
                    <ArrowLeft color="text-gray-500" size="6"/>
                </button>
            </div>
            <div className="relative grid auto-rows-max gap-5 w-full">
                <select className="w-auto lg:w-2/4 text-2xl font-semibold  py-3 text-gray-400 focus:outline-none">
                    <option className="bg-white p-1" selected>그룹을 선택하세요.</option>
                    <option className="bg-white p-1" >그룹1</option>
                    <option className="bg-white p-1" >그룹2</option>
                    <option className="bg-white p-1" >그룹3</option>
                </select>
                <input className="w-full py-3 focus:outline-none border-b-4 border-gray-500 text-2xl text-gray-500 font-semibold" placeholder="제목을 입력하세요."/>
                <div className="overflow-y-auto">
                    <ToastUiEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-start gap-5 items-center">
                        <span className="text-gray-500"> 보존기간 </span>
                        <select className="focus:outline-none border-2 rounded-lg p-1">
                            <option>1년</option>
                            <option>3년</option>
                            <option>5년</option>
                            <option>영구</option>
                        </select>
                    </div>
                    <button className="focus:outline-none border-2 rounded-lg p-1 bg-white">
                        <span className="">게시하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Create;