"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { wilayas } from "../../public/‏‏assets/frontend_assets/wilayas";
import { communes } from "../../public/‏‏assets/frontend_assets/communes";
import { assets } from "@/public/‏‏assets/frontend_assets/assets";




// إنشاء السياق
const ShopContext = createContext();

// مزود السياق (Provider)
export const ShopProvider = ({ children, initialProducts }) => {
  const currency = "دج"
  const delivery_fee = 10

  const [products, setProducts] = useState(initialProducts || []);
  const [sortValue, setSortValue] = useState('');
  const [search, setSearch] = useState();
  const router = useRouter();


  const [allProducts, setallProducts] = useState(products || []);

  const applyFilter = () => {
    setallProducts(products)
    const copyProducts = [...products]

    if (search) {
      const filtered = copyProducts.filter((pro) => {
        return pro.name.toLowerCase().includes(search.toLowerCase())
      })
      setallProducts(filtered)
    }
  }



  useEffect(() => {
    applyFilter()
  }, [search]);




  const value = {
    products,
    allProducts,
    currency,
    search,
    setSearch,
    // backend_url,
    router,
    wilayas,
    communes,
  }


  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

// هوك مخصص لاستخدام السياق
export const useShop = () => useContext(ShopContext);