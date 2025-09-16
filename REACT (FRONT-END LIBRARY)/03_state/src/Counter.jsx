import {useState} from 'react'; 

function Counter() {
    const [count, setCount] = useState(0); 
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold">Counter: {count}</h1>
            <div className="flex gap-4 mt-4">
                <button
                    onClick= {() => setCount(count + 1)}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Increment
                </button>
                <button
                    onClick = {() => setCount(count - 1)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Decrement
                </button>
                <button
                    onClick = {() => setCount(0)}
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter; 