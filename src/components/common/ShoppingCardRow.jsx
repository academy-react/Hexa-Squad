import React from "react";
import { Link } from "react-router-dom";
import SeparationPrice from "../../core/services/SeparationPrice/SeparationPrice";

const ShoppingCardRow = ({ product }) => {
  return (
    <li className="flex py-6 gap-4 border-t border-[#919191]">
      <div className="flex-shrink-0">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              <Link
                href={"" + product.id}
                className="font-medium text-[#111827] "
              >
                {product.title}
              </Link>
            </h4>
            <p className="ml-4 text-sm font-medium text-[#111827]">
              {SeparationPrice(product.price)} تومان
            </p>
          </div>
          <p className="mt-1 text-sm text-[#374151]">{product.professorName}</p>
          <p className="mt-1 text-sm text-[#374151]">{product.courseCount}</p>
        </div>

        <div className="mt-4 flex flex-1 items-end justify-between">
          <p className="flex items-center space-x-2 text-sm text-[#374151]">
            <span> زمان شروع دوره : {product.date}</span>
          </p>
          <div className="ml-4">
            <button type="button" className="text-sm text-[#6366f1]">
              <span>حذف محصول</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShoppingCardRow;
