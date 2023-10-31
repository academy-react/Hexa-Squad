import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ShoppingCardData from "../../core/services/api/Data/ShoppingCardData";
import { ShoppingCardRow } from "../../components/common";

const ShoppingCard = () => {
  const dataMapper = ShoppingCardData.map((product, index) => (
    <ShoppingCardRow key={index} product={product} />
  ));

  return (
    <div className="pt-20" data-aos="zoom-out">
      <div className="mx-auto max-w-6xl py-16 px-4 sm:py-24 sm:px-6 lg:px-10 ">
        <h1 className="text-center text-3xl font-bold tracking-tight text-[#111827] dark:text-semiWhite2 sm:text-4xl">
          سبد خرید
        </h1>

        <form className="mt-12">
          <section>
            <ul>{dataMapper}</ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-[#111827] dark:text-semiWhite2">
                    مجموع قیمت
                  </dt>
                  <dd className="ml-4 text-base font-medium text-[#111827] dark:text-semiWhite2">
                    {"820,000"} تومان
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 flex gap-5 sm:flex-row flex-col whitespace-nowrap">
              <button
                type="button"
                className="w-5/12 p-4 block mx-auto bg-red-600 rounded-lg text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
              >
                حذف محصولات سبد خرید
              </button>
              <button
                type="submit"
                className="w-full p-4 block mx-auto bg-lightblue rounded-lg text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
              >
                خرید
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="flex justify-center gap-3">
                <Link to={"/courses"} className="flex gap-3 " dir="rtl">
                  <span aria-hidden="true"> &rarr;</span>
                  صفحه دوره ها
                </Link>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCard;
