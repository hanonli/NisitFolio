import React, { useState } from 'react'
import './signIn_land.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*SignInLand.propTypes = {
    setToken: PropTypes.func.isRequired
};*/

class SignInLand extends React.Component {
    constructor() {
        super();
        this.state = { user: "", password: "", id_form: "inputform1", myToken: "" };
    }

    myChangeHandler_email = (event) => {
        this.setState({ user: event.target.value });
    }

    myChangeHandler_password = (event) => {
        this.setState({ password: event.target.value });
    }

    async loginUser(credentials) {
        console.log(`credentials: ${credentials["Email"]}`);
        return fetch('http://localhost:2000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    handleSubmit = async e => {
        e.preventDefault();
        const result = await this.loginUser({
            username: this.state.user,
            password: this.state.password
        });
        //setToken(token);
        console.log(`token: ${result["message"]}`);
        console.log(`email: ${this.state.user}`);
        console.log(`password: ${this.state.password}`);
        if ('accessToken' in result) {
            this.setState({myToken: result["accessToken"]});
            console.log(`token: ${this.state.myToken}`);
        }
        else {
            console.log(`nha hee`);
            this.setState({ id_form: "inputform2_error" });
        }
    }

    /*componentDidMount() {
        var url = ''
        var token = this.state.myToken
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.setRequestHeader('Authorization', 'token ' + token)
        xhr.send(null)
    }*/

    render() {
        return (
            <div className="bg_form">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <div class="container-fluid">
                    <form id="formSingin" onSubmit={this.handleSubmit}>
                        <h1 id="signIn_h1">เข้าสู่ระบบ</h1>
                        <br />
                        <div class="form-group" id="EmailIn">
                            <label class="distancing112" id="labelText">อีเมล</label>
                            <input type="email" onChange={this.myChangeHandler_email} class="form-control effect1" id={this.state.id_form} />
                        </div>
                        <br />
                        <div class="form-group" id="PasswordIn">
                            <label class="distancing112" id="labelText">รหัสผ่าน</label>
                            <input type="password" onChange={this.myChangeHandler_password} class="form-control effect1" id={this.state.id_form} />
                        </div>
                        <div id="buttom1125" class="text-center fixld">
                            <button type="submit" class="btn btn-cta-primary-yellow round profile-button" id="buttonLogIn112">เข้าสู่ระบบ</button>

                            <p class="forgot-password text-right fgt" id="forgetText112">
                                <a href="#" >ลืมรหัสผ่าน?</a>
                            </p>
                            <br />
                            <Link to="/agreement">
                                <button type="submit" class="btn btn-lg btn-primary deep-purple btn-block" id="buttonSignIn112">สมัครสมาชิก</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default SignInLand;