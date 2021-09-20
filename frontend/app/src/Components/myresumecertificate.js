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
        }, 5000)
    }
    render(){
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        let data = this.props.data;
        const mode = this.props.seq? this.props.seq: 0;
        let content = []
        
        if((mode%2)===0){
            content.push(
                <div class="cert-info-w">
                    <div class="cert-item">
                        <h3>
                            {data.CertName}
                        </h3>
                        <h4>
                            {data.CertYear}
                        </h4>
                    </div>
                        
                </div>
            );
            content.push(
                <div class="cert-image">
                    <div class="cert-img">
                    <img
                        src={data.CertPic}
                    />
                    </div>
                </div>
            );
            content.push(
                <div class="cert-info-w">
                    <div class="cert-item">
                        <h3>
                            {data.CertName}
                        </h3>
                        <h4>
                            {data.CertYear}
                        </h4>
                    </div>
                </div>
            );
        }
        else{
            content.push(
                <div class="cert-info-c" style={linestyle}>
                    <div class="cert-item">
                        <h3>
                            {data.CertName}
                        </h3>
                        <h4>
                            {data.CertYear}
                        </h4>
                    </div>
                </div>
            );
            content.push(
                <div class="cert-info-c" style={linestyle}>
                    <div class="cert-item">
                        <h3>
                            {data.CertName}
                        </h3>
                        <h4>
                            {data.CertYear}
                        </h4>
                    </div>
                </div>
            );
            content.push(
                <div class="cert-image">
                    <div class="cert-img">
                        <img
                            src={data.CertPic}
                        />
                    </div>
                </div>
            );
        }
        return (
            <div class="cert-element">
                <div class="cert-child">{content[this.state.Number]}</div>
            </div>
        )
    }
}


class MyresumeCertificate extends React.Component{
    
    render(){
        const colour = this.props.colour? this.props.colour: "#FFCE55";
        const data = [{
            "id": "6135805ad633f137e4559260",
            "UserId": "61358059d633f137e455925c",
            "ResumeId": "6135805ad633f137e4559260",
            "CertName": "การแข่งขันการ์ดยูกิ",
            "CertPic": "assets/images/certi_ex.jpeg",
            "CertYear": 1999
        },
        {
            "id": "6135805bd633f137e4559261",
            "UserId": "61358059d633f137e455925c",
            "ResumeId": "6135805bd633f137e4559261",
            "CertName": "การแข่งขันเอกอิเอ้กเอ้กก",
            "CertPic": "assets/images/certi_ex3.jpeg",
            "CertYear": 2002
        }];
        return(
            <div class="row">
                <div class="column"><MyresumeCertificateComponent data={data[0]} seq={0}></MyresumeCertificateComponent></div>
                <div class="column"><MyresumeCertificateComponent data={data[1]} seq={1}></MyresumeCertificateComponent></div>
                
            </div>
        );        
    }
} 

export default MyresumeCertificate;