import React, { Component } from 'react'
import Navigationbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import "../stylesheets/portfolio.css";
import img1 from "../asset/Image/resize2.jpg";
import img3 from "../asset/Image/sample5.png";
import img4 from "../asset/Image/ban1.jpg";
import img2 from "../asset/Image/sample6.png";
import SectionOne from './SectionOne';
import Footer from './Footer';
import { Parallax, Background } from "react-parallax";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    Switch,
    Route,
    NavLink,
    BrowserRouter as Router,
} from "react-router-dom";
import Photography from './Photography';
import Films from './Films';
import ContactUs from './ContactUs';

export default class Root extends Component {
    render() {
        const insideStyles = {
            background: "white",
            padding: 20,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          };
        return (
            <div>
                <Router>
                {/* <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
                </video> */}
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
                {/* <SectionOne>
                </SectionOne> */}
                {/* <div class="image" style={{ backgroundImage: `url(${img2})` }}>
                </div> */}
                {/* <div class="image" style={{ backgroundImage: `url(${img1})` }}>
                </div> */}
                {/* <div class="image" style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/56f65cf85559866730c088c2/1541530435632-XO927BNZPFXG00TYK4ZZ/ke17ZwdGBToddI8pDm48kIisVeufsLaqPYS75OuX1FxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGUIyZMpo6jDvOlV8ELZznZDi-rr9EJ6o3n8IpvEJDIMaEcAfnVBrEqrgp1UxUHGkY/ezgif.com-video-to-gif.gif)` }}>
                </div> */}
                {/* <div class="image" style={{ backgroundImage: `url(${img7})` }}>
                </div> */}
                <Footer>
                </Footer>
                </Router>
            </div>
        )
    }
}