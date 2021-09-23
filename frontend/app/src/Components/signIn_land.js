import React from 'react'
import './signIn_land.css'
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'

class SignInLand extends React.Component {
    constructor() {
        super();
        this.state = { user: "", password: "", id_email1: "inputform1", id_password1: "inputform1", invalid_email: "", invalid_password: "", label_text_email: "labelText", label_text_password: "labelText" };
    }

    myChangeHandler_email = (event) => {
        this.setState({ user: event.target.value });
        /*this.setState({ invalid_email: "" });
        this.setState({ id_email1: "inputform1" });
        this.setState({ label_text_email: "labelText" });*/
        this.setState({ invalid_password: "" });
    }

    myChangeHandler_password = (event) => {
        this.setState({ password: event.target.value });
        this.setState({ invalid_password: "" });
        /*this.setState({ id_password1: "inputform1" });
        this.setState({ label_text_password: "labelText" });*/
    }

    async loginUser(credentials) {
        console.log(`credentials: ${credentials["Email"]}`);
        console.log(JSON.stringify(credentials));
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
        /*this.setState({ invalid_email: "" });
        this.setState({ id_email1: "inputform1" });
        this.setState({ invalid_password: "" });
        this.setState({ id_password1: "inputform1" });
        this.setState({ label_text_email: "labelText" });
        this.setState({ label_text_password: "labelText" });*/
        if (this.state.user == "") {
            /*this.setState({ invalid_email: "คุณยังไม่ได้ป้อนอีเมล" });
            this.setState({ id_email1: "inputform2_error" });
            this.setState({ label_text_email: "labelText-error" });*/
            this.setState({ invalid_password: "*คุณไม่มีสิทธิ์เข้าใช้งานระบบ" });
        }
        if (this.state.password == "") {
            this.setState({ invalid_password: "*คุณไม่มีสิทธิ์เข้าใช้งานระบบ" });
            /*this.setState({ id_password1: "inputform2_error" });
            this.setState({ label_text_password: "labelText-error" });*/
        }
        const result = await this.loginUser({
            username: this.state.user,
            password: this.state.password
        });
        //setToken(token);
        console.log(`token: ${result["message"]}`);
        console.log(`email: ${this.state.user}`);
        console.log(`password: ${this.state.password}`);
        console.log(`password: ${result}`);
        if ('accessToken' in result) {
            console.log(`token: ${result["accessToken"]}`);
            //Cookies.set('login-token',result["accessToken"]);
            cookie.save('login-token', result["accessToken"], { path: '/' })
            /*var req = new XMLHttpRequest();
            req.open('get','http://localhost:3000/home',true);
            req.setRequestHeader('Authorization','Bearer '+result["accessToken"]);
            req.send();*/
            window.location.href = "/home";
        }
        else if ('error' in result) {
            /*if (result["error"] == "Wrongpwd") {
                //alert("passwordมึงผิดไอ้ควาย");
                this.setState({ invalid_password: "รหัสผ่านที่คุณป้อนไม่ถูกต้อง" });
                this.setState({ id_password1: "inputform2_error" });
                this.setState({ label_text_password: "labelText-error" });
            }
            else if (result["error"] == "Oldpwd") {
                //alert("passwordเก่า");
                this.setState({ invalid_password: "รหัสผ่านที่คุณป้อนเป็นรหัสผ่านเก่า" });
                this.setState({ id_password1: "inputform2_error" });
                this.setState({ label_text_password: "labelText-error" });
            }
            else if (result["error"] == "Wronguser") {
                //alert("เกเรจนกรอกemailผิด");
                this.setState({ invalid_email: "อีเมลที่คุณป้อนไม่ถูกต้อง" });
                this.setState({ id_email1: "inputform2_error" });
                this.setState({ label_text_email: "labelText-error" });
            }*/
            this.setState({ invalid_password: "*คุณไม่มีสิทธิ์เข้าใช้งานระบบ" });
        }
    }

    render() {
        return (
            <div className="bg_form">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <div class="container-fluid">
                    <form id="formSingin" onSubmit={this.handleSubmit}>
                        <h1 id="signIn_h1">เข้าสู่ระบบ</h1>
                        <br />
                        <div class="form-group" id="EmailIn">
                            <label class="distancing112" id={this.state.label_text_email}>อีเมล</label>
                            <input type="email" onChange={this.myChangeHandler_email} class="form-control effect1" id={this.state.id_email1} />
                            <div class="invalid-text"><h1 class="invalid-email1">{this.state.invalid_email}</h1></div>
                        </div>
                        <br />
                        <br />
                        <div class="form-group" id="PasswordIn">
                            <label class="distancing112" id={this.state.label_text_password}>รหัสผ่าน</label>
                            <input type="password" onChange={this.myChangeHandler_password} class="form-control effect1" id={this.state.id_password1} />
                            <div class="invalid-text"><h1 class="invalid-password1">{this.state.invalid_password}</h1></div>
                        </div>
                        <div id="buttom1125" class="text-center button-signin1 fixld">

                            <button type="submit" className="btn btn-cta-primary-yellow round profile-button" id="buttonLogIn112">เข้าสู่ระบบ</button>

                            <p class="forgot-password text-right fgt" id="forgetText112">
                                <a href="#" >ลืมรหัสผ่าน?</a>
                            </p>
                            <br />
                            <Link to="/register">
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