import Products from "../components/Products"
import TextContent from "../components/TextContent"
import axios from "axios";
export const metadata = {
  title: 'المنتجات | موقعنا',
};

export default async function Collection() {
//       const res =  await axios.get("https://store.kamsed.com/api/product/list");
//   const products = res.data.products || [];


    return (
        <>
        <div>
            <div>
                <TextContent text={'جميع المنتجات'}/>
            </div>
            <div>
             <Products />
            </div>
        </div>
            
     
        </>
    )
}