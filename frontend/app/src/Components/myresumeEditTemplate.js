import React from 'react';
import './myresumeTemplate.css'

var myTemplate = {
    "#FF7370": "assets/images/previewRR.png",
    "#FE9666": "assets/images/previewRO.png",
    "#FFCE55": "assets/images/previewRY.png",
    "#01B8AA": "assets/images/previewRG.png",
    "#32A3C7": "assets/images/previewRB.png",
}

var select_color_template = "#FFCE55";

class MyResumeEditTemplate extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = {
            //value_color: this.props.firstchoosecolor ? "#FFCE55" : this.props.Color_Resume,
            selectedOption: this.props.firstchoosecolor ? "#FFCE55" : this.props.Color_Resume,
            sample_template: myTemplate[this.props.firstchoosecolor ? "#FFCE55" : this.props.Color_Resume],
        };
        select_color_template = this.props.firstchoosecolor ? "#FFCE55" : this.props.Color_Resume; //
    }

    handleChange = e => {
        this.setState({
            //value_color: e.target.value,
            selectedOption: e.target.value,
            sample_template: myTemplate[e.target.value]
        });
        select_color_template = e.target.value; //ใช้ตัวแปรนี้แทน
        console.log("choose color:", select_color_template);
        //console.log("choose color2:", this.state.value_color);
    };

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    handleLoad() {
        console.log("YEAH!");
    }

    componentWillReceiveProps(props) {
        console.log("Color_Resume:", props.Color_Resume);
        console.log("firstchoosecolor:", props.firstchoosecolor);
    }

    render() {
        return (
            <div class="myresumeEditTemplate">
                <div class="Editresume-box-content6">
                    <div class="layout-edit-template">
                        <div class="sample-color-edit-template">
                            <img src={this.state.sample_template} width="245px" oncontextmenu="return false;" ondragstart="return false;"></img>
                        </div>
                        <div class="choose-color-edit-template11">
                            <h1 id="text-edit-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
                            <h5 id="describe-template11-edit">สีของเทมเพลตจะใช้กับทุกตำแหน่งงาน</h5>
                            <div class="grid-edit-template">

                                <div>
                                    <input
                                        id="edit-template-color-FFCE55"
                                        value="#FFCE55"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FFCE55"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-FFCE55" for="edit-template-color-FFCE55">
                                        <div class="circle-color-template-FFCE55-edit"></div>
                                        <div class="text-template33">เหลือง (ค่าเริ่มต้น)</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-FE9666"
                                        value="#FE9666"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FE9666"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-FE9666" for="edit-template-color-FE9666">
                                        <div class="circle-color-template-FE9666-edit"></div>
                                        <div class="text-template22">ส้ม</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-FF7370"
                                        value="#FF7370"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FF7370"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-FF7370" for="edit-template-color-FF7370">
                                        <div class="circle-color-template-FF7370-edit"></div>
                                        <div class="text-template11">ชมพู</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-32A3C7"
                                        value="#32A3C7"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#32A3C7"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-32A3C7" for="edit-template-color-32A3C7">
                                        <div class="circle-color-template-32A3C7-edit"></div>
                                        <div class="text-template55">ฟ้า</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="edit-template-color-01B8AA"
                                        value="#01B8AA"
                                        name="platform"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#01B8AA"}
                                        type="radio"
                                    />
                                    <label id="color-edit-template1" class="edit-template-color-01B8AA" for="edit-template-color-01B8AA">
                                        <div class="circle-color-template-01B8AA-edit"></div>
                                        <div class="text-template44">เขียว</div>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyResumeEditTemplate;