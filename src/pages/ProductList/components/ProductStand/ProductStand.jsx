import React, { Component } from "react";
import Select from "react-select";
import ProductCard from "../ProductCard/ProductCard";
import { BsSearch } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import { RiGridFill } from "react-icons/ri";
import { SELECT_OPTIONS } from "../../ListData";
import "./ProductStand.scss";

class ProductStand extends Component {
  constructor() {
    super();
    this.state = {
      smallGrid: true,
    };
  }

  handleOptionChange = (e) => {
    console.log(e);
  };

  render() {
    const { smallGrid } = this.state;
    return (
      <section className="ProductStand">
        <div className="standMenu">
          <div className="menuLeft">
            <p>전체 상품 21</p>
          </div>
          <div className="menuRight">
            <RiLayoutGridFill className="gridSmallButton" size="30" color={`${smallGrid ? "black" : "gray"}`} onClick={() => this.setState({ smallGrid: true })} />
            <RiGridFill className="gridBigButton" size="30" color={`${smallGrid ? "gray" : "black"}`} onClick={() => this.setState({ smallGrid: false })} />
            <Select onChange={this.handleOptionChange} className="optionSelector" options={SELECT_OPTIONS} defaultValue={SELECT_OPTIONS[0]} />
            <input className="inputSearch" type="text" placeholder="결과 내 검색" />
            <BsSearch className="searchIcon" />
          </div>
        </div>
        {/* <div className="productsContainer grid6"> */}
        <div className={`productsContainer ${smallGrid ? "grid4" : "grid6"}`}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    );
  }
}

export default ProductStand;
