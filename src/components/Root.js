import React, { Component } from 'react'
import Navigationbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import "../stylesheets/portfolio.css";
import "../stylesheets/map.css";
import "../stylesheets/contactBtn.css";
import SectionOne from './SectionOne';
import Footer from './Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollIntoView from "../utilities/ScrollIntoView";
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
                <ScrollIntoView>
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
                        <Route
                            exact
                            path="*"
                            render={props => <SectionOne />}
                        ></Route>
                    </Switch>
                    </ScrollIntoView>
                <Footer>
                </Footer>
                </Router>
            </div>
        )
    }
}
