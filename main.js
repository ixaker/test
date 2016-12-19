var charArr = ['', '', '‚', 'ѓ', '„', '…', '†', '‡', '€', '‰', 'Љ', '‹', 'Њ', 'Ќ', 'Ћ', 'Џ', 'ђ', '‘', '’', '“', '”', '•', '–', '—', '', '™', 'љ', '›', 'њ', 'ќ', 'ћ', 'џ', ' ', 'Ў', 'ў', 'Ј', '¤', 'Ґ', '¦', '§', 'Ё', '©', 'Є', '«', '¬', '', '®', 'Ї', '°', '±', 'І', 'і', 'ґ', 'µ', '¶', '·', 'ё', '№', 'є', '»', 'ј', 'Ѕ', 'ѕ', 'ї', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

// var server = 'http://192.168.1.169:8090/';
var server = 'http://212.1.84.222:8090/';
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

function send(komanda, parametr) {
    var xmlhttp = getXmlHttp();
    xmlhttp.open("POST", server + EncodeStr(komanda) + '/' + EncodeStr(parametr) + '/' + EncodeStr("web"), true);
    // xmlhttp.onreadystatechange = function() {
    //     if (xmlhttp.readyState == 4) {
    //         // if (xmlhttp.status == 200) {
    //             alert(xmlhttp.responseText);
    //         // }
    //     }
    // };

    // xmlhttp.onload = function() {
    //     alert(this.responseText);
    // };
    // xmlhttp.onerror = function() {
    //     alert('Ошибка ' + this.status);
    // };
    xmlhttp.send();

    // return "готово";

    // var client = new XMLHttpRequest();
    // client.onload = function() {
    //     // in case of network errors this might not give reliable results
    //     returnStatus(this.status);
    // };
    //$3C$7A$61$6B$75$70$6B$61$20$F1$F0$EE$EA$3D$22$61$73$61$73$61$73$22$20$EA$EB$E8$E5$ED$F2$3D$22$61$73$61$73$61$73$61$22$20$EC$E5$ED$E5$E4$E6$E5$F0$3D$22$CA$F3$EB$E8$F3$F8$20$C5$E2$E3$E5$ED$E8$E9$20$C2$E8$EA$F2$EE$F0$EE$E2$E8$F7$22$20$EC$E0$F2$E5$F0$E8$E0$EB$3D$22$73$61$73$61$73$61$22$20$EA$EE$EB$E8$F7$E5$F1$F2$E2$EE$3D$22$61$73$61$73$61$73$22$3E$3C$2F$7A$61$6B$75$70$6B$61$3E
    // client.open("POST", server + 'a/a/a/a');
    // client.send('qweerty');



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
