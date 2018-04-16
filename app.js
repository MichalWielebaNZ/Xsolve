var list
var table = document.getElementById('tbody #table')
function callback(response)  {
  list = response;
  renderTable(list);
  console.log(response);
}

$.ajax({
  dataType: "json",
  url: "data.json",
  success: callback,
  async: false
});

function renderTable(list) {
  var table = ''
  for (i = 0; i < list.length; i++) {
    var row =
     `<tr>
        <td>${list[i].id}</td>
        <td>${list[i].firstName}</td>
        <td>${list[i].lastName}</td>
        <td>${list[i].dateOfBirth}</td>
        <td>${list[i].company}</td>
        <td>${list[i].note}</td>
      </tr>`
    table += row;
  }
  document.getElementById("tbody").innerHTML = table;
}

// SORTING


var sortOrder = 1
function dynamicSort(property) {
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

var id = document.getElementById("ID");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var DoB = document.getElementById("dateOfBirth");
var company = document.getElementById("company");
var note = document.getElementById("note");


id.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("id")));
  sortOrder = sortOrder * -1;
});

firstName.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("firstName")));
  sortOrder = sortOrder * -1;
});

lastName.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("lastName")));
  sortOrder = sortOrder * -1;
});
dateOfBirth.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("dateOfBirth")));
  sortOrder = sortOrder * -1;
});
company.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("company")));
  sortOrder = sortOrder * -1;
});

note.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("note")));
  sortOrder = sortOrder * -1;
});

id.addEventListener("click", function() {
  renderTable(list.sort(dynamicSort("id")));
  sortOrder = sortOrder * -1;
});
