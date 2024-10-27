'use client';
import 'react-quill/dist/quill.snow.css';

import React, { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';

export default function TextEditor() {
    const [value, setValue] = useState('');

    const modules = useMemo(() => {
        return {
            toolbar: {
                // ...
            },
        };
    }, []);

    return (
        <div className="bg-white relative">
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={(e) => setValue(e)}
                placeholder="Write your comment here"
            />
            <button className="px-4 py-1.5 bg-theme-primary absolute right-4 bottom-1 rounded text-white">
                Send
            </button>
        </div>
    );
}
