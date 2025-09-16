function ButtonClick() {
    const handleClick = () => {
        alert("Button Clicked!");
    };
    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            Click Me
        </button>
    );
}

export default ButtonClick;