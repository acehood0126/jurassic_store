import { Button } from "@material-tailwind/react";
import Item1 from "../../assets/images/products/item1.png";
import TrashImg from "../../assets/images/trash.png";

const CartItem = () => {
  return (
    <div className="w-full h-[100px] p-2 bg-none border-2 flex flex-row justify-between items-center rounded-lg gap-3">
      <img
        src={Item1}
        alt=""
        className="w-[80px] h-[80px] object-cover rounded-lg"
      />
      <div className="flex-auto bg-white h-[80px] flex flex-col justify-between items-start py-2">
        <p>Cozy 5 Stars Apartment</p>
        <div className="flex flex-row justify-between w-full">
          <p className="">
            Qty:<span>2</span>
          </p>
          <p className="text-specialRed">$899</p>
        </div>
      </div>
      <Button variant="text" className="p-2" color="blue">
        <img src={TrashImg} alt="" />
      </Button>
    </div>
  );
};

export default CartItem;
