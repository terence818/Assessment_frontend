import React, { Component } from "react";
import "../..//CSS/Profile.css";
import axios from "axios";
import ErrorMessage from '../GeneralComponent/ErrorMessage'
import network from "../../utils/network";

class ProductEdit extends Component {

    constructor(props) {
        super(props);
        this.errorMessage = React.createRef()
    }

    state = {
        brand: "",
        product_name: "",
        barcode: "",
        image: ""
    }

    // state = {
    //     brand: this.props.location.product.brand || "",
    //     product_name: this.props.location.product.product_name || "",
    //     barcode: this.props.location.product.barcode || "", 
    // }


    componentDidMount() {

        this.getEditProduct();
    }

    getEditProduct() {
        network.post("http://localhost:9020/getEditProduct", {
            id: this.props.match.params.id,

        }).then(function (resp, status, headers, config) {

            if (resp.data.errormessage === "000") {
                console.log(resp.data.message)
                this.setState({

                    brand: resp.data.message[0].brand,
                    product_name: resp.data.message[0].product_name,
                    barcode: resp.data.message[0].barcode,
                    image: resp.data.message[0].image


                });

            }
        }.bind(this))
            .catch(function (error) {
            });
    }

    postEditProduct() {
        network.post("http://localhost:9020/getEditProduct", {
            id: this.props.match.params.id,

        }).then(function (resp, status, headers, config) {

            if (resp.data.errormessage === "000") {
                console.log(resp.data.message)
                this.setState({
                    products: resp.data.message
                }, () => {


                });

            }
        }.bind(this))
            .catch(function (error) {
            });
    }




    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }

    onChangeProductName(e) {
        this.setState({
            product_name: e.target.value
        })
    }

    onChangeBarcode(e) {
        this.setState({
            barcode: e.target.value
        })
    }

    submit() {

        let data = {}


        if (!this.state.brand) {
            this.errorMessage.current.setErrorMessage('Please enter the Brand value.', true, false)
            return
        } else if (!this.state.product_name) {
            this.errorMessage.current.setErrorMessage('Please enter the product name value.', true, false)
            return
        } else if (!this.state.barcode) {
            this.errorMessage.current.setErrorMessage('Please enter the barcode value.', true, false)
            return
        } 

        data = {
            id: this.props.match.params.id,
            brand: this.state.brand,
            product_name: this.state.product_name,
            barcode: this.state.barcode
        }



        axios.post("http://localhost:9020/postEditProduct", data).then(function (resp, status, headers, config) {
            if (resp.data.errormessage === "000") {


                alert("Update Successfull")
            }
            else {
                alert('Update failed')
            }
        }.bind(this))
            .catch(function (error) {

                alert('Please try again later')
            });

    }

    cancel() {
        window.location.replace("/product")
    }

    render() {


        return (

            <div class="edit-Product">
                <div class="container">
                    <div class="product-wrapper">
                        <ErrorMessage ref={this.errorMessage} />
                        <div className="row">
                            <div className="col-4">
                                <div class="form-group">
                                    <div class="form-group-control">
                                        <div id="profile-container">
                                            <label>Product Preview</label>
                                            <img src={"http://localhost:9020/" + this.state.image || ''} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="form-group">
                                    <div class="form-group-control">

                                        <label>Brand</label>
                                        <input type="text" class="form-control" value={this.state.brand || ''} onChange={this.onChangeBrand.bind(this)} id="brand" name="brand" placeholder="Enter Brand"></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-group-control">
                                        <label>Product Name</label>
                                        <input type="text" class="form-control" value={this.state.product_name || ''} onChange={this.onChangeProductName.bind(this)} placeholder="Enter Product Name" id="product_name" name="product_name"></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-group-control">
                                        <label>Barcode</label>
                                        <input type="number" class="form-control" value={this.state.barcode || ''} onChange={this.onChangeBarcode.bind(this)} id="barcode" name="barcode" placeholder="Enter Barcode"></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <button type='button' onClick={this.cancel.bind(this)} className="btn btn-primary btn-md js-scroll-trigger">Cancel</button>
                                        </div>
                                        <div class="col-6">
                                            <button type='button' onClick={this.submit.bind(this)} className="btn btn-primary btn-md js-scroll-trigger">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductEdit;