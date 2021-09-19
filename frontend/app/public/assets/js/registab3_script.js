
$(document).ready(function(){
  console.log('script for registab3 loaded')
});

let startYear2 = 1950;
let endYear2 = new Date().getFullYear();
for (i = endYear2; i > startYear2; i--) {
  $('#year_higher').append($('<option />').val(i).html(i));
  $('#year_secondary').append($('<option />').val(i).html(i));
}

$('handleHigherSubmit').on('click',function() {
  $("#registab3Modal1").modal("hide");

});

$('handleSecondaryubmit').on('click',function() {
  $("#registab3Modal2").modal("hide");
});
var list_of_aca = [];

function get_aca_id(list_of_aca, x) {
  //var x = 1;
  list_of_aca.forEach(ele => {
      ele["aca_pos"] = x;
      console.log("x:", x);
      x++;
  });
  return list_of_aca;
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

var choose_function3 = -1; //default

function show_all_aca() {

  list_of_aca.forEach(ele => {
      var grid_aca1 = '<div class="t3-content1">\
                          <div class="row">\
                              <div class="col-3 font-titlet3">{degree_aca}</div>\
                              <div class="col-4 font-titlet3">{field_aca}</div>\
                              <div class="col-5 font-titlet3">{faculty_aca}</div>\
                          </div>\
                          <div class="row">\
                              <div class="col-3 font-titlet3">{year_aca}</div>\
                              <div class="col-4 font-titlet3">เกรด {grade_aca}</div>\
                              <div class="col-5 font-titlet3">{name_aca}</div>\
                          </div>';

      var grid_aca2 = `
                          <div class="layer_icon1" id={no-list-aca}>\
                             <button type="button" class="btn button1" id="edit-aca"><img src="assets/images/blackedit.png" width="27" height="27"></img></button>\
                             <button type="button" class="btn button2" id="del-aca"><img src="assets/images/bin.png" width="30" height="30"></img></button>\
                          </div>\
                      </div>`;
      grid_aca2 = grid_aca2.replace("{no-list-aca}", ele["id"]);
      grid_aca1 = grid_aca1.replace("{no_aca}", ele["aca_pos"]);
      grid_aca1 = grid_aca1.replace("{name_aca}", ele["aca_name"]);
      grid_aca1 = grid_aca1.replace("{degree_aca}", ele["aca_degree"]);
      //grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
      grid_aca1 = grid_aca1.replace("{faculty_aca}", ele["aca_faculty"]);
      //grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
      if(ele["aca_grade"]=="0.00"){
        grid_aca1 = grid_aca1.replace("{grade_aca}", '-');
      }
      else{
        grid_aca1 = grid_aca1.replace("{grade_aca}", ele["aca_grade"]);
      }
      if(ele["aca_field"]=="none"){
        grid_aca1 = grid_aca1.replace("{field_aca}", '-');
      }
      else{
        grid_aca1 = grid_aca1.replace("{field_aca}", ele["aca_field"]);
      }
      if(ele["aca_year"]=="0"){
        grid_aca1 = grid_aca1.replace("{year_aca}", '-');
      }
      else{
        grid_aca1 = grid_aca1.replace("{year_aca}", ele["aca_year"]);
      }
      $(".list-of-aca").append(grid_aca1 + grid_aca2);
      console.log(`list_of_aca:`, list_of_aca);
  });
}
$(document).ready(function () {
  show_all_aca();
});

//func add new aca form
$(document).on("click", "#add_aca", function () {
  $("#aca_name").removeClass("is-invalid");
  $("#aca_degree").removeClass("is-invalid");
  $("#aca_faculty").removeClass("is-invalid");
  choose_function3 = 2;
  $('#registab3Modal1').modal('toggle');
  $('#aca_degree').prop('selectedIndex', 0);
  $('#year_secondary').prop('selectedIndex', 0);
  $('#aca_name').val('');
  $('#aca_faculty').val('');
  $('#aca_field').val('');
  $('#aca_grade').val('');
  //$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
  //$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
  //$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
  //$('#aca_grade').attr("placeholder", "X.XX").placeholder();
});

//func edit aca
var for_editaca;
$(document).on("click", "#edit-aca", function () {
  $("#aca_name").removeClass("is-invalid");
  $("#aca_degree").removeClass("is-invalid");
  $("#aca_faculty").removeClass("is-invalid");
  id_list_aca_edit = $(this).parents().attr('id');
  console.log(`edit:`, id_list_aca_edit);
  choose_function3 = 1;
  $('#registab3Modal1').modal('toggle');
  $('#submit-aca').text('ยืนยัน');
  console.log(`choose: ${choose_function3}`);
  for_editaca = list_of_aca.find(function (post, index_del) {
      if (post.id == id_list_aca_edit){
        console.log("Wow!!");
        return true;
      }
  });
  console.log(`for_editaca:`, for_editaca);
  console.log(for_editaca["name_aca"]);
  $("#aca_name").val(for_editaca["name_aca"]);
  $("#aca_faculty").val(for_editaca["faculty_aca"]);
  $("#aca_field").val(for_editaca["field_aca"]);
  $("#aca_grade").val(for_editaca["grade_aca"]);
  document.getElementById("aca_degree").selectedIndex = for_editaca["degree_aca"];
  document.getElementById("year_secondary").selectedIndex = for_editaca["year_aca_select"];
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
  list_of_aca.splice(removeIndexA, 1);
  console.log(`delete aca id:`, removeIndexA);
  $('#Modal_remove_aca').modal('hide');
  $(".list-of-aca").empty();
  console.log(list_of_aca);
  get_aca_id(list_of_aca, 1);
  show_all_aca()
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
  name_aca = document.getElementById("aca_name").value;
  degree_aca = document.getElementById("aca_degree").value;
  faculty_aca = document.getElementById("aca_faculty").value;
  field_aca = document.getElementById("aca_field").value;
  grade_aca = document.getElementById("aca_grade").value;
  year_aca = document.getElementById("year_secondary").value;
  $('#submit_aca').text = 'ยืนยัน';
  if (document.getElementById("aca_name").value == '') {
      //alert("submit aca wrong!");
      $("#aca_name").addClass("is-invalid");
  }
  if (document.getElementById("aca_degree").value == 'none') {
    //alert("submit aca wrong!");
    $("#aca_degree").addClass("is-invalid");
  }
  if (document.getElementById("aca_faculty").value == '') {
    //alert("submit aca wrong!");
    $("#aca_faculty").addClass("is-invalid");
  }
  else {
      if (field_aca == '') {
          field_aca = 'none';
      }
      if (grade_aca == '') {
          grade_aca = 0;
      }
      if (year_aca == '') {
          year_aca = 0;
      }
      if (choose_function3 == 1) { //edit aca after add
          console.log("edit!!!!!!");
          for_editaca["aca_name"] = name_aca;
          for_editaca["aca_degree_select"] = $("#degree_aca").prop('selectedIndex');
          for_editaca["aca_year_select"] = $("#year_secondary").prop('selectedIndex');
          for_editaca["aca_faculty"] = faculty_aca;
          for_editaca["aca_degree"] = degree_aca;
          for_editaca["aca_grade"] = parseFloat(grade_aca).toFixed(2);
          for_editaca["aca_field"] = field_aca;
          for_editaca["year_secondary"] = parseInt(year_aca);
      }
      else if (choose_function3 == 2) { //add aca in list
          list_of_aca.push({
              id: create_UUID(),
              aca_pos: 0,
              aca_name: name_aca,
              aca_faculty: faculty_aca,
              aca_degree: degree_aca,
              aca_degree_select: $("#aca_degree").prop('selectedIndex'),
              aca_year: parseInt(year_aca),
              aca_year_select: $("#year_secondary").prop('selectedIndex'),
              aca_grade: parseFloat(grade_aca).toFixed(2),
              aca_field: field_aca,
              aca_year: parseInt(year_aca),
          });
          get_aca_id(list_of_aca, 1);
          console.log(list_of_aca);
      }
      $('#aca_degree').prop('selectedIndex', 0);
      $("#year_secondary").prop('selectedIndex', 0);
      $('#aca_name').val('');
      $('#aca_faculty').val('');
      $('#aca_field').val('');
      $('#aca_grade').val('');
      //$('#aca_name').attr("placeholder", "สถานศีกษา*").placeholder();
      //$('#aca_faculty').attr("placeholder", "คณะ").placeholder();
      //$('aca_field').attr("placeholder", "สาขาวิชา*").placeholder();
      //$('#aca_grade').attr("placeholder", "เกรดเฉลี่ยสะสม").placeholder();
      //$("#pos-del-obj-button1").hide();
      $('#registab3Modal1').modal('hide');
      $(".list-of-aca").empty();
      show_all_aca()
  }
});


