import React from "react";
import ShoppingCardData from "../../core/services/api/Data/ShoppingCardData";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/services/SeparationPrice/SeparationPrice";
import { ShoppingCardRow } from "../../components/common";

const ShoppingCard = () => {
  const dataMapper = ShoppingCardData.map((product, index) => (
    <ShoppingCardRow key={index} product={product} />
  ));
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
          سبد خرید
        </h1>

        <form className="mt-12">
          <section>
            <ul>{dataMapper}</ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-[#111827]">
                    مجموع قیمت
                  </dt>
                  <dd className="ml-4 text-base font-medium text-[#111827]">
                    {"820,000"} تومان
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full p-4 block mx-auto bg-lightblue rounded-lg text-[#fff] opacity-80 hover:opacity-100 cursor-pointer"
              >
                خرید
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p className="flex justify-center gap-3">
                یا
                <Link to={"/courses"} className="flex gap-3 " dir="rtl">
                  صفحه دوره ها
                  <span aria-hidden="true"> &rarr;</span>
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
