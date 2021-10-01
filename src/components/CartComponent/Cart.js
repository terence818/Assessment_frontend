import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import network from "../../utils/network";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import QuickView from "./QuickView";
import "./scss/style.scss";
import "../..//CSS/Search.css";


export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      term: "",
      category: "",
      quickViewProduct: {},
      modalActive: false,
      filter: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filter = this.filter.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {

    network.post("http://localhost:9020/getProduct").then(function (resp, status, headers, config) {

      let data = []
      if (resp.data.errormessage === "000") {
        this.setState({
          products: resp.data.message
        }, () => {


        });

      }
    }.bind(this))
      .catch(function (error) {
      });

  }

  componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
  
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }

  filter() {
    this.setState({ filter: !this.state.filter });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
  }
  
 

  // Open Modal
  openModal(product) {

    let product2 = JSON.parse(product)
    this.setState({
      quickViewProduct: product2,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {


    return (
      <div className="container">
        <Header
          filter={this.filter}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          productQuantity={this.state.moq}
        />
        <Products

          filter={this.state.filter}
          productsList={this.state.products}
          searchTerm={this.state.term}
          openModal={this.openModal}
        />
        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

