"use client"
import { useEffect } from "react";
import { useShop } from "../../context/shopContext";
import Image from "next/image";

export default function Products() {
    const { products } = useShop();



   
    return (
        <>
            <div className='grid grid-cols-4 mx-auto w-full  gap-10'>
                {products?.map((product) => (
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
            <h1>ddd</h1>

        </>
    )
}