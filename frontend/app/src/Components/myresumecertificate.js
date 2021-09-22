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
        }, 20000)
    }
    callname() {
        console.log("gotclick!");
    }
    render(){
        const linestyle = {
            backgroundColor: this.props.colour? this.props.colour: "#FFCE55"
        };
        const colourcode = this.props.colour? this.props.colour : "#FFCE55";
        const bordercode = "0.5vw solid " + colourcode;
        const boxcolourstyle = {
            border: bordercode,
        };
        let data = this.props.data;
        const mode = this.props.seq? this.props.seq: 0;
        let content = []
        let classofcert;
        if((mode%2)===0){
            classofcert = "cert-element-w";
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
            classofcert = "cert-element-c";
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
        const modalID = "modalofcert" + mode;
        const callmodalID = "#" + modalID;
        return (
            <div class="cert-box" data-bs-toggle="modal" data-bs-target={callmodalID}>
                <div class={classofcert}>
                    <div class="cert-child">{content[this.state.Number]}</div>
                </div>
                <div class="cert-overlay">
                    <div class="cert-overlaybox">  
                        <div class="cert-overlayitem">
                            <h3>
                                {data.CertName}
                            </h3>
                            <h4>
                                {data.CertYear}
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id={modalID} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered cert-modal-dialog" >
                        <div class="cert-modal">
                            <div class="cert-modal-header">
                                <button type="button" class="btn-close cert-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body cert-modal-body">
                                <img class="cert-modal-image"
                                        src={data.CertPic} style={boxcolourstyle}
                                />
                                <div class="cert-modal-discription">
                                    <h2 class="cert-modal-name">{data.CertName}</h2>
                                    <p class="cert-modal-year">{data.CertYear}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                
        )
    }
}


class MyresumeCertificate extends React.Component{
    
    render(){
        const colour = this.props.colour? this.props.colour: "#FFCE55";
        const linestyle = {
            backgroundColor: colour
        };
        const data = this.props.data? this.props.data: [];
        data.sort((a, b) => (a.CertYear < b.CertYear) ? 1 : -1)
        let content = [];
        if(data.length !==0){
            for (var i = 0; i < data.length; i++) {
                content.push(<div class="cert-column"><MyresumeCertificateComponent data={data[i]} colour={colour} seq={i}></MyresumeCertificateComponent></div>);
                console.log(data[i]);
            }
        }
        else{

        }
        return(
            <div class="certificate-data" id="resume-certificate">
                <div class="educationtopic"><h2 class="resumetopic">เกียรติบัตรและใบรับรอง</h2></div>
                <div class="resumesectionline" style={linestyle}></div>
                <div class="cert-show">
                    <div class="cert-row">
                        {content}
                    </div>
                </div>
            </div>
        );        
    }
} 

export default MyresumeCertificate;