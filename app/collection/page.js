
import Products from "../components/Products"
import TextContent from "../components/TextContent"
import SortSelect from "../components/SortProducts";
import axios from "axios";
export const metadata = {
    title: 'المنتجات | موقعنا',
};

export default async function Collection() {

    // const sortProducts = (e) => {
    //       console.log(e)
    // }

    return (
        <>
            <div className="mt-10">
                <div className="flex justify-between items-center px-10">
                    <div className="w-60">
                        <SortSelect />
                    </div>
                    <TextContent text={'جميع المنتجات'} />
                </div>
                <div>
                    <Products />
                </div>
            </div>


        </>
    )
}