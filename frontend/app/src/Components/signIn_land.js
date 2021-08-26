import React from 'react'
import './signIn_land.css'
import { Link } from 'react-router-dom';

class SignInLand extends React.Component {
    render() {
        return (
            <div className="bg_form">
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <div class="container-fluid">
                    <form id="formSingin">
                        <h1 id="signIn_h1">เข้าสู่ระบบ</h1>
                        <br />
                        <div className="form-group" id="EmailIn">
                            <label className="distancing112" id="labelText">อีเมล</label>
                            <input type="email" className="form-control" id="inputform1" />
                        </div>
                        <br />
                        <div className="form-group" id="PasswordIn">
                            <label className="distancing112" id="labelText">รหัสผ่าน</label>
                            <input type="password" className="form-control" id="inputform1" />
                        </div>
                        <div id="buttom1125" class="text-center fixld">
                            <Link to="/home">
                                <button type="submit" className="btn btn-cta-primary-yellow round profile-button" id="buttonLogIn112">เข้าสู่ระบบ</button>
                            </Link>
                            <p className="forgot-password text-right fgt" id="forgetText112">
                                <a href="#" >ลืมรหัสผ่าน?</a>
                            </p>
                            <br />
                            <Link to="/agreement">
                                <button type="submit" className="btn btn-lg btn-primary deep-purple btn-block" id="buttonSignIn112">สมัครสมาชิก</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInLand;