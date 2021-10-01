import React from 'react';
import cake1 from './Cake1.JPG';
import cake2 from './Cake2.JPG';
import cake3 from './Cake3.JPG';
import './App.css';

export default class Home extends React.Component {


  render() {


    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,.5)" }} id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/home">Home</a>
            <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
        <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart">Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/TrackOrder">Tracker</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/profile">{localStorage.getItem("role")} Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger"  href="/">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Our Bakery Online Shop!</div>
              
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/cart">Shop Now!</a>
            </div>
          </div>
        </header>


        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Products</h2>
                <h3 className="section-subheading text-muted">Baked with heart full of love.</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
              <img src={cake2} id="cake2" alt="Little Cupcakes"></img>
                <h4 className="service-heading">Little Cupcakes</h4>
                <p className="text-muted">  Cupcakes. Cakes in a thin, paper cup. They are toppled with gallons of frosting and adorned with hard shapes of colored sugar. I don't know which is better, though. A square piece of cake? Or cake in a cup? </p>
              </div>
              <div className="col-md-4">
              <img src={cake1} id="cake1" alt="Celebration Cakes"></img>
                <h4 className="service-heading">Celebration Cakes</h4>
                <p className="text-muted"> Celebration Cakes. Decorate this simple elderflower and lemon cake with edible flowers for a showstopping celebration dessert. It's perfect for a wedding or birthday.</p>
              </div>
              <div className="col-md-4">
              <img src={cake3} id="cake3" alt="Fruit Desserts"></img>
                <h4 className="service-heading">Fruit Desserts</h4>
                <p className="text-muted">Fruit Dessert. A dessert such as a pastry, pie, or other baked product containing fresh cut or cooked fruit.</p>
              </div>
            </div>
          </div>
        </section>


       


        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Your Website 2020</span>
              </div>
              <div className="col-md-4">
               
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#something">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

