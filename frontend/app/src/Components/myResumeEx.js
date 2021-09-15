import React from 'react';

class MyResumeEx extends React.Component {
    render() {
        return (
            <div class="Ex">
                <div class="hide-navEx row del-mg-row">
                    <div class="NavEx1 col-2"></div>
                    <div class="myresume-contentEx1 col-10">
                        <h2>ถ้ายังไม่กางNavbar</h2>
                    </div>
                </div>
                <div class="show-navEx row del-mg-row">
                    <div class="myresume-contentEx4 col-4">
                        <div class="marginLEx1">
                            <h2>ถ้ากางNavbar ส่วนภาพ</h2>
                            <div class="marginLEx1 marginBEx2">
                                <h5>ข้อมูลติดต่อ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="NavEx2 col-4"></div>
                    <div class="myresume-contentEx3 col-5">
                        <div class="marginLEx1">
                            <h2>ถ้ากางNavbar ส่วน1</h2>
                            <div class="marginLEx1 marginBEx2">
                                <h5>หิวข้าวง่ะ</h5>
                                <h5>แต่ต้องทำงาน</h5>
                            </div>
                        </div>
                        <div class="marginLEx1">
                            <h2>ถ้ากางNavbar ส่วน2</h2>
                            <div class="marginLEx1">
                                <h5>ง่วงนอนจัง</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default MyResumeEx;