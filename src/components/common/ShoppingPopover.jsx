import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import shoppingCart from "../../assets/image/shopping-cart.svg";
import shoppingCartLayout from "../../assets/image/shopping-cart-layout.svg";
import ShoppingCardData from "../../core/services/api/GetData/ShoppingCardData";

const ShoppingPopover = ({ headerStyle }) => {
  return (
    <Popover className="flow-root text-sm sm:relative">
      <Popover.Button className="group m-2 ml-0 flex items-center relative hover:border-none border-none">
        <img
          src={shoppingCart}
          alt="shoppingCart"
          className={headerStyle ? "block" : "hidden"}
        />
        <img
          src={shoppingCartLayout}
          alt="shoppingCartLayout"
          className={headerStyle ? "hidden" : "block"}
        />
        <span></span>
        <span
          className={
            "ml-2 text-sm absolute top-0 right-0 w-5 h-5 rounded-full" +
            (headerStyle ? "" : "text-blue-800 rounded-full bg-indigo-800")
          }
        >
          {ShoppingCardData.length}
        </span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute inset-x-0 top-20 mt-px bg-whitePink dark:bg-darkblue2 pb-6 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] sm:px-2 sm:top-full lg:left-auto sm:left-0 sm:right-auto lg:right-0 sm:mt-3 sm:-mr-1.5 sm:w-80 sm:rounded-lg ">
          <h2 className="sr-only">Shopping Cart</h2>

          <form className="mx-auto max-w-2xl px-4">
            <ul role="list" className="divide-y divide-gray-200">
              {ShoppingCardData.map((product, index) => (
                <li key={index} className="flex items-center gap-2 py-6">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-16 w-16 flex-none rounded-md border border-gray-200"
                  />
                  <div className="ml-4 flex-auto">
                    <h3 className="font-medium ">
                      <Link to={product.title} className="dark:text-slate-100 ">
                        {product.title}
                      </Link>
                    </h3>
                    <p className="my text-newPurple3 dark:text-slate-400 text-opacity-50">
                      {product.professorName}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="submit"
              className="w-full p-4 block mx-auto bg-lightblue rounded-lg text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
            >
              پرداخت
            </button>

            <p className="mt-6 text-center">
              <Link to="shoppingCard" className="text-sm">
                دیدن اطلاعات سبد خرید
              </Link>
            </p>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ShoppingPopover;
