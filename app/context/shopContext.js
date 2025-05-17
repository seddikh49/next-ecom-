"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { wilayas } from "../../public/‏‏assets/frontend_assets/wilayas";
import { communes } from "../../public/‏‏assets/frontend_assets/communes";




// إنشاء السياق
const ShopContext = createContext();

// مزود السياق (Provider)
export const ShopProvider = ({ children, initialProducts  }) => {
    const currency = "دج"
    const delivery_fee = 10
    // const backend_url  = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [searchBar, setSearchBar] = useState(false);
    const [takeItem, setTakeItem] = useState({});
    const [products, setProducts] = useState(initialProducts || []);
    const [token, setToken] = useState('');
  const router = useRouter();
    const [nameConfirmation, setnameConfirmation] = useState();
    const [fullName, setfullName] = useState('');
    const [phone, setPhone] = useState('');
    const [wilaya, setWilaya] = useState('');
    const [commune, setCommune] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [productName, setProductName] = useState();
     const [deliveryPrice, setdeliveryPrice] = useState(0);
      const [totalPrice, settotalPrice] = useState(0);
      const [rotateIcon, setRotateIcon] = useState(true);




  const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        searchBar,
        setSearchBar,
        takeItem,
        // backend_url,
        token,
        setToken,
        router,
        setTakeItem,
        wilayas,
        communes,
        nameConfirmation,
        setnameConfirmation,
        setfullName,
        fullName,
        setPhone,
        phone,
        setWilaya,
        wilaya,
        setCommune,
        commune,
        quantity,
        setQuantity,
        productName,
        setProductName,
        deliveryPrice,
        setdeliveryPrice,
        totalPrice,
        settotalPrice,
        setRotateIcon,
        rotateIcon
        
    }


  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

// هوك مخصص لاستخدام السياق
export const useShop = () => useContext(ShopContext);