import React, { Component } from 'react'
import Navigationbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import "../stylesheets/portfolio.css";
import "../stylesheets/map.css";
import "../stylesheets/contactBtn.css";
import img1 from "../asset/Image/resize2.jpg";
import img3 from "../asset/Image/sample5.png";
import img4 from "../asset/Image/ban1.jpg";
import img2 from "../asset/Image/sample6.png";
import SectionOne from './SectionOne';
import Footer from './Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Photography from './Photography';
import Films from './Films';
import ContactUs from './ContactUs';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Router>
                <Navigationbar>
                </Navigationbar>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <SectionOne />}
                        ></Route>
                        <Route
                            exact
                            path="/photo-portfolio"
                            render={props => <SectionOne />}
                        ></Route>
                        <Route
                            exact
                            path="/photography"
                            render={props => <Photography />}
                        ></Route>
                        <Route
                            exact
                            path="/films"
                            render={props => <Films />}
                        ></Route>
                        <Route
                            exact
                            path="/contactus"
                            render={props => <ContactUs />}
                        ></Route>
                    </Switch>
                <Footer>
                </Footer>
                </Router>
            </div>
        )
    }
}
