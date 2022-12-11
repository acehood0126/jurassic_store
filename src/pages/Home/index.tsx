import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

import ProductItem from "../../components/ProductItem";
import CartItem from "../../components/CartItem";
import { useScrollPosition } from "../../hooks/useScrollPosition";

import CartImg from "../../assets/images/shopping-cart.png";
import SearchImg from "../../assets/images/search.png";

import { RootState } from "../../services/store";
import { useSelector } from "react-redux";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const products = useSelector((state: RootState) => state.Product.products);
  const cart = useSelector((state: RootState) => state.Product.cart);

  const handleOpen = () => setOpen(!open);

  const scrollPosition = useScrollPosition();
  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    let total = 0;
    products.forEach((item, index) => {
      const id = cart.indexOf(index);
      if (id > -1) {
        total += item.price;
      }
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pb-[50px]">
        <div
          className={`${
            scrollPosition > (hasWindow ? window.innerHeight : 0) / 2 + 100
              ? "bg-white/30 backdrop-blur-lg justify-between"
              : "bg-none  justify-end"
          } fixed w-full flex flex-row items-center z-10 top-0 transition ease-in-out sm:py-5 py-3 sm:px-10 px-5`}
        >
          <button
            className={`${
              scrollPosition > (hasWindow ? window.innerHeight : 0) / 2 + 100
                ? "block"
                : "invisible"
            } font-Sacramento sm:text-[30px] text-[25px] leading-[30px] text-center text-black`}
          >
            Jurassic Store
          </button>
          <Button
            variant="text"
            className="p-2"
            color="red"
            onClick={handleOpen}
          >
            <img src={CartImg} alt="" />
          </Button>
        </div>

        <div className={`w-full h-screen bg-hero-pattern bg-cover`}>
          <div className="relative w-full h-full backdrop-blur-lg flex flex-col justify-center items-center">
            <h1 className="font-Sacramento lg:text-[150px] sm:text-[100px] text-[80px] md:leading-[150px] leading-[100px] text-center text-black">
              Jurassic Store
            </h1>
          </div>
        </div>

        <div className="m-10 max-w-[1440px]">
          <div className="flex flex-col md:gap-10 gap-5 justify-center items-center mt-[30px] mx-[10px] mb-[80px]">
            <p className="text-black md:text-[30px] text-[20px] text-center">
              Browse the Catalogue
            </p>
            <div className="max-w-[600px] w-full">
              <Input
                label="Search for products..."
                icon={<img src={SearchImg} alt="" />}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-10 justify-center flex-wrap w-full">
            {products.map((item, index) => {
              const id = cart.indexOf(index);
              if (item.name.toLowerCase().search(search.toLowerCase()) > -1) {
                return (
                  <ProductItem
                    {...item}
                    addedCart={id > -1}
                    index={index}
                    key={index}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        className="absolute right-0 h-screen w-[800px] flex flex-col justify-between"
        size={`${(hasWindow ? window.innerWidth : 0) >= 640 ? "xs" : "xxl"}`}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, x: 0, y: 0 },
          unmount: { scale: 1, x: 100, y: 0 },
        }}
      >
        <DialogHeader>Cart</DialogHeader>
        <DialogBody className="flex-auto overflow-auto mx-2 flex flex-col gap-2">
          {products.map((item, index) => {
            const id = cart.indexOf(index);
            if (id > -1) {
              return <CartItem {...item} index={index} key={index} />;
            }
          })}
        </DialogBody>
        <DialogFooter className="flex flex-row justify-between">
          <p className="ml-3 text-specialRed">
            Total: <span className="font-bold">${totalPrice}</span>
          </p>
          <div className="flex flex-row">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 sm:text-[12px] text-[10px]"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleOpen}
              className="sm:text-[12px] text-[10px]"
            >
              <span>Checkout</span>
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Home;
