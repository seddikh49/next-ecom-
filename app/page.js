
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Hero from './components/Hero';
import HomeProducts from './components/HomeProducts';



export const metadata = {
  title: "kamsed-store - متجر كامسد"
};




export default async function Home() {


  return (

    <div className='w-full flex justify-center items-center flex-col ' >
      <Hero />
    
     <HomeProducts/>
    </div>
  );
}

