var charArr = ['', '', '‚', 'ѓ', '„', '…', '†', '‡', '€', '‰', 'Љ', '‹', 'Њ', 'Ќ', 'Ћ', 'Џ', 'ђ', '‘', '’', '“', '”', '•', '–', '—', '', '™', 'љ', '›', 'њ', 'ќ', 'ћ', 'џ', ' ', 'Ў', 'ў', 'Ј', '¤', 'Ґ', '¦', '§', 'Ё', '©', 'Є', '«', '¬', '', '®', 'Ї', '°', '±', 'І', 'і', 'ґ', 'µ', '¶', '·', 'ё', '№', 'є', '»', 'ј', 'Ѕ', 'ѕ', 'ї', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

// var server = 'http://192.168.1.169:8090/';

var server = 'http://212.1.84.222:8090/'; //сервер куда отправдять данные

//создать заявку на закупку
function create() {
    var srok = document.getElementById('srok').value;
    var client = document.getElementById('client').value;
    var manager = document.getElementById('manager').value;
    var material = document.getElementById('material').value;
    var kolvo = document.getElementById('kolvo').value;

    if (srok === '') {
        alert("Заполните срок.");
    } else if (client === '') {
        alert("Заполните заказчик.");
    } else if (manager === '') {
        alert("Заполните менеджера.");
    } else if (material === '') {
        alert("Заполните материал.");
    } else if (kolvo === '') {
        alert("Заполните количество.");
    } else {
        //<zakupka срок="" клиент="" менеджер="" материал="" количество=""></zakupka>
        var xml = '<zakupka';
        xml += ' срок="' + srok.replace(/(\d*)-(\d*)-(\d*)/, '$3.$2.$1') + '"';
        xml += ' клиент="' + client + '"';
        xml += ' менеджер="' + manager + '"';
        xml += ' материал="' + material + '"';
        xml += ' количество="' + kolvo + '"';
        xml += '></zakupka>';

        send('СоздатьЗакупку', xml);
        alert('Отправлено.');

        document.getElementById('material').value = '';
        document.getElementById('kolvo').value = '';
    }
}

//отправка данных на сервер
function send(komanda, parametr) {
    var xmlhttp = getXmlHttp();
    xmlhttp.open("POST", server + EncodeStr(komanda) + '/' + EncodeStr(parametr) + '/' + EncodeStr("web"), true);
    xmlhttp.send();
}

function getXmlHttp() {
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (ee) {}
    }
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    }
}

function EncodeStr(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += '$' + d2h(Asc(str[i]));
    }
    return result.toUpperCase();
}

function Asc(char) {
    var code = char.charCodeAt(0);

    if (code < 128 && code > 0) {
        return code;
    } else {
        for (var i = 0; i < 128; i++) {
            if (char == charArr[i]) {
                return (i + 128);
            }
        }
    }
    return 0;
}

function d2h(d) {
    return (d ^ 0).toString(16);
}

function h2d(h) {
    return parseInt(h, 16);
}
