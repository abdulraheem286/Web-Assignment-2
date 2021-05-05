window.onload = function () {
  var addBtn = document.getElementById("add");
  addBtn.onclick = handleAdd;
  var resetBtn = document.getElementById("reset");
  resetBtn.onclick = reset_table;
};

function handleAdd() {
  var table = document.getElementById("table");

  if (validations() == false) {
    return false;
  }

  //Insert DATA
  var data = table.insertRow(-1);
  var name = data.insertCell(0);
  var gender = data.insertCell(1);
  var age = data.insertCell(2);
  var city = data.insertCell(3);
  var action = data.insertCell(4);

  name.innerHTML = $("#name").val();
  gender.innerHTML = $("input[type='radio'][name='gender']:checked").val();
  age.innerHTML = $("#age").val();
  city.innerHTML = $("#city option:selected").val();

  var btnupd = document.createElement("input");
  btnupd.type = "button";
  btnupd.className = "btn btn-danger btnupdate";
  btnupd.value = "Update";
  btnupd.onclick = update_row;
  data.appendChild(btnupd);
  action.appendChild(btnupd);

  var btndel = document.createElement("input");
  btndel.type = "button";
  btndel.className = "btn btn-dark btndelete";
  btndel.value = "Delete";
  btndel.onclick = delete_row;
  data.appendChild(btndel);
  action.appendChild(btndel);

  reset_table();
  return false;
}

function delete_row() {
  document
    .getElementById("table")
    .deleteRow(this.parentNode.parentNode.rowIndex);
  console.log("row deleted");
}

function reset_table() {
  $('.form input[type="text"]').val("");
  $('.form input[type="number"]').val("");
  $(".form select").val("");
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  console.log("reset");
  return false;
  //To clear all table
  // $("#table td").remove();
}

function update_row(e) {
  console.log("update row button clicked");

  $("#updateMain").prop("disabled", false);
  $("#add").prop("disabled", true);
  $("#reset").prop("disabled", true);

  var rowupdating = e.target.parentNode.parentNode;
  var updatingarray = [];

  for (let i = 0; i < rowupdating.childNodes.length; i++) {
    var object = rowupdating.childNodes[i];
    if (object.tagName == undefined) continue;
    updatingarray.push(object);
  }

  //Getting Elements from table
  var updname = updatingarray[0].innerText;
  var updgender = updatingarray[1].innerText;
  var updage = updatingarray[2].innerText;
  var updcity = updatingarray[3].innerText;

  //Insereting Elements into form from table
  document.getElementById("name").value = updname;
  document.getElementById("age").value = updage;
  document.getElementById("city").value = updcity;

  if (updgender == "male") {
    document.getElementById("male").checked = true;
  } else {
    document.getElementById("female").checked = true;
  }

  //updating values of table from form
  $("#updateMain").click(function () {
    updatingarray[0].innerText = $("#name").val();
    updatingarray[1].innerText = $(
      "input[type='radio'][name='gender']:checked"
    ).val();
    updatingarray[2].innerText = $("#age").val();
    updatingarray[3].innerText = $("#city option:selected").val();

    console.log("Updated Row Values");

    $("#add").prop("disabled", false);
    $("#updateMain").prop("disabled", true);
    $("#reset").prop("disabled", true);
    reset_table;
  });

  return false;
}

function validations() {
  var val = $("#name").val();
  if (!val.match(/^[a-zA-Z]+$/)) {
    alert("Only Lower and Upper Case Alphabets Allowed with Limit: 1-10");
    return false;
  }

  var ageval = $("#age").val();
  if (ageval <= 10 || ageval >= 50) {
    alert("Age not correct");
    return false;
  }

  var selval = $("#city").val();
  if (selval == "") {
    alert("Select City");
    return false;
  }
}
