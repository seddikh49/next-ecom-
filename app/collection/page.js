
import Products from "../components/Products"
import TextContent from "../components/TextContent"
import SortSelect from "../components/SortProducts";
import { GoChevronDown } from "react-icons/go";

import axios from "axios";
import HandleCategories from "../components/HandleCategories";

export const metadata = {
    title: 'المنتجات | موقعنا',
};

export default async function Collection() {
        







    return (
        <>
            <div className="mt-10 flex xl:flex-row sm:flex-col gap-10">

                <div>
                    <div className="flex xm:items-end  justify-between items-center px-10 sm:flex-col xm:flex-col xl:flex-row lg:flex-row md:flex-row gap-4">
                        <div className="w-60">
                            <SortSelect />
                        </div>
                        <TextContent text={'جميع المنتجات'} />
                    </div>
                    <div className="">
                        <Products />
                    </div>
                </div>
                <div className=" max-w-96 w-72  flex" dir="rtl">
                <HandleCategories/>
                </div>
            </div>


        </>
    )
}