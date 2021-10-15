import React from 'react';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';
import MyResumePort from './myresumeport';
import { data } from 'jquery';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

class MyresumePortfolio extends React.Component {
    constructor(props){
        super(props)
        var user = cookie.load('login-user');
        var state = this.props.state;
        
        this.state = {cookieid : user, ownerid : state.userID, index : state.index};
        //this.GetUserBookmarkData()
    }

    handleRoute = () => {
        console.log('EDITRESUMETAB5');
        cookie.save('Edit_tabselect', 'editresumetab5');
        window.location = ("editresume");
    }
    /*GetUserBookmarkData(){
        var token = cookie.load('login-token');
        var userid = cookie.load('login-user');
        console.log(userid);
        /*setInterval(() => {
            fetch("http://localhost:2000/bookmark/"+userid+"&&time",{
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"},
            })
            .then(response => response.json())
            //.then(response => response.result)
            .then((datas) => {
                console.log(datas);
            }).catch((error) => {
                console.log(error);
                });
        }, 5000);
    }*/
    render() {
        const monthdict = {
            1: "มกราคม",
            2: "กุมภาพันธ์",
            3: "มีนาคม",
            4: "เมษายน",
            5: "พฤษภาคม",
            6: "มิถุนายน",
            7: "กรกฎาคม",
            8: "สิงหาคม",
            9: "กันยายน",
            10: "ตุลาคม",
            11: "พฤศจิกายน",
            12: "ธันวาคม",
            99: "ยังอยู่ในงาน"
        };
        const portfolios = this.props.data? this.props.data: [];
        const owner_status = true;

        console.log(this.state);
        

        let clean_data = [];
        let day;
        for(var i=0; i<portfolios.length; i++){
            day = portfolios[i].Port_Date.split("/");
            
            clean_data.push({
                link: ("portinfo/" + portfolios[i]._id),
                port_id: portfolios[i]._id,
                port_name: portfolios[i].Port_Name,
                image: portfolios[i].portfolioPictures[0].Pic[0]? portfolios[i].portfolioPictures[0].Pic[0]: "assets/images/ldwithgradient.png",
                date: day[0] + " "+ monthdict[parseInt(day[1])] + " " + day[2],
                privacy: portfolios[i].Port_Privacy,
                owner: owner_status
            });
        }
        console.log(clean_data);
        
        let portcontent = [];
        for(var j=0; j<clean_data.length; j++){
            console.log(clean_data[j]);
            portcontent.push(<div>
                {/*<h1>{clean_data[i].port_name}</h1>
                <p>{clean_data[i].date}</p>*/}
    
                <MyResumePort data={clean_data[j]}></MyResumePort>
            </div>);
        }

        if (data.length == 0) {
            return (
                <div class="work-goals-woNb">
                    <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลผลงานที่เลือกไว้ สำหรับตำแหน่งงานนี้</h4>
                    <button class="work-goals-btn" onClick={this.handleRoute}>เลือกข้อมูล</button>
                    <div class="wgs"></div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="img-sp"></div>
                    <MyResumeportfoliolayoutP>
                        {portcontent}
                    </MyResumeportfoliolayoutP>
                </div>
            );
        }
    }
}
export default MyresumePortfolio;