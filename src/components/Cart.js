import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function Cart() {
  const data = useSelector((state) => state.cart);

  return (
    <div>
      <div className="flex justify-center font-bold text-3xl text-slate-500 mt-8">
        My Cart
      </div>
      <div className="grid grid-cols-4 gap-2 ml-2 auto-rows-max">
        {data.map((item) => (
          <Card product={item} btnVal="Remove" />
        ))}
      </div>
    </div>
  );
}

export default Cart;
