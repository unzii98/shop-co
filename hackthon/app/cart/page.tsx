"use client";
import { useState } from "react";
import { BreadcrumbDemo } from "../component/bread";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/gradient.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/chaks.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/pent.png",
    },
  ]);

  const [discount] = useState(0.2); // 20% discount
  const deliveryFee = 15;

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <>
      <div className="py-10 px-5 max-w-7xl mx-auto">
        <BreadcrumbDemo />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 p-6 mt-6">
        {/* Cart Items */}
        <div className="flex-1 border rounded-[20px] w-full h-full md:w-[700px] md:h-[500px] p-4">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              
            />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                </div>
                <p className="font-semibold">${item.price}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Discount:</p>
            <p className="text-red-500">-${discountAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Delivery Fee:</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-2/3 p-2 border rounded-l-md focus:outline-none"
            />
            <button
              className="w-1/3 p-2 bg-black text-white rounded-r-md"
              aria-label="Apply Promo Code"
            >
              Apply
            </button>
          </div>
          <button className="w-full mt-4 p-2 bg-black text-white font-semibold rounded-md">
            Go to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
