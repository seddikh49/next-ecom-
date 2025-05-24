"use client"
import React from 'react'
import { useShop } from "../context/shopContext";
import Image from 'next/image';
import Link from 'next/link';
import TextContent from '../components/TextContent';


const HomeProducts = () => {
    const { products } = useShop();

    return (
        <div className='w-full mt-10 '>
           <TextContent text={"أحدث المنتجات"}/>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 xm:grid-cols-1 sm:grid-cols-1 mx-auto  gap-10 mt-10 w-full'>
               
        {products.slice(0,4).map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-4 max-w-xs mx-auto"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={product.image[0]}
                alt={product.name || 'صورة المنتج'}
                width={300}
                height={300}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              <h1 className="text-md font-semibold text-gray-800 whitespace-nowrap">{product.name.slice(0,25)}</h1>
              <p className="text-xl text-indigo-600 font-bold mt-2">{product.price} ريال</p>

              <Link href={`/collection/${product._id}`} className="block">
                <button className="mt-4 w-full bg-indigo-600 font-bold text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition duration-300">
                  شراء المنتج
                </button>
              </Link>
            </div>
          </div>
        ))}
            </div>
        </div>
    )
}

export default HomeProducts
