
function Card({children}) {

    return (
      <>
       <div className="bg-gray-100 rounded-sm  cursor-pointer w-52 h-50">
        <figure className="relative mb-4 w-full ">
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-8 h-8 m-2"><img src="src/imgs/add.sm.png" alt="" /></div>
            <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg" alt="product-img" className="w-full h-full object-cover rounded-2xl"/>
            <div className="bg-white w-full">
                <span className="absolute bottom-2 left-4 bg-white text-black pr-2 pl-1 font-semibold text-sm rounded-e-2xl">
                    Tag
                </span>
            </div>
        </figure>
        <div className="flex justify-between w-full h-8">
            <span className="ml-2">Name</span>
            <span className="text-lg font-semibold pr-4">$100</span>
        </div>
       </div>
      </>
    )
  }
  
  export default Card