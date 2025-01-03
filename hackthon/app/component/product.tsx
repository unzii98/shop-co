import Link from "next/link";
import Image from "next/image";
export default function Tshirt() {
  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: "$120",
      image: "/gradient.png",
      rating: "4.5/5",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
      image: "/brown.png",
      rating: "3.5/5",
    },
    {
      id: 3,
      name: "Black Striped T-shirts",
      price: "$180",
      image: "/white.png",
      rating: "3.5/5",
    },
    {
      id: 4,
      name: "SKINNY FIT JEANS",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
      image: "/pent.png",
      rating: "4.5/5",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: "$180",
      image: "/chaks.png",
      rating: "4.5/5",
    },
    {
      id: 6,
      name: "SLEEVE STRIPED T-SHIRT",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
      image: "/oshirt.png",
      rating: "4.5/5",
    },
    {
      id: 7,
      name: "VERTICAL STRIPED SHIRT",
      price: "$120",
      image: "/green.png",
      rating: "4.5/5",
    },
    {
      id: 8,
      name: "COURAGE GRAPHIC T-SHIRT",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
      image: "/oshirt.png",
      rating: "3.5/5",
    },
    {
      id:9,
      name: "LOOSE FIT BERMUDA SHORTS",
      price: "$180",
      image: "/short.png",
      rating: "3.5/5",
    },
  ];

  return (
    <section className="w-full px-4 max-w-9xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-5">Casual</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-row-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>

            <div className="p-4 shadow rounded-lg cursor-pointer">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-full rounded-md mb-4"
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
    </section>
  
  );

}
