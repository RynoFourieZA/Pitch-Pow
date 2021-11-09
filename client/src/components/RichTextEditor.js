import React, { useCallback, useEffect, useState } from 'react';
//CSS
import "quill/dist/quill.snow.css";
import "../../src/assets/css/textEditor.css";
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

    //Creating Our Rich Text Editor
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;

        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        const q = new Quill("#quillContainer", { 
            theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } 
        });
    }, []);

    return (
        <div
            id="quillContainer"
            ref={wrapperRef}
        >
        </div>
    )
}