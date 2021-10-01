import React from 'react';
import Navbar from './navbar';
import './myresumeTemplate.css'

var myTemplate = {
    "#FF7370": "assets/images/previewRR.png",
    "#FE9666": "assets/images/previewRO.png",
    "#FFCE55": "assets/images/previewRY.png",
    "#01B8AA": "assets/images/previewRG.png",
    "#32A3C7": "assets/images/previewRB.png",
}

class MyResumeTemplate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value_color: "#FE9666",
            selectedOption: "#FE9666",
            sample_template: "assets/images/previewRO.png",
            isborder_1: "",
            isborder_2: "",
            isborder_3: "",
            isborder_4: "",
            isborder_5: "",
        };
    }

    handleChange = e => {
        this.setState({
            value_color: e.target.value,
            selectedOption: e.target.value,
            sample_template: myTemplate[e.target.value]
        });
    };

    render() {
        return (
            <div class="myresumeTemplate">
                <Navbar />
                <div class="layout-template">

                    <div class="template-header">
                        <h1 class="inline" id="text-choose-template">เลือกเทมเพลต</h1>
                        <h1 class="inline" id="text-display-info"><span id="span-text-display-info"></span> เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
                    </div>

                    <div class="template-content">
                        <div class="sample-color-template">
                            <img src={this.state.sample_template} width="321px"></img>
                        </div>
                        <div class="choose-color-template11">
                            <h1 id="text-choose-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
                            <div class="grid-choose-template">
                                <div>
                                    <input
                                        id="template-color-FF7370"
                                        value="#FF7370"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FF7370"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-template1" class="choose-template-color-FF7370" for="template-color-FF7370">
                                        <div class="circle-color-template-FF7370"></div>
                                        <div class="text-template11">แดง</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="template-color-FE9666"
                                        value="#FE9666"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FE9666"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-template1" class="choose-template-color-FE9666" for="template-color-FE9666">
                                        <div class="circle-color-template-FE9666"></div>
                                        <div class="text-template22">ส้ม</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="template-color-FFCE55"
                                        value="#FFCE55"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FFCE55"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-template1" class="choose-template-color-FFCE55" for="template-color-FFCE55">
                                        <div class="circle-color-template-FFCE55"></div>
                                        <div class="text-template33">เหลือง</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="template-color-01B8AA"
                                        value="#01B8AA"
                                        name="platform"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#01B8AA"}
                                        type="radio"
                                    />
                                    <label id="color-template1" class="choose-template-color-01B8AA" for="template-color-01B8AA">
                                        <div class="circle-color-template-01B8AA"></div>
                                        <div class="text-template44">เขียว</div>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        id="template-color-32A3C7"
                                        value="#32A3C7"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#32A3C7"}
                                        name="platform"
                                        type="radio"
                                    />
                                    <label id="color-template1" class="choose-template-color-32A3C7" for="template-color-32A3C7">
                                        <div class="circle-color-template-32A3C7"></div>
                                        <div class="text-template55">ฟ้า</div>
                                    </label>
                                </div>

                                <div>
                                    <div class="text-info-template11">สีของเทมเพลตจะใช้กับ<br />ทุกตำแหน่งงาน และผู้ใช้<br />สามารถแก้ไขภายหลังได้</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="arrow2nextpage_template">
                        <img src="assets/images/arrowwithyellow.png"></img>
                    </div>
                </div>
            </div>

        );
    }
}

export default MyResumeTemplate;