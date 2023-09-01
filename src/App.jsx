import { useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import products from "./db/data";
import Card from "./components/Card";
export default function App() {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //----------input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //--------radio filter
  const handleChange = (e) => setSelectedCategory(e.target.value);

  //--------button filter

  const handleClick = (e) => setSelectedCategory(e.target.value);

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    //selcted filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}
