import React from 'react';
import Navbar from './navbar';
import './myresumeTemplate.css'

class MyResumeTemplate extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value_color: "#FE9666", selectedOption: "#FE9666" };
    }

    handleChange = e => {
        this.setState({
            value_color: e.target.value,
            selectedOption: e.target.value
        });
        console.log(`name: ${this.state.value_color}`);
    };

    render() {
        return (
            <div class="myresumeTemplate">
                <Navbar />
                <div class="layout-template">

                    <div class="template-header">
                        <h1 class="inline" id="text-choose-template">เลือกเทมเพลต</h1>
                        <h1 class="inline" id="text-display-info"><span id="span-text-display-info">></span> เลือกข้อมูลผู้ใช้ที่จะแสดง</h1>
                    </div>

                    <div class="template-content">
                        <div class="choose-color-template11">
                            <h1 id="text-choose-color-template11">เลือกสีที่เข้ากันและบ่งบอกถึงตัวคุณ</h1>
                            <div class="grid-choose-template">
                                <label id="red-template1" class="choose-template-color" for="template-color-FF7370">
                                    <div class="circle-color-template"></div>
                                    <h1 class="text-template1">แดง</h1>
                                    <input
                                        id="template-color-FF7370"
                                        value="#FF7370"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FF7370"}
                                        name="platform"
                                        type="radio"
                                    />
                                </label>
                                <label id="orange-template1" class="choose-template-color user-choose-template" for="template-color-FE9666">
                                    <div class="circle-color-template"></div>
                                    <h1 class="text-template1">ส้ม</h1>
                                    <input
                                        id="template-color-FE9666"
                                        value="#FE9666"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FE9666"}
                                        name="platform"
                                        type="radio"
                                    />
                                </label>
                                <label id="yellow-template1" class="choose-template-color" for="template-color-FFCE55">
                                    <div class="circle-color-template"></div>
                                    <h1 class="text-template1">เหลือง</h1>
                                    <input
                                        id="template-color-FFCE55"
                                        value="#FFCE55"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#FFCE55"}
                                        name="platform"
                                        type="radio"
                                    />
                                </label>
                                <label id="green-template1" class="choose-template-color" for="template-color-01B8AA">
                                    <div class="circle-color-template"></div>
                                    <h1 class="text-template1">เขียว</h1>
                                    <input
                                        id="template-color-01B8AA"
                                        value="#01B8AA"
                                        name="platform"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#01B8AA"}
                                        type="radio"
                                    />
                                </label>
                                <label id="lightblue-template1" class="choose-template-color" for="template-color-32A3C7">
                                    <div class="circle-color-template"></div>
                                    <h1 class="text-template1">ฟ้า</h1>
                                    <input
                                        id="template-color-32A3C7"
                                        value="#32A3C7"
                                        onChange={this.handleChange}
                                        checked={this.state.selectedOption === "#32A3C7"}
                                        name="platform"
                                        type="radio"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default MyResumeTemplate;