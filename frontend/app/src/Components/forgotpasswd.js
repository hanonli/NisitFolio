import React from "react";
//import Navbar from './navbar';
//import './index.css';
//import "./forgotpass.css";
//import cookie from 'react-cookies';
//import { set } from "date-fns";

class Forgotpasswordm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', alert: '', err: 0};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    

    handleSubmit(event) {
        fetch("https://nisitfolio-backend.herokuapp.com/forgot/send" ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.value })
        }).then(function(response) {
            console.log(response);
            if(response.ok){
                //console.log("complete");
                window.location = ("forgotpassword/waitforverify");
            }
            return response.json();
            /*else{
                /*this.setState({alert: "ไม่พบอีเมลดังกล่าว"});
                this.setState({err: 1});
                console.log("kuay");
                
            }*/
        })
        /*.then(response => response.json())*/
        .then(data => {
            console.log(data.message);
            if(data.message.includes('email must be an email')){
                this.setState({alert: "กรุณากรอกอีเมล"});
                this.setState({err: 1});
            }
            else if(data.message.includes('No User with this Emails')){
                this.setState({alert: "ไม่พบอีเมลดังกล่าวในระบบ"});
                this.setState({err: 1});
            }
            else if(data=== null){
                console.log("complete");
            }
            
        });

        event.preventDefault();
    }
    
    render() {
        /*var token = this.props.match.params.token;
        console.log(token);
        var user = cookie.load('login-user');
        if(user !== "none"){
            window.location = ("home");
        }*/
        let eclass;
        if(this.state.err === 0){
            eclass = "emailfbox";
        }
        else{
            eclass = "emailebox";
        }
        return(
            <div class="formbox">
                <h3>
                    ลืมรหัสผ่าน
                </h3>
                <p>
                    เพื่อเปลี่ยนรหัสผ่านของคุณ กรุณากรอกอีเมลที่คุณใช้ในการเข้าสู่ระบบของ NisitFolio ในช่องด้านล่างนี้
                </p>
                <form onSubmit={this.handleSubmit}>
                    
                    <input class={eclass} type="email" value={this.state.value} onChange={this.handleChange} />
                    
                    <input class="submitmail" type="submit" value="ยืนยัน" />
                </form>
                <p class="alerttext">{this.state.alert}</p>
            </div>
            
        );
    }
}
export default Forgotpasswordm;