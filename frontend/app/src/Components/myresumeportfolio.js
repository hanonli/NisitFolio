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
        let whosee;
        if(user==="none"){
			console.log("it's none");
            whosee = "guest";
		}
        else if(user===state.userID){
            whosee = "owner";
        }
        else{
            whosee = "other";
        }
        this.state = {cookieid : user, ownerid : state.userID, index : state.index, data1 : [], data2 : [], data3 : [], seeby : whosee};
        this.GetUserPortData()
    }

    handleRoute = () => {
        cookie.save('Edit_tabselect', 5);
        window.location = ("editresume");
    }
    GetUserPortData(){
        var id = this.state.ownerid;
        var seeby = this.state.seeby;
        fetch("http://localhost:2000/myresume/portfolio/"+ id + "/" + seeby).then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({data1: data[0]});
            this.setState({data2: data[1]});
            this.setState({data3: data[2]});
        });
        
    }
    render() {
		const linestyle = {
            backgroundColor:  this.props.state.color ? this.props.state.color : "#FFCE55"
        };
        const color = this.props.state.color;
		console.log(this.state.data1);
        var index = this.props.state.index;
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

        let mydata = [];
        mydata.push(this.state.data1);
        mydata.push(this.state.data2);
        mydata.push(this.state.data3);
        const portfolios = mydata[index];//this.props.data? this.props.data: [];
        const owner_status = this.props.state.is_owner;
        console.log(owner_status);
        console.log(this.state);
        
        console.log(portfolios);
        let clean_data = [];
        let day;
        let udate;
        for(var i=0; i<portfolios.length; i++){
            if(portfolios[i].Port_Date !== null){
                day = portfolios[i].Port_Date.split("/");
                udate = day[0] + " "+ monthdict[parseInt(day[1])] + " " + day[2];
            }
            else{
                day = portfolios[i].create_time.split(" ");
                udate = day[0] + " " + day[1] + " " + day[2];
            }
            clean_data.push({
                link: ("portinfo/" + portfolios[i]._id),
                port_id: portfolios[i]._id,
                port_name: portfolios[i].Port_Name,
                image: portfolios[i].portfolioPictures[0].Pic[0]? portfolios[i].portfolioPictures[0].Pic[0]: "assets/images/ldwithgradient.png",
                date: udate,
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
        let topicele = (
            <div class="myresume-mywork-woNb">
                <div class="educationtopic">
                    <h2 class="myresume-head-woNb">ผลงานของฉัน</h2>
                </div>
                <div class="resumesectionline" style={linestyle}></div>
            </div>
        );
        if ((clean_data.length == 0)&&(owner_status)) {
            return (
                <div>
                    {topicele}
                    <div class="work-goals-woNb">
                        <h4 class="text-work-goals-wdata">ตอนนี้คุณยังไม่มีข้อมูลผลงานที่เลือกไว้ สำหรับตำแหน่งงานนี้</h4>
                        <button class="mywork-btn" onClick={this.handleRoute}>เลือกข้อมูล</button>
                        <div class="wgs"></div>
                    </div>
                </div>
            );
        }
        else if((clean_data.length == 0)&&(!owner_status)){
            return(<div></div>);
        }
        else {
            return (
                <div>
                    {topicele}
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