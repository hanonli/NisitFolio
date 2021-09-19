import React, { Component } from "react";

class MyresumeCertificateComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {Number : 0}
        this.makeTimer()
      }
      
    makeTimer(){
        setInterval(() => {
            let rand = this.state.Number;
            /*console.log(rand)*/;
            rand += 1;
            rand = rand%3;
            this.setState({Number: rand})
        }, 30000)
    }
    render(){
        let data = this.props.data;
        const mode = this.props.seq? this.props.seq: 0;
        let content = []
        
        if((mode%2)===0){
            content.push(
                <div class="cert-info-w">
                    <h3>
                        {data.CertName}
                    </h3>
                    <h4>
                        {data.CertYear}
                    </h4>
                </div>
            );
            content.push(
                <div class="cert-image">
                    this is image
                </div>
            );
            content.push(
                <div class="cert-info-w">
                    <h3>
                        {data.CertName}
                    </h3>
                    <h4>
                        {data.CertYear}
                    </h4>
                </div>
            );
        }
        else{
            content.push(
                <div class="cert-info-c">
                    <h3>
                        {data.CertName}
                    </h3>
                    <h4>
                        {data.CertYear}
                    </h4>
                </div>
            );
            content.push(
                <div class="cert-info-c">
                    <h3>
                        {data.CertName}
                    </h3>
                    <h4>
                        {data.CertYear}
                    </h4>
                </div>
            );
            content.push(
                <div class="cert-image">
                    this is image
                </div>
            );
        }
        return (
            <div>
                <h1>
                    Random Number : 
                    {this.state.Number}

                    {content[this.state.Number]}


                </h1>
            </div>
        )
    }
}


class MyresumeCertificate extends React.Component{
    render(){
        const data = [{
            "id": "6135805ad633f137e4559260",
            "UserId": "61358059d633f137e455925c",
            "ResumeId": "6135805ad633f137e4559260",
            "CertName": "การแข่งขันการ์ดยูกิ",
            "CertPic": "pic1",
            "CertYear": 1999
        },
        {
            "id": "6135805bd633f137e4559261",
            "UserId": "61358059d633f137e455925c",
            "ResumeId": "6135805bd633f137e4559261",
            "CertName": "การแข่งขันเอกอิเอ้กเอ้กก",
            "CertPic": "pic2",
            "CertYear": 2002
        }];
        return(
            <div>
                <MyresumeCertificateComponent data={data[0]
                    } seq={0}></MyresumeCertificateComponent>
                <MyresumeCertificateComponent data={data[1]} seq={1}></MyresumeCertificateComponent>
            </div>
            
        );        
    }
} 

export default MyresumeCertificate;