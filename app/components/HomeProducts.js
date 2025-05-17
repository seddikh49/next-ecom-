"use client"
import React from 'react'
import { useShop } from "../context/shopContext";
import Image from 'next/image';
const HomeProducts = () => {
    const { products } = useShop();

    return (
        <div className='w-full '>
            <div className='grid grid-cols-4 mx-auto  gap-10 mt-10 w-full'>
                {products.map((product) => (
                    <div className='m-auto' key={product.id || product.image[0]}>
                        <Image
                            src={product.image[0]}
                            alt={product.name || 'صورة المنتج'}
                            width={300} // حدد العرض المناسب
                            height={400} // حدد الارتفاع المناسب
                            priority
                        />
                        <h1>{product.name} </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeProducts
