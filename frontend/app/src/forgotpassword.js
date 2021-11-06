import React from "react";
import Navbar from './Components/navbar';
import './index.css';
import "./forgotpass.css";
import cookie from 'react-cookies';
import { set } from "date-fns";
import Forgotpasswordm from "./Components/forgotpasswd";
import Forgotpasswordw from "./Components/waitverpass";
import Forgotpasswordr from "./Components/resetpasswd";
import Forgotpasswordc from "./Components/resetpasscomp";

class Forgotpassword extends React.Component{
    render() {
        var token = this.props.match.params.token;
        console.log(token);
        //disable
        //var user = cookie.load('login-user');
        /*if(user !== "none"){
            window.location = ("home");
        }*/
        var token = this.props.match.params.token?this.props.match.params.token:"none";
        console.log(token);
        let res;
        if(token==="none"){
            res = (
                <Forgotpasswordm></Forgotpasswordm>
            );
        }
        else if(token==="waitforverify"){
            res = (
                <Forgotpasswordw></Forgotpasswordw>
            );
        }
        else if(token==="completed"){
            res = (
                <Forgotpasswordc></Forgotpasswordc>
            );
        }
        else{
            res = (
                <Forgotpasswordr token={token}></Forgotpasswordr>
            );
        }
        return(
            <div class="forgotpassword">
                <Navbar/>
                <img src="/assets/images/ldwithgradient.png" width="100%" height="100%"></img>
                {res}
            </div>
                
        );
    }
}
export default Forgotpassword;