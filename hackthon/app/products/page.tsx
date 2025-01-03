import Link from "next/link";
import Image from "next/image";
const NewArrivals = () => {
    const products = [
      {
        id: 1,
        name: "T-shirt with Tape Details",
        price: "$120",
        image: "/shirt.png",
        rating: "4.5/5",
      },
      {
        id: 2,
        name: "Skinny Fit Jeans",
        price: "$240",
        oldPrice: "$260",
        discount: "-20%",
        image: "/pent.png",
        rating: "3.5/5",
      },
      {
        id: 3,
        name: "Checkered Shirt",
        price: "$180",
        image: "/chaks.png",
        rating: "4.5/5",
      },
      {
        id: 4,
        name: "Sleeve Striped T-shirt",
        price: "$130",
        oldPrice: "$160",
        discount: "-30%",
        image: "/orange.png",
        rating: "4.5/5",
      },
    ];
  
    return (
      <section className= "py-24 px-5 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
             <Link href={`/products/${product.id}`} key={product.id}>
            <div key={product.id} className="bg-white p-4 shadow rounded-lg">
             
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-sm">{`★ ${product.rating}`}</span>
              </div>
              <div className="mt-3">
                <span className="text-xl font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    {product.oldPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-red-500 ml-2">{product.discount}</span>
                )}
              </div>
            </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-600">
            View All
          </button>
        </div>
      </section>
    );
  };
  
  export default NewArrivals;
  