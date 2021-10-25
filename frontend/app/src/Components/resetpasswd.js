import React from "react";
import { set } from "date-fns";
class Forgotpasswordr extends React.Component{
    constructor(props) {
        super(props);
        this.state = {valuep: '', valuer: '', alertpass: '', errpass: 0, alertrepass: '', errrepass: 0, alert:''};
    
        this.handleChangep = this.handleChangep.bind(this);
        this.handleChanger = this.handleChanger.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(this.state.valuep);
        console.log(this.state.valuer);
        if(this.state.valuep.length < 8){
            this.setState({errpass: 1});
            this.setState({errrepass: 1});
            this.setState({alertpass: "ต้องมีรหัสผ่านอย่างน้อย 8 ตัวอักษร"});
            //alert("8 fail");
            event.preventDefault();
            return(8);//errorendhere
        }
        else if(this.state.valuep !== this.state.valuer){
            this.setState({errrepass: 1});
            this.setState({alertrepass: "คุณกรอกรหัสผ่านทั้งสองช่องไม่ตรงกัน"});
            this.setState({valuer: ''});
            this.setState({valuep: ''});
            event.preventDefault();
            return(2);//errorendhere
        }
        console.log("passall");
        fetch("http://localhost:2000/forgot" ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                token: this.props.token,
                password: this.state.valuep
            })
        }).then(function(response) {
            console.log(response);
            if(response.ok){
                window.location = ("forgotpassword/completed");
            }
            return response.json();
        })
        event.preventDefault();
    }

    handleChangep(event){
        this.setState({valuep: event.target.value});
        this.setState({errpass: 0});
        this.setState({alertpass: ""});
        //console.log(this.state.valuep + ", " + this.state.valuep.length);
        /*if(this.state.valuep.length <8){
            this.setState({errpass: 1});
            this.setState({alertpass: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"});
        }
        else if(this.state.valuep.length === 0){
            this.setState({errpass: 1});
            this.setState({alertpass: "โปรดใส่รหัสผ่าน"});
        }
        else{
            this.setState({errpass: 0});
            this.setState({alertpass: ""});
        }*/
    }

    handleChanger(event){
        this.setState({valuer: event.target.value});
        this.setState({errrepass: 0});
        this.setState({alertrepass: ""});
        //console.log(this.state.valuer + ", " + this.state.valuer.length);
        /*if(this.state.valuer.length <8){
            this.setState({errpass: 1});
            this.setState({alertrepass: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"});
        }
        else if(this.state.valuer.length === 0 && this.state.valuep.length !== 0){
            this.setState({errpass: 1});
            this.setState({alertrepass: "โปรดยืนยันรหัสผ่าน"});
        }

        else if(this.state.valuer.length !== this.state.valuep.length){
            this.setState({errpass: 1});
            this.setState({alertrepass: "รหัสผ่านไม่ตรงกัน"});
        }

        else{
            this.setState({errpass: 0});
            this.setState({alertrepass: ""});
        }*/
    }

    render() {
        console.log(this.props.token);
        let passclass;
        if(this.state.errpass===0){
            passclass = "newpass";
        }
        else{
            passclass = "newpasserr";
        }
        let repassclass;
        if(this.state.errrepass===0){
            repassclass = "newpass";
        }
        else{
            repassclass = "newpasserr";
        }
        let info;
        if(this.state.valuep.length === 0){
            info = (
                <div class="infor"><div class="infop"><img class="inforp" src="/assets/images/information.png"></img>
                <span class="inforssp">รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร</span></div></div>
            );
        }
        else{
            info = (<div></div>);
        }
        return(
            <div class="formbox">
                <h2>เปลี่ยนรหัสผ่าน</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>รหัสผ่านใหม่</p>
                    <div class="passw">
                        <input class={passclass} type="password" value={this.state.valuep} onChange={this.handleChangep} />
                        {info}
                    </div>
                    <p class="alerttext">{this.state.alertpass}</p>
                    <p>ยืนยันรหัสผ่าน</p>
                    <input class={repassclass} type="password" value={this.state.valuer} onChange={this.handleChanger} />
                    <p class="alerttext">{this.state.alertrepass}</p>
                    
                    <input class="changepass" type="submit" value="เปลี่ยนรหัสผ่าน"/>
                    <p class="alerttext">{this.state.alert}</p>
                </form>
            </div>
        );
    }
    
}
export default Forgotpasswordr;