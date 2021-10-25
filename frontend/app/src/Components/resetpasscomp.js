import React from "react";
import { set } from "date-fns";
class Forgotpasswordc extends React.Component{
    handleRoute() {
        window.location = ("landing");
    }
    render() {
        return(
            <div class="formbox">
                <h2>เปลี่ยนรหัสผ่าน</h2>
                <p class="verifyan inline">เปลี่ยนรหัสผ่านเรียบร้อย</p> <p class="inline">สามารถเข้าสู่ระบบได้เลย</p>
                <button class="loginbut" onClick={this.handleRoute}>เข้าสู่ระบบ</button>
            </div>
        );
        
        
    }
    
}
export default Forgotpasswordc;