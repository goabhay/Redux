import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { UseDispatch, useDispatch } from "react-redux";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoding(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center align-center m-8">
        <h1 className="text-3xl font-bold m-auto">Products</h1>
      </div>
      {loading === true ? (
        <h1 className="text-3xl font-bold  flex justify-center">Loading...</h1>
      ) : (
        ""
      )}

      <div className="grid grid-cols-4 gap-2 ml-2 auto-rows-max">
        {data.map((item) => (
          <Card product={item} btnVal={"Add To Cart"} />
        ))}
      </div>
    </>
  );
}

export default Product;
