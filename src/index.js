import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './components/CartComponent/Cart';
import ProductEdit from './components/CartComponent/ProductEdit';
import './assets/css/bootstrap.min.css'
import './assets/css/agency.min.css'

import {
    BrowserRouter,
    Route,
} from 'react-router-dom'

class MainIndex extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <BrowserRouter>
                <div>

                    <Route
                        exact
                        path="/Product"
                        component={Cart}
                    />

                    <Route
                        exact
                        path="/ProductEdit/:id"
                        component={ProductEdit}
                    />



                </div>
            </BrowserRouter>

        )
    }


}

ReactDOM.render(
    <MainIndex />,
    document.getElementById('root')
);

