import React from 'react'
import './signIn_land.css'

class SignInLand extends React.Component {
    render() {
        return (
            <div className="bg_form">
                <div class="container-fluid">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <form id="formSingin">
                        <h1 id="signIn_h1">เข้าสู่ระบบ</h1>
                        <br />
                        <div className="form-group" id="EmailIn">
                            <label id="labelText">อีเมล</label>
                            <input type="email" className="form-control" id="inputform1" />
                        </div>
                        <br />
                        <div className="form-group" id="PasswordIn">
                            <label id="labelText">รหัสผ่าน</label>
                            <input type="password" className="form-control" id="inputform1" />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div id="buttom1125" class="text-center">
                            <button type="submit" className="btn btn-lg btn-primary yellow btn-block" id="buttonLogIn112">เข้าสู่ระบบ</button>
                            <p className="forgot-password text-right" id="forgetText112">
                                <a href="#" >ลืมรหัสผ่าน?</a>
                            </p>
                            <br />
                            <br />
                            <button type="submit" className="btn btn-lg btn-primary deep-purple btn-block" id="buttonSignIn112">สมัครสมาชิก</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInLand;