import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import VisaCard from "../../assets/images/card/Visa.svg";
import MasterCard from "../../assets/images/card/Mastercard.svg";
import AmericanExpress from "../../assets/images/card/American Express.svg";
import Discover from "../../assets/images/card/Discover.svg";
import CVCCard from "../../assets/images/card/CVC Card.svg";

import { RootState } from "../../services/store";
import CartItem from "../../components/CartItem";

const Checkout = () => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.Product.products);
  const cart = useSelector((state: RootState) => state.Product.cart);
  const [totalPrice, setTotalPrice] = useState(0);

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
      <div className="bg-white/30 backdrop-blur-lg justify-start fixed w-full flex flex-row items-center z-10 top-0 transition ease-in-out sm:py-5 py-3 sm:px-10 px-5">
        <button
          className="font-Sacramento sm:text-[30px] text-[25px] leading-[30px] text-center text-black"
          onClick={() => {
            navigate("/");
          }}
        >
          Jurassic Store
        </button>
      </div>
      <div className="w-full min-h-screen h-screen flex flex-row justify-center items-center pt-[100px] text-black">
        <div className="w-full h-full max-w-[1440px]">
          <div className="w-full h-full flex flex-row justify-between items-start pb-10">
            <div className="flex-1 flex flex-row justify-center items-center">
              <div className="relative">
                <div className="max-w-lg">
                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <input
                      className="focus:outline-none focus:ring-0 bg-white rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[40px] text-sm p-2.5"
                      type="email"
                    />
                  </div>
                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Card information
                    </label>

                    <div className="rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[80px] text-[16px] font-[500] ">
                      <div>
                        <div className="flex justify-between px-[12px] py-[9px] rounded-t-[8px]  w-full h-[40px]  ">
                          <input
                            className="focus:outline-none focus:ring-0 bg-white"
                            type="text"
                            placeholder="1234 1234 1234 1234"
                          />
                          <div className="flex items-center">
                            <img src={VisaCard} alt="" />
                            <img className="ml-[8px]" src={MasterCard} alt="" />
                            <img
                              className="ml-[8px]"
                              src={AmericanExpress}
                              alt=""
                            />
                            <img className="ml-[8px]" src={Discover} alt="" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between rounded-b-[8px]  border-t w-full h-[40px] ">
                          <div className="px-[12px] py-[9px] rounded-b-l-[8px]  border-r  w-[163px] h-[40px] ">
                            <input
                              className="focus:outline-none focus:ring-0 w-full bg-white"
                              placeholder="MM / YY"
                            />
                          </div>

                          <div className="flex justify-between px-[12px] py-[9px] rounded-b-l-[8px]  border-r  w-[163px] h-[40px] ">
                            <input
                              type="text"
                              className="focus:outline-none focus:ring-0 w-full bg-white"
                              placeholder="CVC"
                            />
                            <img src={CVCCard} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Name on card
                    </label>

                    <input
                      className="bg-white focus:outline-none focus:ring-0 rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[40px] text-sm p-2.5"
                      type="text"
                    />
                  </div>

                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Country or region
                    </label>

                    <div className="rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[80px] text-[16px] font-[500]">
                      <div className="px-[12px] py-[9px] rounded-t-[8px]  w-full h-[40px]  ">
                        <label className="sr-only" htmlFor="country">
                          Country
                        </label>

                        <select
                          className="bg-white focus:outline-none focus:ring-0 relative w-full focus:z-10 text-black text-[16px]"
                          name="country"
                          autoComplete="country-name"
                        >
                          <option>United States</option>
                          <option>England</option>
                          <option>Wales</option>
                          <option>Scotland</option>
                          <option>France</option>
                          <option>Belgium</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div>
                        <div className="rounded-b-[8px]  border-t w-full h-[40px] ">
                          <div className="px-[12px] py-[9px] w-full h-[40px]">
                            <input
                              type="text"
                              className="bg-white focus:outline-none focus:ring-0  w-full"
                              placeholder="ZIP"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 mt-[32px]">
                    <button className="w-full h-[48px] py-[12px] bg-specialRed rounded-[4px] shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] text-white">
                      Pay ${totalPrice}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="w-full max-w-[500px] flex flex-col justify-center items-center gap-3">
                <p className="text-black font-bold text-[30px] mb-[10px]">
                  Cart
                </p>
                {products.map((item, index) => {
                  const id = cart.indexOf(index);
                  if (id > -1) {
                    return <CartItem {...item} index={index} key={index} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
