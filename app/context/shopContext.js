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

  const [search, setSearch] = useState();
  const router = useRouter();

 
 

  const value = {
    products,
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