import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [pName, setPname] = useState("");
  const [category, setCategory] = useState("");

  const [data, setData] = useState([]);

  const getInputData = (e) => {
    if (id && price && pName && category) {
      setData([
        ...data,
        {
          ID: id,
          PRICE: price,
          P_NAME: pName,
          CATEGORY: category,
        },
      ]);
      localStorage.setItem(
        id,
        JSON.stringify({
          ID: id,
          PRICE: price,
          P_NAME: pName,
          CATEGORY: category,
        })
      );
      setId("");
      setPrice("");
      setPname("");
      setCategory("");
    } else {
      console.log("working");
      console.log(data);
    }
  };

  const deletItem = (id) => {
    console.log(id);
    const updatedData = data.filter((elem) => {
      return id !== elem.ID;
    });
    setData(updatedData);
    localStorage.removeItem(id);
  };

  return (
    <>
      <div className="bodydiv">
        <div className="main-heading">
          <h1>This is Product selling app</h1>
        </div>
        {/* Product input section  */}

        <div className="formdiv">
          <div className="formdiv-inner">
            <label>Product ID : </label>
            <input
              placeholder="Mark a ID"
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
          <div className="formdiv-inner">
            <label>Product Name : </label>
            <input
              placeholder="Product Name..."
              type="text"
              value={pName}
              onChange={(e) => setPname(e.target.value)}
            ></input>
          </div>

          <div className="formdiv-inner">
            <label>Selling Price : </label>
            <input
              placeholder="Enter a price..."
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>

          <div className="formdiv-inner category">
            <label>Choose a Category : </label>
            <input
              placeholder="Food, Electronics, Skincare...."
              type="text"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </div>
          <button onClick={getInputData}>Add Product</button>
        </div>

        {/* Product display section */}

        <div>
          <div className="display-div">
            <h1>Food Products</h1>
            {data.map((element) => {
              return element.CATEGORY.toLocaleLowerCase() === "food" ? (
                <div className="content-div" key={element.ID}>
                  Product ▶ {element.P_NAME}, Price ▶{element.PRICE}, Category ▶
                  {element.CATEGORY}
                  <button
                    className="dltbtn"
                    onClick={() => deletItem(element.ID)}
                  >
                    Delete item
                  </button>
                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className="display-div">
            <h1>Skincare Products</h1>
            {data.map((element) => {
              return element.CATEGORY.toLocaleLowerCase() === "skincare" ? (
                <div className="content-div" key={element.ID}>
                  Product ▶ {element.P_NAME}, Price ▶{element.PRICE}, Category ▶
                  {element.CATEGORY}
                  <button
                    className="dltbtn"
                    onClick={() => deletItem(element.ID)}
                  >
                    Delet item
                  </button>
                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className="display-div">
            <h1>Electronic Products</h1>
            {data.map((element) => {
              return element.CATEGORY.toLocaleLowerCase() === "electronics" ? (
                <div className="content-div" key={element.ID}>
                  Product ▶ {element.P_NAME}, Price ▶{element.PRICE}, Category ▶
                  {element.CATEGORY}
                  <button
                    className="dltbtn"
                    onClick={() => deletItem(element.ID)}
                  >
                    Delet item
                  </button>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
