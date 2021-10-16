import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import cookie from 'react-cookies';

class Navbar2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        console.log("Mounted Navbar script!");
        const script = document.createElement("script");
        script.src = "assets/js/navbar.js";
        document.body.appendChild(script);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
        console.log("Navbar script loaded!");
    }

    render() {

        return (
            <div className="Navbar">
                <nav class="navbar-2 navbar-no-vertical-padding navbar-expand-lg navbar-light bg-light">
                    <div class="nav-flex">
                        <div class="nvw1">
                            <div class="lg-view">
                                <a class="navbar-brand">
                                    <Link to="/landing">
                                        <img src="assets/images/nav-bar-icon.png" alt="" width="146" height="26" />
                                    </Link>
                                </a>
                            </div>
                            <a class="sm-view navbar-brand-sm">
                                <Link to="/home">
                                    <img src="assets/images/logo2_noname_new.png" alt="" width="60" height="60" />
                                </Link>
                            </a>
                        </div>

                        <div class="nvw2">
                            <form class="nvf">
                                <input class="form-control btn-search-box home" id="search-input" type="search" placeholder="ค้นหา" aria-label="Search" />
                                <Link to="/search" class="d-flex">
                                    <button class="btn btn-search yellow" type="submit">
                                        <img src="assets/images/search.png" class="fx" alt="" width="20" height="20" />
                                    </button>
                                </Link>
                            </form>
                        </div>
                        <div class="nvw3">
                            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div>
                                <div class="lg-view">
                                    <Link to="/register">
                                        <a class="btn btn-cta-primary nav-round blue regis-mar" id="nav-regis" target="_blank">สมัครสมาชิก</a>
                                    </Link>
                                    <Link to="/landing">
                                        <a class="btn btn-cta-primary-yellow nav-round" id="nav-login" target="_blank">เข้าสู่ระบบ</a>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </nav>
            </div>
        );

    }
}

export default Navbar2;
