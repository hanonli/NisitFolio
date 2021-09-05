import React, { useState } from 'react'
import './signIn_land.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
    /*return fetch('http://localhost:2000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())*/
}

function SignInLand() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        //const token = await loginUser({
        //    user,
        //    password
        //});
        //setToken(token);
        //console.log(`token: ${token}`);
        console.log(`email: ${user}`);
        console.log(`password: ${password}`);
    }

    return (
        <div className="bg_form">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <div class="container-fluid">
                <form id="formSingin" onSubmit={handleSubmit}>
                    <h1 id="signIn_h1">เข้าสู่ระบบ</h1>
                    <br />
                    <div class="form-group" id="EmailIn">
                        <label class="distancing112" id="labelText">อีเมล</label>
                        <input type="email" onChange={e => setUser(e.target.value)} class="form-control" id="inputform1" />
                    </div>
                    <br />
                    <div class="form-group" id="PasswordIn">
                        <label class="distancing112" id="labelText">รหัสผ่าน</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} class="form-control" id="inputform1" />
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

/*SignInLand.propTypes = {
    setToken: PropTypes.func.isRequired
};*/

export default SignInLand;