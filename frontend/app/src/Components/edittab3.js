import React, { useState } from 'react';
import Registab3_addHigher from './registab3_addHigher';
import Registab3_addSecondary from './registab3_addSecondary';
import cookie from 'react-cookies'
import ApplicationURL from './path';
import './register.css'
import './registab3.css'
import $ from 'jquery';

class Registab3 extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
          statusUpload31: "",
          imgStatus31: "",
          statusUpload32: "",
          imgStatus32: "",
		  statusDelHeader: "Saved",
          imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png",
		  token: cookie.load('login-token'),
		  render:true,
          status_Eduid_now:""
		};
	  }

    componentDidMount() {
		window.addEventListener('load', this.handleLoad);
		/*const script = document.createElement("script");
		script.src = "assets/js/registab3_script.js";
		document.body.appendChild(script);*/
        var aaa3 = this;
        var list_of_aca,list_of_high;
        var choose_function3 = -1; //default stutus before add(2) or edit(1)
        var choose_function3_2 = -1; //default
        var for_editaca,for_edithigh;
        var myaca = this.props.myaca_data ? this.props.myaca_data : [];
        list_of_aca = [...myaca];
        var myhigh = this.props.myhigh_data ? this.props.myhigh_data : [];
        list_of_high = [...myhigh];
        //console.log(list_of_aca);
        //console.log(list_of_high);
        show_all_aca();
        show_all_high();
        if (list_of_aca.length == 3) {
            $('#aca_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
            $('#aca_danger').addClass('red_markOnly');
            $('.icon-plus-circleA').hide();
        }
        if (list_of_high.length == 3) {
            $('#high_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
            $('#high_danger').addClass('red_markOnly');
            $('.icon-plus-circleH').hide();
        }

        function create_UUID() {
			var dt = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (dt + Math.random() * 16) % 16 | 0;
				dt = Math.floor(dt / 16);
				return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
			return uuid;
		}

		function get_aca_id(list_of_aca, x) {
			//var x = 1;
			list_of_aca.forEach(ele => {
				ele["aca_pos"] = x;
				console.log("x:", x);
				x++;
			});
			return list_of_aca;
		}

        function show_all_aca() {

			list_of_aca.forEach(ele => {
				var grid_aca1 = '<div class="t3-content1 row">\
								<div class="col-3">\
									<div class="font-titlet3_1 font-boldt3">{degree_aca}</div>\
									<div class="font-titlet3_1 font-khotboldt3">{year_aca}</div>\
								</div>\
								<div class="col-9">\
									<div class="font-titlet3_1">{field_aca}</div>\
									<div class="font-titlet3_1">{faculty_aca}</div>\
									<div class="font-titlet3_1">{name_aca}</div>\
									<div class="font-titlet3_1">เกรด {grade_aca}</div>\
								</div>';

				var grid_aca2 = `
								<div class="layer_icon1" id={no-list-aca}>\
									<button type="button" class="btn button1" id="edit-aca"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
									<button type="button" class="btn button2" id="del-aca"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
								</div>\
							</div>`;
				grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
				grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
				//grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
				grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
				grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
				if (ele["aca_grade"] == "0.00") {
					grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
				}
				else {
					grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
				}
				if (ele["aca_field"] == "none") {
					grid_aca1 = grid_aca1.replace("{field_aca}", '-');
				}
				else {
					grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
				}
				if (ele["aca_year"] == "0") {
					grid_aca1 = grid_aca1.replace("{year_aca}", '-');
				}
				else if (ele["aca_year"] == "9999") {
					grid_aca1 = grid_aca1.replace("{year_aca}", 'กำลังศึกษา');
				}
				else {
					grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
				}
				$(".list-of-aca").append(grid_aca1 + grid_aca2);
				console.log(`list_of_aca:`, list_of_aca);
			});
		}
        //func add new aca form
		$(document).on("click", "#add_aca", function () {
			$("#aca_name").removeClass("is-invalid");
			$("#aca_degree").removeClass("is-invalid");
			$("#aca_faculty").removeClass("is-invalid");
			$('#aca_grade').removeClass('is-invalid');
			choose_function3 = 2;
			$('#registab3Modal1').modal('toggle');
			$('#aca_degree').prop('selectedIndex', 0);
			$('#year_secondary').prop('selectedIndex', 0);
			$('#aca_name').val('');
			$('#aca_faculty').val('');
			$('#aca_field').val('');
			$('#aca_grade').val('');
            $('#submit_aca').text = 'เพิ่ม';
		});

		//func edit aca
		var for_editaca, id_list_aca_edit, id_list_aca_del;
		$(document).on("click", "#edit-aca", function () {
			$("#aca_name").removeClass("is-invalid");
			$("#aca_degree").removeClass("is-invalid");
			$("#aca_faculty").removeClass("is-invalid");
			$('#aca_grade').removeClass('is-invalid');
			id_list_aca_edit = $(this).parents().attr('id');
			console.log(`edit:`, id_list_aca_edit);
			choose_function3 = 1;
			$('#registab3Modal1').modal('toggle');
			$('#submit-aca').text('ยืนยัน');
			console.log(`choose: ${choose_function3}`);
			for_editaca = list_of_aca.find(function (post, index_del) {
				if (post.id == id_list_aca_edit) {
					//console.log("Wow!!");
					return true;
				}
			});
			console.log(`for_editaca:`, for_editaca);
			$("#aca_name").val(for_editaca["aca_name"]);
			$("#aca_faculty").val(for_editaca["aca_faculty"]);
			if (for_editaca["aca_field"] == 'none') {
				$("#aca_field").val('');
			}
			else {
				$("#aca_field").val(for_editaca["aca_field"]);
			}
			if (for_editaca["aca_grade"] == '0.00') {
				$("#aca_grade").val('');
			}
			else {
				$("#aca_grade").val(for_editaca["aca_grade"]);
			}
			//document.getElementById("aca_degree").selectedIndex = for_editaca["aca_degree_select"];
			//document.getElementById("year_secondary").selectedIndex = for_editaca["aca_year_select"];
            $('#aca_degree').val(for_editaca["aca_degree"]);
            $('#year_secondary').val(for_editaca["aca_year"]);
		});


		$(document).on("click", "#del-aca", function () {
			id_list_aca_del = $(this).parents().attr('id');
			console.log("id_list_aca111:", id_list_aca_del);
			$('#Modal_remove_aca').modal('toggle');
		});

		$(document).on('click', "#sub_del_aca", function () {
			var removeIndexA = list_of_aca.findIndex(function (post, index_del) {
				if (post.id == id_list_aca_del)
					return true;
			});
			console.log("id_list_aca:", id_list_aca_del);
            aaa3.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
            $(".status-present-headerrr114").removeClass("status-saving5555-red");
            fetch(ApplicationURL.backend+"register/educationHistory/" + id_list_aca_del, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + aaa3.state.token,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"
                },
            })
                .then(response => response.json())
                .then((raws) => {
                    //console.log(raws);
                    if (!("message" in raws)) {
                        list_of_aca.splice(removeIndexA, 1);
                        console.log(`delete aca id:`, removeIndexA);
                        aaa3.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                        $(".status-present-headerrr114").removeClass("status-saving5555-red");
                        $('#Modal_remove_aca').modal('hide');
                        $(".list-of-aca").empty();
                        console.log(list_of_aca);
                        get_aca_id(list_of_aca, 1);
                        show_all_aca()
                        if (list_of_aca.length != 3) {
                            $('#aca_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
                            $('#aca_danger').removeClass('red_markOnly');
                            $('.icon-plus-circleA').show();
                        }
                    }
                    else {
                        aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                        $(".status-present-headerrr114").addClass("status-saving5555-red");
                    }
                }).catch((error) => {
                    //console.log(error);
                    aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                    $(".status-present-headerrr114").addClass("status-saving5555-red");
                });
		});


		$(document).on('hide.bs.modal', "#registab3Modal1", function () {
			$('#aca_degree').prop('selectedIndex', 0);
			$('#aca_name').val('');
			$('#aca_faculty').val('');
			$('#aca_field').val('');
			$('#aca_grade').val('');
			//$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
			//$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
			//$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
			//$('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
			$('#year_secondary').prop('selectedIndex', 0);
		});

		$(document).on('click', "#can_aca_del", function () {
			$('#Modal_remove_aca').modal('hide');
		});

		$(document).on("change", "#aca_degree", function () {
			if (document.getElementById("aca_degree").selectedIndex != 0) {
				$("#aca_degree").removeClass("is-invalid");
			}
		});

		document.getElementById("submit-aca").addEventListener("click", function () {
			$("#aca_name").removeClass("is-invalid");
			$("#aca_degree").removeClass("is-invalid");
			$("#aca_faculty").removeClass("is-invalid");
			$('#aca_grade').removeClass('is-invalid');
			var name_aca1 = document.getElementById("aca_name").value;
			var degree_aca1 = document.getElementById("aca_degree").value;
			var faculty_aca1 = document.getElementById("aca_faculty").value;
			var field_aca1 = document.getElementById("aca_field").value;
			var grade_aca1 = document.getElementById("aca_grade").value;
			var year_aca1 = document.getElementById("year_secondary").value;
			$('#submit_aca').text = 'ยืนยัน';
			var checkcase1 = true;
			if (document.getElementById("aca_name").value == '') {
				//alert("submit aca wrong!");
				$("#aca_name").addClass("is-invalid");
				checkcase1 = false;
			}
			if (document.getElementById("aca_degree").value == '') {
				//alert("submit aca wrong!");
				$("#aca_degree").addClass("is-invalid");
				checkcase1 = false;
			}
			if (document.getElementById("aca_faculty").value == '') {
				//alert("submit aca wrong!");
				$("#aca_faculty").addClass("is-invalid");
				checkcase1 = false;
			}
			if (grade_aca1 > 4 || grade_aca1 < 0) {
				$("#aca_grade").addClass("is-invalid");
				checkcase1 = false;
			}
			if (checkcase1) {
				if (field_aca1 == '') {
					field_aca1 = 'none';
				}
				if (grade_aca1 == '' || grade_aca1 == NaN) {
					grade_aca1 = 0;
				}
				if (year_aca1 == '') {
					year_aca1 = 0;
				}
                let packAca = {
                    "Degree": degree_aca1,
                    "Facalty": faculty_aca1,
                    "Field_of_study": field_aca1 ? field_aca1 : 0,
                    "Academy": name_aca1,
                    "Grade": grade_aca1 ? grade_aca1 : 0,
                    "Education_End_Year": year_aca1 ? year_aca1 : 0,
                }
				if (choose_function3 == 1) { //edit aca after add
                    aaa3.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
                    $(".status-present-headerrr114").removeClass("status-saving5555-red");
					console.log("edit!!!!!!");
                    fetch(ApplicationURL.backend+"register/educationHistory/"+id_list_aca_edit, {
                        method: "PATCH",
                        headers: {
                            'Authorization': 'Bearer ' + aaa3.state.token,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(packAca)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws.id);
                            if ("message" in raws) {
                                aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd").addClass("status-saving5555-red");
                                aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                                $(".status-present-headerrr114").addClass("status-saving5555-red");
                            }
                            else {
                                for_editaca["aca_name"] = name_aca1;
                                for_editaca["aca_faculty"] = faculty_aca1;
                                for_editaca["aca_degree"] = degree_aca1;
                                for_editaca["aca_grade"] = parseFloat(grade_aca1).toFixed(2);
                                for_editaca["aca_field"] = field_aca1;
                                for_editaca["year_secondary"] = parseInt(year_aca1);
                                for_editaca["aca_year"] = parseInt(year_aca1);
                                $("#registab4Modal").modal("hide"); //success!!!!!
                                aaa3.setState({ statusUpload31: "", imgStatus31: "" });
                                aaa3.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                                $(".status-present-headerrr114").removeClass("status-saving5555-red");
                                $('#aca_degree').prop('selectedIndex', 0);
                                $("#year_secondary").prop('selectedIndex', 0);
                                $('#aca_name').val('');
                                $('#aca_faculty').val('');
                                $('#aca_field').val('');
                                $('#aca_grade').val('');
                                $('#registab3Modal1').modal('hide');
                                $(".list-of-aca").empty();
                                list_of_aca.sort(function (x, y) {
                                    return y.aca_year - x.aca_year;
                                });
                                show_all_aca();
                            }

                        }).catch((error) => {
                            //console.log(error);
                            aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd").addClass("status-saving5555-red");
                            aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                            $(".status-present-headerrr114").addClass("status-saving5555-red");
                        });
				}
				else if (choose_function3 == 2) { //add aca in list
                    //console.log(packAca);
                    aaa3.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
                    $(".status-present-headerrr114").removeClass("status-saving5555-red");
                    fetch(ApplicationURL.backend+"register/addeducationHistory", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + aaa3.state.token,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(packAca)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws.id);
                            if ("message" in raws) {
                                aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd").addClass("status-saving5555-red");
                                aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                                $(".status-present-headerrr114").addClass("status-saving5555-red");
                            }
                            else {
                                list_of_aca.push({
                                    id: raws.id,
                                    aca_pos: 0,
                                    aca_name: name_aca1,
                                    aca_faculty: faculty_aca1,
                                    aca_degree: degree_aca1,
                                    aca_year: parseInt(year_aca1),
                                    aca_grade: parseFloat(grade_aca1).toFixed(2),
                                    aca_field: field_aca1,
                                    //aca_year: parseInt(year_aca),
                                });
                                get_aca_id(list_of_aca, 1);
                                console.log(list_of_aca);
                                $("#registab4Modal").modal("hide"); //success!!!!!
                                aaa3.setState({ statusUpload31: "", imgStatus31: "" });
                                aaa3.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                                $(".status-present-headerrr114").removeClass("status-saving5555-red");
                                console.log("testfloat11:", Number.parseFloat(grade_aca1).toFixed(2));
                                $('#aca_degree').prop('selectedIndex', 0);
                                $("#year_secondary").prop('selectedIndex', 0);
                                $('#aca_name').val('');
                                $('#aca_faculty').val('');
                                $('#aca_field').val('');
                                $('#aca_grade').val('');
                                $('#registab3Modal1').modal('hide');
                                $(".list-of-aca").empty();
                                list_of_aca.sort(function (x, y) {
                                    return y.aca_year - x.aca_year;
                                });
                                show_all_aca();
                                if (list_of_aca.length == 3) {
                                    $('#aca_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
                                    $('#aca_danger').addClass('red_markOnly');
                                    $('.icon-plus-circleA').hide();
                                }
                            }

                        }).catch((error) => {
                            //console.log(error);
                            aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd").addClass("status-saving5555-red");
                            aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                            $(".status-present-headerrr114").addClass("status-saving5555-red");
                        });
				}
				
			}
		});
        //For Higher

		function get_high_id(list_of_high, x) {
			//var x = 1;
			list_of_high.forEach(ele => {
				ele["high_pos"] = x;
				//console.log("x:", x);
				x++;
			});
			return list_of_high;
		}

		function show_all_high() {

			list_of_high.forEach(ele => {
				var grid_high1 = '<div class="t3-content1 row">\
								<div class="col-4">\
									<div class="font-titlet3_2 font-boldt3">{degree_high}</div>\
									<div class="font-titlet3_2 font-khotboldt3">{year_high}</div>\
								</div>\
								<div class="col-8">\
									<div class="font-titlet3_2">{field_high}</div>\
									<div class="font-titlet3_2">{name_high}</div>\
									<div class="font-titlet3_2">เกรด {grade_high}</div>\
								</div>';

				var grid_high2 = `
								<div class="layer_icon1" id={no-list-high}>\
									<button type="button" class="btn button1" id="edit-high"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
									<button type="button" class="btn button2" id="del-high"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
								</div>\
							</div>`;
				grid_high2 = grid_high2.replace("{no-list-high}", ele["id"]);
				grid_high1 = grid_high1.replace("{no_high}", ele["high_pos"]);
				grid_high1 = grid_high1.replace("{degree_high}", ele["high_degree"]);
				// if (ele["high_name"].length > 34) {
				//   grid_high1 = grid_high1.replace("{name_high}", ele["high_name"].slice(0, 34) + "...");
				// }
				// else {
				//   grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				// }
				grid_high1 = grid_high1.replace("{name_high}", ele["high_name"]);
				if (ele["high_grade"] == "0.00") {
					grid_high1 = grid_high1.replace("{grade_high}", '-');
				}
				else {
					grid_high1 = grid_high1.replace("{grade_high}", ele["high_grade"]);
				}
				if (ele["high_field"] == "none") {
					grid_high1 = grid_high1.replace("{field_high}", '-');
				}
				grid_high1 = grid_high1.replace("{field_high}", ele["high_field"]);
				if (ele["high_year"] == "0") {
					grid_high1 = grid_high1.replace("{year_high}", '-');
				}
				else if (ele["high_year"] == "9999") {
					grid_high1 = grid_high1.replace("{year_high}", 'กำลังศึกษา');
				}
				else {
					grid_high1 = grid_high1.replace("{year_high}", ele["high_year"]);
				}
				$(".list-of-high").append(grid_high1 + grid_high2);
				console.log(`list_of_high:`, list_of_high);
			});
		}

		//func add new high form
		$(document).on("click", "#add_high", function () {
			$("#high_degree").removeClass("is-invalid");
			$("#high_name").removeClass("is-invalid");
			$("#high_grade").removeClass("is-invalid");
			choose_function3_2 = 2;
			$('#registab3Modal2').modal('toggle');
			$('#high_degree').prop('selectedIndex', 0);
			$('#year_higher').prop('selectedIndex', 0);
			$('#high_name').val('');
			$('#high_field').val('');
			$('#high_grade').val('');
            $('#submit_high').text = 'เพิ่ม';
		});

		//func edit high
		var for_edithigh, id_list_high_edit, id_list_high_del;
		$(document).on("click", "#edit-high", function () {
			$("#high_degree").removeClass("is-invalid");
			$("#high_name").removeClass("is-invalid");
			$("#high_grade").removeClass("is-invalid");
			id_list_high_edit = $(this).parents().attr('id');
			console.log(`edit:`, id_list_high_edit);
			choose_function3_2 = 1;
			$('#registab3Modal2').modal('toggle');
			$('#submit-high').text('ยืนยัน');
			console.log(`choose: ${choose_function3_2}`);
            console.log(list_of_high);
			for_edithigh = list_of_high.find(function (post, index_del) {
				if (post.id == id_list_high_edit) {
					//console.log("Wow!!");
					return true;
				}
			});
			console.log(`for_edithigh:`, for_edithigh);
            //console.log(for_edithigh);
			$("#high_name").val(for_edithigh["high_name"]);
			if (for_edithigh["high_field"] == 'none') {
				$("#high_field").val('');
			}
			else {
				$("#high_field").val(for_edithigh["high_field"]);
			}
			if (for_edithigh["high_grade"] == '0.00') {
				$("#high_grade").val('');
			}
			else {
				$("#high_grade").val(for_edithigh["high_grade"]);
			}
			//document.getElementById("high_degree").selectedIndex = for_edithigh["high_degree_select"];
			//document.getElementById("year_higher").selectedIndex = for_edithigh["high_year_select"];
            $('#high_degree').val(for_edithigh["high_degree"]);
            $('#year_higher').val(for_edithigh["high_year"]);
		});


		$(document).on("click", "#del-high", function () {
			id_list_high_del = $(this).parents().attr('id');
			console.log("id_list_high112:", id_list_high_del);
			$('#Modal_remove_high').modal('toggle');
		});

		$(document).on('click', "#sub_del_high", function () {
			var removeIndexA = list_of_high.findIndex(function (post, index_del) {
				if (post.id == id_list_high_del)
					return true;
			});
			console.log("id_list_high:", id_list_high_del);
            aaa3.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
            $(".status-present-headerrr114").removeClass("status-saving5555-red");
            fetch(ApplicationURL.backend+"register/educationHistory/" + id_list_high_del, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + aaa3.state.token,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Credentials": true,
                    "Content-Type": "application/json"
                },
            })
                .then(response => response.json())
                .then((raws) => {
                    //console.log(raws);
                    if (!("message" in raws)) {
                        list_of_high.splice(removeIndexA, 1);
                        console.log(`delete high id:`, removeIndexA);
                        $('#Modal_remove_high').modal('hide');
                        $(".list-of-high").empty();
                        console.log(list_of_high);
                        get_high_id(list_of_high, 1);
                        show_all_high()
                        if (list_of_high.length != 3) {
                            $('#high_danger').text('ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน');
                            $('#high_danger').removeClass('red_markOnly');
                            $('.icon-plus-circleH').show();
                        }
                        aaa3.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                        $(".status-present-headerrr114").removeClass("status-saving5555-red");
                    }
                    else {
                        aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                        $(".status-present-headerrr114").addClass("status-saving5555-red");
                    }
                }).catch((error) => {
                    //console.log(error);
                    aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                    $(".status-present-headerrr114").addClass("status-saving5555-red");
                });
		});


		$(document).on('hide.bs.modal', "#registab3Modal2", function () {
			$('#high_degree').prop('selectedIndex', 0);
			$('#high_name').val('');
			$('#high_field').val('');
			$('#high_grade').val('');
			$('#year_higher').prop('selectedIndex', 0);
		});

		$(document).on('click', "#can_high_del", function () {
			$('#Modal_remove_high').modal('hide');
		});

		$(document).on("change", "#high_degree", function () {
			if (document.getElementById("high_degree").selectedIndex != 0) {
				$("#high_degree").removeClass("is-invalid");
			}
		});

		document.getElementById("submit-high").addEventListener("click", function () {
			var name_high = document.getElementById("high_name").value;
			var degree_high = document.getElementById("high_degree").value;
			var field_high = document.getElementById("high_field").value;
			var grade_high = document.getElementById("high_grade").value;
			var year_high = document.getElementById("year_higher").value;
			$('#submit_high').text = 'ยืนยัน';
			var checkformT3 = true;
			//console.log('high_name : '+ $("#high_name").val());
			if (document.getElementById("high_name").value == "") {
				//alert("submit high wrong!");
				$("#high_name").addClass("is-invalid");
				checkformT3 = false;
			}
			if (document.getElementById("high_degree").value == '') {
				//alert("submit high wrong!");
				$("#high_degree").addClass("is-invalid");
				checkformT3 = false;
			}
			if (grade_high > 4 || grade_high < 0) {
				$("#high_grade").addClass("is-invalid");
				checkformT3 = false;
			}
			if (checkformT3) {
				if (field_high == '') {
					field_high = 'none';
				}
				if (grade_high == '') {
					grade_high = 0;
				}
				if (year_high == '') {
					year_high = 0;
				}
                let packHigh = {
                    "Degree": degree_high,
                    "Facalty": "none",
                    "Field_of_study": field_high ? field_high : 0,
                    "Academy": name_high,
                    "Grade": grade_high ? grade_high : 0,
                    "Education_End_Year": year_high ? year_high : 0,
                }
				if (choose_function3_2 == 1) { //edit high after add
					console.log("edit!!!!!!");
                    aaa3.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
                    $(".status-present-headerrr114").removeClass("status-saving5555-red");
					console.log("edit!!!!!!");
                    fetch(ApplicationURL.backend+"register/educationHistory/"+id_list_aca_edit, {
                        method: "PATCH",
                        headers: {
                            'Authorization': 'Bearer ' + aaa3.state.token,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(packHigh)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            //console.log(raws.id);
                            if ("message" in raws) {
                                aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd").addClass("status-saving5555-red");
                                aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                                $(".status-present-headerrr114").addClass("status-saving5555-red");
                            }
                            else {
                                for_edithigh["high_name"] = name_high;
                                for_edithigh["high_degree"] = degree_high;
                                for_edithigh["high_grade"] = parseFloat(grade_high).toFixed(2);
                                for_edithigh["high_field"] = field_high;
                                //for_edithigh["year_higher"] = parseInt(year_high);
                                for_edithigh["high_year"] = parseInt(year_high);
                                //alert('Edit high Ja');
                                $('#high_degree').prop('selectedIndex', 0);
                                $("#year_higher").prop('selectedIndex', 0);
                                $('#high_name').val('');
                                $('#high_field').val('');
                                $('#high_grade').val('');
                                $('#registab3Modal2').modal('hide');
                                $(".list-of-high").empty();
                                list_of_high.sort(function (x, y) {
                                    return y.high_year - x.high_year;
                                });
                                //console.table(list_of_high);
                                show_all_high()
                                aaa3.setState({ statusUpload31: "", imgStatus31: "" });
                                aaa3.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                                $(".status-present-headerrr114").removeClass("status-saving5555-red");
                            }

                        }).catch((error) => {
                            //console.log(error);
                            aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd").addClass("status-saving5555-red");
                            aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                            $(".status-present-headerrr114").addClass("status-saving5555-red");
                        });
				}
				else if (choose_function3_2 == 2) { //add high in list
                    aaa3.setState({ statusDelHeader: "Saving...", imgStatusHeader: "assets/images/outline_cached_black_24dp.png" });
                    $(".status-present-headerrr114").removeClass("status-saving5555-red");
                    fetch(ApplicationURL.backend+"register/addeducationHistory", {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + aaa3.state.token,
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(packHigh)
                    })
                        .then(response => response.json())
                        .then((raws) => {
                            console.log(raws.id);
                            if ("message" in raws) {
                                aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                                $("#for-error-dgd").addClass("status-saving5555-red");
                                aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                                $(".status-present-headerrr114").addClass("status-saving5555-red");
                            }
                            else {
                                list_of_high.push({
                                    id: raws.id,
                                    high_pos: 0,
                                    high_name: name_high,
                                    high_faculty: 'none',
                                    high_degree: degree_high,
                                    high_grade: parseFloat(grade_high).toFixed(2),
                                    high_field: field_high,
                                    high_year: parseInt(year_high),
                                });
                                get_high_id(list_of_high, 1);
                                console.log(list_of_high);
                            }
                            $('#high_degree').prop('selectedIndex', 0);
                            $("#year_higher").prop('selectedIndex', 0);
                            $('#high_name').val('');
                            $('#high_field').val('');
                            $('#high_grade').val('');
                            $('#registab3Modal2').modal('hide');
                            $(".list-of-high").empty();
                            list_of_high.sort(function (x, y) {
                                return y.high_year - x.high_year;
                            });
                            //console.table(list_of_high);
                            show_all_high()
                            if (list_of_high.length == 3) {
                                $('#high_danger').text('*ท่านเพิ่มประวัติการศึกษาครบจำนวนแล้ว');
                                $('#high_danger').addClass('red_markOnly');
                                $('.icon-plus-circleH').hide();
                            }
                            aaa3.setState({ statusUpload31: "", imgStatus31: "" });
                            aaa3.setState({ statusDelHeader: "Saved", imgStatusHeader: "assets/images/outline_cloud_done_black_24dp.png" });
                            $(".status-present-headerrr114").removeClass("status-saving5555-red");
                        }).catch((error) => {
                            //console.log(error);
                            aaa3.setState({ statusUpload31: "Save Failed", imgStatus31: "assets/images/baseline_error_black_24dp.png" });
                            $("#for-error-dgd").addClass("status-saving5555-red");
                            aaa3.setState({ statusDelHeader: "Save Failed", imgStatusHeader: "assets/images/baseline_error_black_24dp.png" });
                            $(".status-present-headerrr114").addClass("status-saving5555-red");
                        });
			    }
            }
        });
    }

	componentWillUnmount() { 
	   window.removeEventListener('load', this.handleLoad)  
       $(document).unbind();
	}

	render(){

		return (
			<div className="Registab3">
                <img class="status-img-headerrrr114" src={this.state.imgStatusHeader} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}></img>
                <h1 class="status-present-headerrr114">{this.state.statusDelHeader}</h1>
				<div class='regis-box-content1 container-fluid'>
					<div class='col-16'>
						<div class='row'>
								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
                                            <h2 class="font-headert3">อุดมศึกษา</h2>
                                        </div>
                                        <div class="col-2 transition-component" id="cross-fadegone">
                                                <img class="registab3_btnplus icon-plus-circleA bottom" type='button' src="assets/images/add_hover.png"></img>
                                                <img class="registab3_btnplus icon-plus-circleA top" type='button' id='add_aca' src="assets/images/add_black.png"></img>
                                        </div>
                                    </div>
									<div className=''>
                                        <h5 class='font-dest3'>ระดับอุดมศึกษาจะประกอบไปด้วย ปวส. ปริญญาตรี ปริญญาโท และปริญญาเอก</h5>
                                        <div class="list-of-aca" id="in-list-of-aca"></div>
                                        <h5 class="font-titlet3 normalformzonet3 dangerzonet3" id='aca_danger'>ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน</h5>
									</div>

									<div class="modal fade" id="registab3Modal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content modalworkaddH" >
												<div class='modal-body'>
													<h1 class='modal-title' id='regisModallabel1' >เพิ่มประวัติการศึกษา</h1>
													<div className='addHigher'>
                                                        <div className="Registab3_addHigher ">
                                                            <form  id='HigherForm'>
                                                            <div class='row'>
                                                                <div class="col-md-2 chidright">
										                            <label class="form-f-sex">วุฒิการศึกษา<label class="red_markEp1">*</label></label>
									                            </div>
                                                                <div class='col-3' >
                                                                    <div class="selectDropdown">
                                                                        <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='aca_degree' aria-labelledby="select1" required>
                                                                            <option selected disabled value=''>เลือกวุฒิการศึกษา</option>
                                                                            <option value='ปริญญาเอก'>ปริญญาเอก</option>    
                                                                            <option value='ปริญญาโท'>ปริญญาโท</option>
                                                                            <option value='ปริญญาตรี'>ปริญญาตรี</option>
                                                                            <option value='ปวส.'>ปวส.</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 chidright">
										                            <label class="form-f-sex">ปีที่จบการศึกษา</label>
									                            </div>
                                                                <div class='col-3' >
                                                                    <select class="form-select form-select-lg dropbtn margin-bottom1 fff" id='year_secondary' aria-labelledby="select1" required>
                                                                        <option selected disabled value=''>ค.ศ.</option>
                                                                        <option value='9999'>กำลังศึกษา</option>
                                                                    </select>            
                                                                </div>
                                                            </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">สถานศึกษา<label class="red_markEp1">*</label></label>
									                                </div>
                                                                    <div class="col-9 ">
                                                                        <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 " id="aca_name" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">คณะ<label class="red_markEp1">*</label></label>
									                                </div>
                                                                    <div class="col-9">
                                                                        <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 " id="aca_faculty" required></input>
                                                                    </div>
                                                                </div>
                                                                <div class='row'>
                                                                    <div class="col-md-2 chidright">
										                                <label class="form-f-sex">สาขาวิชา</label>
									                                </div>
                                                                    <div class="col-4">
                                                                        <input maxlength="36" type="text" class="form-control dropbtn margin-bottom1 fff" id="aca_field" ></input>
                                                                    </div>
                                                                    <div class="col-2 chidright">
										                                <label class="form-f-sex">เกรดเฉลี่ยสะสม</label>
									                                </div>
                                                                    <div class="col-3">
                                                                        <input type="number" class="form-control dropbtn margin-bottom1" placeholder='X.XX' id="aca_grade"></input>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                                                                </div>													
                                                                                            </div>
                                                                                                <div class="centerverify button-add-addH1">
                                                                                                    <button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal"  id='can-aca'>ยกเลิก</button>
                                                                                                    <button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id='submit-aca' >เพิ่ม</button>
                                                                                                </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

								<div className='registab3_formbox col-6'>
                                    <div class='row longlang'>
                                        <div class='col-10'>
									        <h2 class="font-headert3">มัธยมศึกษา</h2>
                                        </div>
                                        <div class="col-2 transition-component" id="cross-fadegone">
                                                <img class="registab3_btnplus icon-plus-circleH bottom" type='button' src="assets/images/add_hover.png"></img>
                                                <img class="registab3_btnplus icon-plus-circleH top" type='button' id='add_high' src="assets/images/add_black.png"></img>
                                        </div>
                                    </div>
									<div className=''>		
                                        <h5 class='font-dest3'>ระดับมัธยมศึกษาในที่นี้จะประกอบไปด้วย มัธยมศึกษาตอนปลาย และปวช.</h5>
                                        <div class="list-of-high" id="in-list-of-high"></div>
                                        <h5 class="font-titlet3 normalformzonet3 dangerzonet3" id='high_danger'>ท่านสามารถเพิ่มประวัติการศึกษาได้สูงสุด 3 อัน</h5>
                                            <div class="center3">
                                            </div>
									    </div>
									<div class="modal fade" id="registab3Modal2" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
										<div class="modal-dialog modal-dialog-centered modal-xl">
											<div class="modal-content modalworkaddH2" >
												<div class='modal-body'>
													<h1 class='modal-title' id='regisModallabel2' >เพิ่มประวัติการศึกษา</h1>
													<div className='addSecondary'>
													<div className="Registab3_addSecondary">
				
                <form  id='SecondaryForm'>
                    <div class='row'>
                        <div class="col-3 chidright">
                            <label class="form-f-sex">วุฒิการศึกษา<label class="red_markEp1">*</label></label>
                        </div>
                        <div class="col-3">
                            <select class="form-select margin-bottom1 fff dropbtn_year" id='high_degree' aria-labelledby="select1" required>
                                <option selected disabled value=''>เลือกวุฒิการศึกษา</option> 
                                <option value='มัธยมศึกษาตอนปลาย' >มัธยมศึกษาตอนปลาย</option>    
                                <option value='ปวช.' >ปวช.</option>
                            </select>
                        </div>
                        <div class="col-3 chidright">
                            <label class="form-f-sex">ปีที่จบการศึกษา<label class="red_markEp1"></label></label>
                        </div>
                        <div class='col-3' >
                            <select class="form-select dropbtn margin-bottom1 fff" id='year_higher' aria-labelledby="select1" required>
                                <option selected disabled value=''>ค.ศ.</option>
                                <option value='9999'>กำลังศึกษา</option>
                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md-3 chidright">
							<label class="form-f-sex">สถานศึกษา<label class="red_markEp1">*</label></label>
						</div>
                        <div class="col-9 ">
                            <input maxlength="56" type="text" class="form-control dropbtn margin-bottom1 fff" id="high_name" required></input>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-md-3 chidright del-padleft">
							<label class="form-f-cfp">หลักสูตร/แผนการเรียน</label>
						</div>
                        <div class="col-4 ">
                            <input maxlength="36" type="text" class="form-control dropbtn margin-bottom1 fff" id="high_field" required></input>
                        </div>
                        <div class="col-md-2 chidright">
							<label class="form-f-sex">เกรดเฉลี่ยสะสม</label>
						</div>
                        <div class='col-3'> 
                            <input type="text" class="form-control dropbtn margin-bottom1 " id="high_grade" placeholder="X.XX"></input>
                        </div>
                    </div>
                </form>
			</div>
													</div>													
												</div>
													<div class="centerverify button-add-addH2">
														<button type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</button>
														<button type="button" class="btn btn-cta-primary-yellowshort profile-button round" id="submit-high">เพิ่ม</button>
													</div>

											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
					

				</div>

                <div class="modal fade" id="Modal_remove_aca" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบประวัติการศึกษานี้ ?</h4>
								<div class="centerverify">
									<a id="can_del_aca" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="sub_del_aca" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
								</div>
							</div>
						</div>
					</div>
                <div class="modal fade" id="Modal_remove_high" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content minisize">
								<h4 class="del-b">คุณต้องการลบประวัติการศึกษานี้ ?</h4>
								<div class="centerverify">
									<a id="can_del_high" type="button" class="btn btn-cta-primary-svshort round profile-button grey margin-right-m" data-bs-dismiss="modal">ยกเลิก</a>
									<a id="sub_del_high" type="button" class="btn btn-cta-primary-yellowshort profile-button round" >ลบ</a>
								</div>
							</div>
						</div>
					</div>
			</div>

            
			
		);
	}
}

export default Registab3;