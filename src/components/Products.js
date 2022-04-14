import React, { useState, useEffect } from "react";
import "./Products.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProdutcs = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProdutcs();
  }, []);

  const Loading = () => {
    return <>Loading......</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="products">
          <h2>Featured Products</h2>
          <p>Summer collection new modern design</p>

          <div className="pro_container">
            {filter.map((product) => {
              return (
                  <div className="pro">
                    <img className="img" src={product.image} alt="" />
                    <div className="pro_des">
                      <span>{product.rating.rate}</span>
                      <h5>{product.title}</h5>
                      <h4>{product.price}$</h4>
                    </div>
                    <AddShoppingCartIcon className="cart" />
                  </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <ShowProducts />
    </div>
  );
};

export default Products;
