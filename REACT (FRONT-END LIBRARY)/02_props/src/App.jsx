import ProductCard from "./ProductCard"
import './index.css'
function App() {
    const products = [
        { name: "Laptop", price: 55000, image: "https://cdn.pixabay.com/photo/2016/11/21/15/46/computer-1846056_1280.jpg" },
        { name: "Phone", price: 25000, image: "https://cdn.pixabay.com/photo/2016/11/22/23/40/hands-1851218_1280.jpg" },
        { name: "Headphones", price: 2000, image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_1280.jpg" },
    ]

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((p, index) => (
                <ProductCard key={index} name={p.name} price={p.price} image={p.image} />
                ))}
            </div>
        </div>
    )
}

export default App