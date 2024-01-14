import InfoFillProduct from "../../Hooks/InfoFillProduct";

function Card({data, setItemNumber, itemNumber, setinfoProductOpen, setProductInfoFill}) {

    return (
      <>
       <div className="bg-gray-100 rounded-lg  cursor-pointer w-52 h-50 mt-12">
        <figure className="relative mb-4 w-full ">
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-8 h-8 m-2"><img src="src/imgs/add.sm.png" alt="" 
            onClick={() => {
                setItemNumber(itemNumber + 1);
            }}/></div>
            <img src={data.image} alt="product-img" className="w-full h-52 object-cover rounded-2xl"
            onClick={() => InfoFillProduct(data, setinfoProductOpen, setProductInfoFill)}
            />
            <div className="bg-white w-full">
                <span className="absolute bottom-2 left-4 bg-white text-black pr-2 pl-1 font-semibold text-sm rounded-e-2xl">
                    {data.category}
                </span>
            </div>
        </figure>
        <div className="flex justify-between w-full h-full">
            <span className="ml-2 truncate">{data.title}</span>
            <span className="text-lg font-semibold pr-2 pl-1">{`$${data.price}`}</span>
        </div>
       </div>
      </>
    )
  }
  
  export default Card