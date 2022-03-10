import { NextPage } from 'next';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useEffect, useRef, useState } from 'react';

interface PropTypes {
    htmlStr : string;
    setHtmlStr : React.Dispatch<React.SetStateAction<string>>;
}

const ToastUiEditor:NextPage<PropTypes> = ({htmlStr, setHtmlStr}) => {
    const editorRef = useRef<Editor>(null);

    //Editor change Event.
    const onChangeEditor = () => {
        if(editorRef.current) {
            setHtmlStr(editorRef.current.getInstance().getHTML());
        }
    }

    useEffect(() => {
        if(editorRef.current){
            // 전달받은 html값으로 초기화
            editorRef.current.getInstance().setHTML(htmlStr);
            //기존 이미지 업로드 기능 제거
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            //이미지 서버로 데이터를 전달하는 기능 추가
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
                return false;
            });
        }
    }, [])

    return (
        <>
            <Editor height='30rem'
                    initialValue='공유할 내용을 작성해보세요!'
                    initialEditType='wysiwyg'
                    useCommandShortcut={true}
                    previewStyle="vertical"
                    ref={editorRef}
                    onChange={onChangeEditor} />
        </>
    );
}

export default ToastUiEditor;