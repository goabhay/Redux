import React from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../components/store/cartSlice.js";

function Card({ product, btnVal }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (btnVal == "Add To Cart") {
      dispatch(add(product));
    } else {
      dispatch(remove(product.id));
    }
  };

  return (
    <div>
      <div className="card w-full h-3/4 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-1/2">
          <img src={product.image} alt="Shoes" className="rounded-xl h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title h-3/4">{product.title}</h2>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleClick}>
              {btnVal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
