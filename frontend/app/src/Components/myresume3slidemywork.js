import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class MultipleRows extends Component  {
    render(){
        const linestyle = {
            backgroundColor: this.props.colour ? this.props.colour : "#FFCE55"
        };
        const settings = {
            dots: true,
            className: "center",
            infinite: true,
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            slidesToScroll: 3
        };
        return(
            <div>
                <div class="myresume-mywork-woNb" id='resume-resume'></div>
                <div class="educationtopic">
                    <h2 class="myresume-head-woNb">ผลงานของฉัน</h2>
                </div><div class="resumesectionline" style={linestyle}></div>
                <div class="showmywork-woNb">
                    <div class="showmywork">
                        <Slider {...settings}>
                            <div>
                                <div className="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                                
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                            <div>
                                <div class="img-overlay3">
                                    <img className="img-mywork-bookmark" src="assets/images/outline_bookmark_border_white_24dp.png" />
                                    <div className="myworkname">
                                        ASD
                                    </div>
                                    <div className="myworkdate">
                                        1 กันยายน 2900
                                    </div>
                                </div>
                                <img className="img-mywork-1" src="assets/images/ldwithgradient.png" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="myworkb"></div>
            </div >
        );
    }
}