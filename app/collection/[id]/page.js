
import axios from "axios";
import ProductDetails from "@/app/components/ProductDetails";



export default async function Product( {params} ) {
  const { id } = await params
  const res =  await axios.get("https://store.kamsed.com/api/product/list");
  const products = res.data.products || [];
  const singleProduct = products.find((prod)=>{ return prod._id === id})
 
  
  


  return (
    <div>
      <ProductDetails product={singleProduct}/>
    </div>
  );
}