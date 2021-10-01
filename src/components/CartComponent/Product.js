import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "../..//CSS/Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickViewProduct: {},
      editProduct: {},
      isAdded: false
    };
  }
  
  quickView(image, brand, barcode, id) {
    let data = {
      image: image,
      brand: brand,
      barcode: barcode,
      id: id
    }
    this.setState(
      {
        quickViewProduct: data
      }, () => {
        let data2 = JSON.stringify(this.state.quickViewProduct)
        this.props.openModal(data2);
      }
    );
  }

  ProductEdit(image, brand, product_name, barcode, id) {
    let data = {
      image: image,
      brand: brand,
      product_name: product_name,
      barcode: barcode,
      id: id
    }
   
    this.props.history.push({
      pathname: "/ProductEdit/" + data["id"],
      product: data
    });

  }


  render() {
    let image = "http://localhost:9020/" + this.props.image;
    let brand = this.props.brand;
    let barcode = this.props.barcode;
    let product_name = this.props.product_name;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    return (
      <div className="product">
        <div className="product-image">
          <img
            src={image}
            alt={this.props.name}
            onClick={this.quickView.bind(
              this,
              image,
              brand,
              product_name,
              barcode,
              id,
            )}
          />
        </div>
        <p className="product-name">Brand: {this.props.brand}</p>
        <p className="product-barcode">Barcode: {this.props.barcode}</p>
        <h4 className="product-product">{this.props.product_name}</h4>
        <div className="product-action">
          <button
            className={!this.state.isAdded ? "" : "edited"}
            type="button"
            onClick={this.ProductEdit.bind(
              this,
              image,
              brand,
              product_name,
              barcode,
              id,
              quantity
            )}
          >
            {"Edit"}
          </button>
        </div>

      </div>
    );
  }
}

export default withRouter(Product);
