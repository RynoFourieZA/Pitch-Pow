import React, { useCallback, useEffect, useState } from 'react';
//CSS
import "quill/dist/quill.snow.css";
import "../../assets/css/textEditor.css";
//Socket.io Modules
import { io } from 'socket.io-client';
//Quill Modules
import Quill from 'quill';
const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered"}, {list: "bullet"}],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: []}],
    ["image", "blockquote", "code-block"],
    ["clean"]
];

export default function TextEditor() {
    //Connecting Client To Server
    const [ socket, setSocket ] = useState();
    const [quill, setQuill] = useState()

    useEffect(() => {
        const s = io("http://localhost:3001");
        setSocket(s)

        return () => {
            s.disconnect()
        }
    }, []);

    //Creating Our Rich Text Editor
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;

        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        const q = new Quill("#quillContainer", { 
            theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } 
        });

        setQuill(q);
    }, []);

    return (
        <div
            id="quillContainer"
            ref={wrapperRef}
        >
        </div>
    )
}