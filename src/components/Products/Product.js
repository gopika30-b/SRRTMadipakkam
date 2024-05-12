import Image from "../../constants/designlayout/Image";
import Badge from "./Badge";

const Product = (props) => {
    return (
      <div className="w-full relative group">
        <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
          <div>
            <Image className="w-full h-full" imgSrc={props.img} />
          </div>
          <div className="absolute top-6 left-8">
            {props.badge && <Badge text={props.badgeName} />}
          </div>
        </div>
        <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
          <div className="flex items-center justify-between font-titleFont">
            <h2 className="text-lg text-primeColor font-bold">
              {props.productName}
            </h2>
            <p className="text-[#767676] text-[14px]">₹{props.price}</p>
          </div>
          <div>
            <p className="text-[#767676] text-[14px]">{props.info}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Product;
  