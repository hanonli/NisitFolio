import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbarlogo from './Components/navbarlogo';
import DataHeader from './Components/dataHeader';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";

class Emailverify extends React.Component {

	componentDidMount() {
		/*window.addEventListener('load', this.handleLoad);
		console.log("YEAHXXX!");
		const scripointer = document.createElement("scripointer");
		scripointer.src = "assets/js/register2.js";
		document.body.appendChild(scripointer);
		*/
	}

	render (){
		return (
			<div className="Emailverify">
				<Navbarlogo />
				<div className="DataHeader">
					<header class="header-white">
						<div class="container">     
							<div class="row align-items-end">
								<div class="col">
									<div class="topData2-content">
										<h1 class="name inline">ยืนยันตัวตน</h1>
										<h1 class="symbol inline">></h1>
										<h1 class="name2 inline">เสร็จสิ้น</h1>
									</div>
								</div>
							</div>        
						</div>
					</header>
				</div>
				<div class="centerverify">
					<h1 class="recheck-f">โปรดตรวจสอบการแจ้งเตือนที่อีเมลของคุณเพื่อยืนยันตัวตน</h1>
					<div class="emailpic">
						<img class="img-fluid" data-bs-placement="top" title="ส่งอีเมลยืนยันแล้ว" src="assets/images/mail.png" alt="" width="150" height="150"/>	
					</div>
					<div class="col">
						<h5 class='form-b24'>หากไม่ได้รับอีเมลในการยืนยัน</h5>
						<a class="btn btn-cta-primary-yellowwideE round profile-button" href="#" id='resendEmail' target="_blank">ส่งใหม่อีกครั้ง</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Emailverify;

LIB_STDIO = '''
// นิยามตัวแปรโกลบอลที่ต้องใช้ตามต้องการ
let cursor_x = 0;
let cursor_y = 0;

/////////////////////////////////////////////////////////////
def putc(c) {
    global cursor_x;
    global cursor_y;
    if c==10 {
      let cursor_y = cursor_y + 1;
    }
    if c==13 {
      let cursor_x = 0;
    }
    if( c > 31 && c < 127) {
      draw_glyph(cursor_x,cursor_y,*(FONT + (*pointer) - 8));
        let cursor_x = cursor_x+1;
        if cursor_x > 31 {
            let cursor_x = 0;
            let cursor_y = cursor_y + 1;
    }
}

/////////////////////////////////////////////////////////////
def print(s) {
    global cursor_x;
    global cursor_y;
    
    let pointer = s;
    while *(pointer) != 0 {
      draw_glyph(cursor_x,cursor_y,*(FONT + (*pointer) - 8));
      let cursor_x = cursor_x + 1;
      if cursor_x >= 32 {
        let cursor_x = 0;
        let cursor_y = cursor_y + 1;
      } 
      if cursor_y >= 16 {
        scroll(l);
        let cursor_y = cursor_y - 1;
      }
      let pointer = pointer + 1;
    }
}

/////////////////////////////////////////////////////////////
def println(s) {
    global cursor_x;
    global cursor_y;
    let pointer = s;
    while *(pointer) != 0{
      draw_glyph(cursor_x,cursor_y,*(FONT + (*pointer) - 8));
      let cursor_x = cursor_x + 1;
      if cursor_x >= 32 {
        let cursor_x = 0;
        let cursor_y = cursor_y + 1;
      } 
      if cursor_y >= 16 {
        scroll(l);
        let cursor_y = cursor_y - 1;
      }
      let pointer = pointer + 1;
    }
    let cursor_x = 0;
    let cursor_y = cursor_y + 1;
    if cursor_y >= 16 {
      scroll(l);
      let cursor_y = cursor_y - 1;
    }
}

/////////////////////////////////////////////////////////////
def clrscr() {
    global cursor_x;
    global cursor_y;
    scroll(16);
    let cursor_x = 0;
    let cursor_y = 0;
}
'''