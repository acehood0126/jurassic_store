import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";

import { removeCart } from "../../services/slices/productSlice";

import TrashImg from "../../assets/images/trash.png";

interface ICartItem {
  index: Number;
  name: String;
  price: Number;
  img: String;
}

const CartItem = ({ index, name, price, img }: ICartItem) => {
  const imgURL = "../../assets/images/products/" + img;
  const [imageSource, setImageSource] = useState("0");
  useEffect(() => {
    console.log(`../../assets/images/products/${img}`);
    import(imgURL).then((image) => setImageSource(image.default));
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100px] p-2 bg-none border-2 flex flex-row justify-between items-center rounded-lg gap-3">
      <img
        src={imageSource}
        alt=""
        className="w-[80px] h-[80px] object-cover rounded-lg"
      />
      <div className="flex-auto bg-white h-[80px] flex flex-col justify-between items-start py-2">
        <p>{name}</p>
        <div className="flex flex-row justify-between w-full">
          <p className="">
            Qty:<span>1</span>
          </p>
          <p className="text-specialRed">{`$${price}`}</p>
        </div>
      </div>
      <Button
        onClick={() => {
          dispatch(removeCart(Number(index)));
        }}
        variant="text"
        className="p-2"
        color="blue"
      >
        <img src={TrashImg} alt="" />
      </Button>
    </div>
  );
};

export default CartItem;
