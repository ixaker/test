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

    // var res = EncodeStr("Привет мир!");
    // alert(res);
    // alert(srok);
    // alert(client);
    // alert(manager);
    // alert(material);
    // alert(kolvo);

    // alert("Заявка отправлена.");

    // alert(Asc("П"));

    var temp = "";

    for (var i = 0; i < 256; i++) {
      temp += i + " " + Chr(i) + "\r\n";
    }
    alert(temp);

    // П = 207

var charCode = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

}

function EncodeStr(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += d2h(str[i].charCodeAt(0));

        alert(Asc("П"));

    }
    return result;
}

function h2d(h) {
    return parseInt(h, 16);
}

function d2h(d) {
    return d.toString(16);
}

function Asc(String) {
    return String.charCodeAt(0);
}

function Chr(AsciiNum) {
    return String.fromCharCode(AsciiNum);
}
