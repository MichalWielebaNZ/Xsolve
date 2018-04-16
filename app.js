// JSON Handling

var list
var table = document.getElementById('tbody #table')
function callback(response)  {
  list = response;
  console.log(response);
}

$.ajax({
  dataType: "json",
  url: "data.json",
  success: callback,
  async: false
});

for (i = 0; i < list.length; i++) {
  $( "tbody" ).append( `<tr>
  <td>${list[i].id}</td>
  <td>${list[i].firstName}</td>
  <td>${list[i].lastName}</td>
  <td>${list[i].dateOfBirth}</td>
  <td>${list[i].company}</td>
  <td>${list[i].note}</td>
</tr>` )
}

// SORTING

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

// console.log(list.sort(dynamicSort("id")));  - test / ok


// notes

var id = document.getElementById("ID");
id.addEventListener("click", list.sort(dynamicSort("id")));
