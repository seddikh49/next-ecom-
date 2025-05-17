


export default function TextContent({text}) {
       return(
          <>
           <div className="flex justify-center items-center gap-2 mt-10">
            <h1 className="text-4xl">{text}</h1>
            <p className="bg-gray-700 h-1 w-10 font-bold"></p>
           </div>
         </>
       )
}