import Link from "next/link";
import Image from "next/image";
export default function Sell() {
  const products = [
    {
      id: 5,
      name: "T-shirt with Tape Details",
      price: "$120",
      discount: "-20%",
      image: "/green.png",
      rating: "4.5/5",
    },
    {
      id: 6,
      name: "COURAGE GRAPHIC T-SHIRT",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
      image: "/oshirt.png",
      rating: "3.5/5",
    },
    {
      id: 7,
      name: "LOOSE FIT BERMUDA SHORTS",
      price: "$180",
      image: "/short.png",
      rating: "3.5/5",
    },
    {
      id:8,
      name: "SKINNY FIT JEANS",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
      image: "/black.png",
      rating: "4.5/5",
    },
  ];

  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">TOP SELLING</h2>

      <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>

            <div className="p-4 shadow  cursor-pointer">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-sm">{`★ ${product.rating}`}</span>
              </div>
              <div className="mt-3">
                <span className="text-xl font-bold">{product.price}</span>
                
                
              </div>
            </div>
          </Link>
          
        ))}
          
      </div>
    </section>
  
  );

}
