import {useState} from 'react'

function Toggle() {
    const [visible, setVisible] = useState(true); 
    return (
        <div className="flex flex-col items-center mt-10">
            <button
                onClick={() => setVisible(!visible)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                {visible ? "Hide" : "Show"} Message
            </button>
            {visible && <p className="mt-4 text-lg">Hello! I am visible.</p>}
        </div>
    ); 
}

export default Toggle; 