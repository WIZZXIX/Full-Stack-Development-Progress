function ProductCard({name, price, image}) {
    return (
        <div className="max-w-xs bg-gray shadow-md rounded-xl p-4 text-center">
            <img src={image} alt={name} className="w-30 h-30 mx-auto"/>
            <h2 className="text-lg font-bold mt-2">{name}</h2>
            <p className="text-gray-600">${price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Buy Now</button>
        </div>
    )
}

export default ProductCard