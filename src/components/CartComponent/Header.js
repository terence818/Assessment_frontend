import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { findDOMNode } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from "axios";

library.add(faSortAlphaDown, faSortAlphaUp)

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false
    };
  }
  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleMobileSearch(e) {
    e.preventDefault();
    this.setState({
      mobileSearch: true
    });
  }
  handleSearchNav(e) {
    e.preventDefault();
    this.setState(
      {
        mobileSearch: false
      },
      function () {
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
      }
    );
  }
  handleClickOutside(event) {
    // const cartNode = findDOMNode(this.refs.cartPreview);
    // const buttonNode = findDOMNode(this.refs.cartButton);
    // if (cartNode.classList.contains("active")) {
    //   if (!cartNode || !cartNode.contains(event.target)) {
    //     this.setState({
    //       showCart: false
    //     });
    //     event.stopPropagation();
    //   }
    // }
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }
  componentWillUnmount() {
    // document.removeEventListener(
    //   "click",
    //   this.handleClickOutside.bind(this),
    //   true
    // );
  }

 sorting() {
    this.setState({
      collapse: false,
      errorText: '',
      Color: false,
    })
  }


  sortBy() {
    this.props.filter();
  } 




  render() {
    
    return (
      <header>

        <div className="row">
          <div className="col-lg-12 ml-2 ">
            <div className="containers" style={{ marginTop: "100px" }}>
              <div className="search">
                <a
                  className="mobile-search"
                  href="#"
                  onClick={this.handleMobileSearch.bind(this)}
                >
                  <img
                    src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                    alt="search"
                  />
                </a>
                <form
                  action="#"
                  method="get"
                  className={
                    this.state.mobileSearch ? "search-form active" : "search-form"
                  }
                >
                  <a
                    className="back-button"
                    href="#"
                    onClick={this.handleSearchNav.bind(this)}
                  >
                    <img
                      src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                      alt="back"
                    />
                  </a>
                  <input
                    type="search"
                    ref="searchBox"
                    placeholder="Search for Brand or Products"
                    className="search-keyword"
                    onChange={this.props.handleSearch}

                  />
                  <button
                    className="search-button"
                    type="submit"
                    onClick={this.handleSubmit.bind(this)}
                  />
                </form>

              </div>

              <div className="search mt-2">
                <button
                  className="search-button"
                  href="#"
                  onClick={this.handleSearchNav.bind(this)}>
                  <FontAwesomeIcon icon='sort-alpha-down' onClick={this.sortBy.bind(this)} className='float-right' />

                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
