import {useState} from 'react'

function TextInput() {
    const [text, setText] = useState(""); 

    return (
        <div className="flex flex-col items-center mt-10">
            <input
                type="text"
                placeholder="Type something..."
                className="border px-4 py-2 rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p className="mt-4 text-lg">You typed: {text}</p>
        </div>
    );
}

export default TextInput;