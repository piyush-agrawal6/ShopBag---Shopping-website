import React, { useState, useEffect } from "react";
import "./Products.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Skeleton from "react-loading-skeleton";

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
      }
      return () => {
        componentMounted = false;
      };
    };
    getProdutcs();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="product_loading">
          <Skeleton />
        </div>
        <div className="product_loading">
          <Skeleton />
        </div>
        <div className="product_loading">
          <Skeleton />
        </div>
        <div className="product_loading">
          <Skeleton />
        </div>
      </>
    );
  };

const filterProduct = (cat)=>{
  const updatedList = data.filter((x)=>x.category === cat)
setFilter(updatedList)
}

  const ShowProducts = () => {
    return (
      <>
        <div className="products">
          <h2>FEATURED PRODUCTS</h2>
          <div className="product_filter">
            <button className="product_buttons" onClick={()=>setFilter(data)}>All</button>
            <button className="product_buttons"  onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
            <button className="product_buttons"  onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
            <button className="product_buttons"  onClick={()=>filterProduct("jewelery")}>Jewelery</button>
            <button className="product_buttons"  onClick={()=>filterProduct("electronics")}>Electronics</button>
          </div>
          <hr />
          <div className="pro_container">
            {filter.map((product) => {
              return (
                <div className="pro">
                  <div className="pro_img">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="pro_des">
                    <span>{product.rating.rate} star</span>
                    <h5>{product.title.substring(0, 12)}</h5>
                    <div className="product_price">
                      <h6>{product.price}$</h6>
                      <AddShoppingCartIcon className="product_cart" />
                    </div>
                  </div>
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
