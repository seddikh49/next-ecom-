'use client';
 import { useShop } from "../context/shopContext";
export default function SortSelect() {
  const {setSortValue} = useShop()
  return (
    <select
      onChange={(e)=> setSortValue(e.target.value)}
      className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
    >
      <option value="">ترتيب حسب</option>
      <option value="high">الأغلى</option>
      <option value="low">الأرخص</option>
    </select>
  );
}