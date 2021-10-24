import React from "react";

class Forgotpasswordw extends React.Component{
    
    render() {
        
        return(
            <div class="formbox">
                <h3>
                    ลืมรหัสผ่าน
                </h3>
                <p class="verifyan">ขณะนี้ระบบส่งอีเมลให้คุณเรียบร้อยแล้ว</p>
                <p>
                        
                    กรุณาตรวจสอบอีเมลในกล่อง Inbox ของคุณ จากนั้นให้คลิกลิงก์ที่ได้รับ เพื่อทำการกรอกรหัสผ่านใหม่ 
                </p>
                <p>รอเกิน 5 นาทีแล้ว? แต่ยังไม่ได้รับอีเมล กรุณาลองใหม่อีกครั้ง <a href="forgotpassword" style={{color: "black", fontWeight: 900 }}>ลืมรหัสผ่าน</a></p>
            </div>
                
        );
    }
}
export default Forgotpasswordw;