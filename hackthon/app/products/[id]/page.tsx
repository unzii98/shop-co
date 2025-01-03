"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

import { BreadcrumbDemo } from "@/app/component/bread";



interface IProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: string;
  
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

const products: IProduct[] = [
  {
    id: 1,
   
    name: "T-shirt with Tape Details",
    price: "$120",
    image: "/shirt.png",
    rating: "4.5/5",
    
    img1: "/shirt.png",
    img2: "/shirt.png",
    img3: "/image 6.png",
    img4: "/image 1.png",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: "/pent.png",
    price: "$240",
   
    rating: "3.5/5",
    img1: "/pent.png",
   
    img2: "/pent.png",
    img3: "/image 6.png",
    img4: "/image 1.png",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: "$180",
    rating: "3.5/5",
     image: "/chaks.png",
    img1:"/chaks.png",
    img2: "/chaks.png",
    img3: "/image 6.png",
    img4: "/image 1.png",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: "$130",
    rating: "4.5/5",
    image: "/orange.png",
   img1: "/orange.png",
    img2: "/orange.png",
    img3: "/image 6.png",
    img4: "/image 1.png",
   
    
  },
  {
    id: 5,
    name: "T-shirt with Tape Details",
    price: "$200",
    rating: "4.5/5",
    image: "/green.png",
    img1: "/green.png",
    img2: "/green.png",
    img3: "/image 6.png",
    img4: "/image 1.png",
   
    
  },
  {
    id: 6,
    name: "COURAGE GRAPHIC T-SHIRT",
    price: "$130",
    rating: "4.5/5",
    image: "/oshirt.png",
    img1: "/oshirt.png",
    img2: "/oshirt.png",
    img3: "/image 6.png",
    img4: "/image 1.png",
   
    
  },
  {
    id: 7,
    name: "LOOSE FIT BERMUDA SHORTS",
    price: "$180",
    image: "/short.png",
    rating: "3.5/5",
    img1: "/short.png",
    img2: "/short.png",
   
    img3: "/image 6.png",
    img4: "/image 1.png",
   
    
  },
  {
    id: 8,
    name: "SKINNY FIT JEANS",
      price: "$130",
      image: "/black.png",
      rating: "4.5/5",
      img1: "/black.png",
      img2: "/black.png",
  
   
    img3: "/image 6.png",
    img4: "/image 1.png",
   
    
  },
  
];

export default function Detail() {
  const params = useParams();
  const id = Number(params?.id); // Ensure id is a number
  const item = products.find((product) => product.id === id);

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center mt-12 px-5">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-600">Please check the product ID and try again.</p>
      </div>
    );
  }
   // Function to handle adding to cart
   const handleAddToCart = (productId: number) => {
    console.log(`Product ${productId} added to cart!`);
    alert(`Product ${productId} added to cart!`);
  };

  return (
 
  
    <div className="flex flex-col px-10 py-10 mt-10">
      <BreadcrumbDemo/>
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnails */}
        <div className="flex flex-row md:flex-col gap-2 md:gap-3">
          <Image
            src={item.img2}
            alt={item.name}
            width={100}
            height={100}
            className="border rounded-md"
          />
          <Image
            src={item.img3}
            alt={item.name}
            width={100}
            height={100}
            className="border rounded-md"
          />
          <Image
            src={item.img4}
            alt={item.name}
            width={100}
            height={100}
            className="border rounded-md"
          />
        </div>

        {/* Main Product Image */}
        <div className="flex justify-center w-full md:w-[50%]">
          <Image
            src={item.img1}
            alt={item.name}
            width={300}
            height={400}
            className="rounded-md"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-4 md:w-[50%]">
          {/* Title */}
          <h1 className="text-3xl font-bold">{item.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
            <span className="text-gray-500 text-sm">{item.rating}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">{item.price}</span>
            
          </div>

          {/* Description */}
          <p className="text-gray-700">
            This graphic t-shirt, perfect for any occasion, is crafted from soft and breathable fabric.
          </p>

        
         {/* Add to Cart Button */}
         <button
            onClick={() => handleAddToCart(item.id)}
            className="w-full md:w-auto px-4 py-3 md:px-6 md:py-3 text-sm md:text-base bg-black text-white rounded-md hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
    {/* Testimonials Section */}
<div className="my-16 px-4 md:px-8 lg:px-16">
  {/* Tabs Navigation */}
  <div className="flex flex-wrap justify-center border-b pb-4 mb-8 gap-4">
    <button className="px-4 py-2 border-b-2 border-black font-bold">
      Rating & Reviews
    </button>
    <button className="px-4 py-2 text-gray-500 hover:text-black transition">
      Product Details
    </button>
    <button className="px-4 py-2 text-gray-500 hover:text-black transition">
      FAQs
    </button>
  </div>

  {/* Header with Sorting and Write Review */}
  <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
    <h2 className="text-xl font-bold">All Reviews (450)</h2>
    <div className="flex flex-wrap items-center gap-4">
      <select className="border rounded-md px-4 py-2 w-full md:w-auto">
        <option>Latest</option>
        <option>Highest Rated</option>
        <option>Lowest Rated</option>
      </select>
      <button className="bg-black text-white px-4 py-2 rounded-md w-full md:w-auto">
        Write a Review
      </button>
    </div>
  </div>

  {/* Reviews Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Samantha D.",
        date: "August 14, 2023",
        rating: 5,
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
      },
      {
        name: "Alex M.",
        date: "August 15, 2023",
        rating: 4,
        review:
          "The t-shirt exceeded my expectations! The colors are vibrant, the quality is top-notch.",
      },
      {
        name: "Ethan R.",
        date: "August 10, 2023",
        rating: 5,
        review:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalist style fits perfectly.",
      },
    ].map((testimonial, index) => (
      <div
        key={index}
        className="border rounded-lg p-6 shadow-md flex flex-col gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <span className="text-gray-500 text-sm">
              Posted on {testimonial.date}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          {"⭐".repeat(testimonial.rating)}
          {"☆".repeat(5 - testimonial.rating)}
        </div>
        <p className="italic text-gray-600">{testimonial.review}</p>
      </div>
    ))}
  </div>

  {/* Load More Reviews */}
  <div className="flex justify-center mt-8">
    <button className="px-6 py-2 border rounded-md hover:bg-gray-100 transition">
      Load More Reviews
    </button>
  </div>
</div>

  </div>
  
  
  );
}
