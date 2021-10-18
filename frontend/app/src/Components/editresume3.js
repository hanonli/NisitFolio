import React from 'react';
import $ from 'jquery';
import './register.css';
import './registab5.css';
import './chooseresume3.css';

var choose_certi = [];
class Editresume3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        /*this.state = {
            data3: this.props.mycerti_data
        }*/
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        var list_of_year_certi = {}; //check year
        var year_before_certi = -1;
        var isCheck_certi = {};
        function compareValues(key, order = 'asc') {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    // property doesn't exist on either object
                    return 0;
                }
                var varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key];
                var varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }
        setTimeout(() => {
            const mycert2 = this.props.mycerti_data ? this.props.mycerti_data : [];
            var tmp1 = [...mycert2];
            tmp1.sort(compareValues('CertYear', 'desc'));
            tmp1.forEach(ele => {
                //isCheck_certi[ele.Certificate_id] = false;
                let grid_certi2 = ` <div id={ele.Certificate_id}>\
                                    <input\
                                        class="input-choose-certi1"\
                                        id="{xxx}"\
                                        type="checkbox"\
                                        name="vehicle1"\
                                        value="{ele.Certificate_idvalue}"\
                                        {ischeck}\
                                        hidden\
                                    />\
                                    <label id="list-certi33" class="card_certi" for="{forxxx}">\
                                        <h1 id="name-of-certi">{ele.CertName}</h1>\
                                        <h1 id="year-of-certi">{ele.CertYear}</h1>\
                                        <div class="pos-pic-of-certi">\
                                            <img height="142" src="{ele.CertPic}" id="border_certi" oncontextmenu="return false;" ondragstart="return false;" ></img>\
                                        </div>\
                                        <div class="icon-checkbox1111"><img height="110" src="assets/images/check_black.png" oncontextmenu="return false;" ondragstart="return false;" ></img></div>\
                                    </label>\
                                </div >`;
                let headOfyear1234 = `  <div id="year-choose-tem-{show-year-resume-certi}"><h1 id="textOfyear_certi">{ele.CertYear}</h1></div>\
                                    <div class="content-certi1" id="{contentYear}"></div>`;
                grid_certi2 = grid_certi2.replace("{xxx}", `xxx` + ele.Certificate_id);
                grid_certi2 = grid_certi2.replace("{ele.Certificate_idvalue}", ele.Certificate_id);
                //grid_certi2 = grid_certi2.replace("{isCheck_certi}", ele.isCheckCert);
                grid_certi2 = grid_certi2.replace("{ischeck}", ele.isCheckCert ? "checked" : "");
                grid_certi2 = grid_certi2.replace("{forxxx}", `xxx` + ele.Certificate_id);
                grid_certi2 = grid_certi2.replace("{ele.CertName}", ele.CertName);
                grid_certi2 = grid_certi2.replace("{ele.CertYear}", ele.CertYear);
                grid_certi2 = grid_certi2.replace("{ele.CertPic}", ele.CertPic);
                if (year_before_certi != ele.CertYear) {
                    list_of_year_certi[ele.CertYear] = 1;
                    year_before_certi = ele.CertYear;
                    headOfyear1234 = headOfyear1234.replace("{ele.CertYear}", ele.CertYear);
                    headOfyear1234 = headOfyear1234.replace("{contentYear}", ele.CertYear);
                    headOfyear1234 = headOfyear1234.replace("{show-year-resume-certi}", ele.CertYear);
                    $(".myresume-choose-certi11").append(headOfyear1234);
                }
                else {
                    list_of_year_certi[ele.CertYear] += 1;
                }
                $("#year-choose-tem-" + String(ele.CertYear)).append(grid_certi2);
            });
        }, 9000);

        $(document).on("click", ".input-choose-certi1", function () {
            choose_certi = $('.input-choose-certi1:input[type=checkbox]:checked').map(function (_, el) {
                return $(el).val();
            }).get();
            console.log("susss:", choose_certi);
        });

        $(document).on("click", ".input-choose-certi1:input:checkbox", function () {
            var bol = $(".input-choose-certi1:input:checkbox:checked").length >= 6;
            $(".input-choose-certi1:input:checkbox").not(":checked").attr("disabled", bol);
        });

        $(document).on("change", ".input-choose-certi1", function () {
            if (choose_certi.length === 6) {
                $("#you-choose-list-resume-certi1").text("คุณเลือกครบ 6 รายการแล้ว");
                $("#you-choose-list-resume-certi1").addClass("you-choose-list-resume-red");
            }
            else if (choose_certi.length === 0) {
                $("#you-choose-list-resume-certi1").text("");
                $("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
            }
            else {
                $("#you-choose-list-resume-certi1").text(`คุณเลือกไปแล้ว ${choose_certi.length} รายการ`);
                $("#you-choose-list-resume-certi1").removeClass("you-choose-list-resume-red");
            }
        });
    }
    componentWillReceiveProps(props) {
        console.log("Gsgsfw");
        console.log(props.mycerti_data);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
        //$(window).unbind('scroll');
    }

    handleLoad() {
        console.log("YEAH!");
    }

    render() {
        return (
            <div className="Registab5">
                <h2 class="head-of-choose-resume-tab3">คุณสามารถเลือกใบรับรองที่สอดคล้องกับตำแหน่งงานที่สนใจได้สูงสุด 6 รายการ</h2>
                <div class="Editresume-box-content1">
                    <div class="myresume-choose-certi11"></div>
                </div>
                <h5 class="you-choose-list-resume" id="you-choose-list-resume-certi1"></h5>
            </div>
        );
    }
}

export default Editresume3;