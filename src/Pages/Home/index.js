import React, { useState } from "react";
import Banner from "../../components/banner";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/products/selectors";
import { useEffect } from "react";
import { fetchproducts } from "../../store/products/actions";
import ProductComponents from "../../components/productComponent";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  const search = products?.filter((product) => {
    const tag = product.tags.replace(/[^a-z0-9]/gi, " ");
    return (
      product.designer.name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      tag.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });
  console.log("search", search);
  return (
    <div>
      <Banner />
      <section className="search">
        <div className="search-bar">
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
          <BsSearch />
        </div>
        <div className="filter-dropdown">
          <select name="filter" id="filter">
            <option value="price-ascending" disabled>
              Filter by
            </option>
            <option value="price-ascending">Price high-low</option>
            <option value="price-descending">Price low-high</option>
            <option value="date-old-new">Most recent</option>
          </select>
        </div>
      </section>
      <section className="products">
        {search.map((product) => {
          return (
            <ProductComponents
              key={product.id}
              id={product.id}
              title={product.title}
              imageurl={product.imageurl}
              designer={product.designer.name}
              tags={product.tags}
              price={product.cost + product.addedcost}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Products;
