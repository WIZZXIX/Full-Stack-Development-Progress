import {useState} from 'react'; 

function SimpleForm() {
    const [name, setName] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`Hello, ${name}!`);
    }; 
    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border px-4 py-2 rounded"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SimpleForm; 