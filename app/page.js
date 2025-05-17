import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/app/components/Hero';


export const metadata = {
  title: "kamsed-store - متجر كامسد"
};




export default async function Home() {


  return (

    <div className='w-full flex justify-center items-center flex-col ' dir='rtl'>
      <Hero />

    </div>
  );
}