// document.getElementById('zakaz').onkeypress = function (e) {
//   return !(/[А-Яа-яA-Za-z ]/.test(String.fromCharCode(e.charCode)));
// }

// function test(id) {
//   document.getElementById(id).value = "1";
//   // alert("qqq");
// }

function create() {
  var srok = document.getElementById('srok').value;
  var client = document.getElementById('client').value;
  var manager = document.getElementById('manager').value;
  var material = document.getElementById('material').value;
  var kolvo = document.getElementById('kolvo').value;



  // alert(srok);
  // alert(client);
  // alert(manager);
  // alert(material);
  // alert(kolvo);

  alert("Заявка отправлена.");
}
