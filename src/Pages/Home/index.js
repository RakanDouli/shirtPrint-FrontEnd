import React, { useState } from "react";
import Banner from "../../components/banner";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/products/selectors";
import { useEffect } from "react";
import { fetchproducts } from "../../store/products/actions";
import ProductComponents from "../../components/productComponent";
import { BeatLoader } from "react-spinners";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  // console.log(products);
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

  let filtered = [];
  if (filter === "price-ascending") {
    filtered = [...search].sort((a, b) =>
      a.cost + a.addedcost > b.cost + b.addedcost ? 1 : -1
    );
  } else if (filter === "price-descending") {
    filtered = [...search].sort((a, b) =>
      a.cost + a.addedcost < b.cost + b.addedcost ? 1 : -1
    );
  } else {
    filtered = search;
  }

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
          <select
            name="filter"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}>
            <option value="" disabled>
              Filter by
            </option>
            <option value="price-ascending">Price high-low</option>
            <option value="price-descending">Price low-high</option>
          </select>
        </div>
      </section>
      <section className="products">
        {!products ? (
          <BeatLoader />
        ) : search.length === 0 ? (
          "No products found"
        ) : (
          filtered.map((product) => {
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
          })
        )}
        {}
      </section>
    </div>
  );
};

export default Products;
