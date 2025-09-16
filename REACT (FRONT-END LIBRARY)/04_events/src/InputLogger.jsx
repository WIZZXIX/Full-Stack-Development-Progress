function InputLogger() {
    const handleChange = (e) => {
        console.log("Typed:", e.target.value); 
    }; 
    return (
        <input
            type="text"
            placeholder="Type something..."
            onChange={handleChange}
            className="border px-3 py-2"
        />
    );
}

export default InputLogger;