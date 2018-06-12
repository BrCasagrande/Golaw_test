'use strict';

var btnEnv = document.getElementsByClassName('btn-primary')[0];
var btnReset = document.getElementsByClassName('btn-light')[0];
var $ = document.querySelectorAll.bind(document);
var cpf = $('#frm_cpf input')[0];
var linha = $('.row')[0];
var cpfPattern = /^(\d{3}\.){2}\d{3}-\d{2}/;
var nomePattern = /\w{10,50}/;
var obsPattern = /\w{1,600}/;
var emailPattern = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
var result = document.createElement("div");
var texto = document.createTextNode("");
result.appendChild(texto);
linha.appendChild(result);

var validaForm = function validaForm() {
    var nome = $('#frm_nome input')[0].value;
    var email = $('#frm_email input')[0].value;
    var pedido = '';

    if (verificaNome(nome) && verificaEmail(email) && verificaCPF() && verificaCor() != '' && verificaAcess() != '' && verificaRoda() != '' && verificaPneu() != '' && verificaObs() != '') {
        pedido = '<p>' + $('#frm_nome label')[0].innerText + ': ' + nome + '</p>\n                    <p>' + $('#frm_email label')[0].innerText + ': ' + email + '</p>\n                    <p>' + $('#frm_cpf label')[0].innerText + ': ' + cpf.value + '</p>\n                    <p>' + $('#frm_unico label')[0].innerText + ': ' + verificaCor() + '</p>\n                    <p>Acess\xF3rios: ' + verificaAcess() + '</p>\n                    <p>' + $('#frm_aro label')[0].innerText + ': ' + verificaRoda() + '</p>\n                    <p>' + $('#frm_pneu label')[0].innerText + ': ' + verificaPneu() + '</p>\n                    <p>' + $('#frm_textarea label')[0].innerText + ': ' + verificaObs() + '</p>';
        result.innerHTML = pedido;
    }
};
var verificaNome = function verificaNome(nome) {
    var small = $('#frm_nome small')[0];
    if (nome.match(nomePattern) && nome.length <= 50) {
        small.innerHTML = 'Nome valido';
        return true;
    } else {
        small.innerHTML = 'Digite um nome valido';
        $('#frm_nome input')[0].focus();
        return false;
    }
};
var verificaEmail = function verificaEmail(email) {
    var small = $('#frm_email small')[0];
    if (emailPattern.test(email) && email.length >= 5 && email.length <= 50) {
        small.innerHTML = 'E-mail valido';
        return true;
    } else {
        small.innerHTML = 'Digite um e-mail valido';
        $('#frm_email input')[0].focus();
        return false;
    }
};
var verificaCPF = function verificaCPF() {
    var small = $('#frm_cpf small')[0];
    if (cpfPattern.test(cpf.value)) {
        small.innerHTML = 'CPF valido';
        return true;
    } else {
        small.innerHTML = 'Digite um CPF valido';
        $('#frm_cpf input')[0].focus();
        return false;
    }
};

var verificaAcess = function verificaAcess() {
    var acess = $('#frm_multiplo_1 input')[0];
    var small = $('#frm_multiplo_1 small')[0];
    if (acess.checked == false) {
        small.innerHTML = 'Selecione um acessório';
        return '';
    } else {
        small.innerHTML = '';
        return 'Sim';
    }
};

var verificaCor = function verificaCor() {
    var cor = $('#frm_unico input');
    var corSel = '';
    var small = $('#frm_unico small')[0];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = cor[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            if (c.checked === true) {
                corSel = c.value;
                small.innerHTML = '';
                break;
            } else {
                small.innerHTML = 'Selecione uma cor';
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return corSel;
};
var verificaRoda = function verificaRoda() {
    var roda = $('#frm_aro option');
    var aro = '';
    var small = $('#frm_aro small')[0];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = roda[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var r = _step2.value;

            if (r.selected === true && r.value != '') {
                aro = r.value;
                small.innerHTML = 'ok';
                break;
            } else {
                small.innerHTML = 'Selecione uma roda';
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return aro;
};
var verificaPneu = function verificaPneu() {
    var pneu = $('#frm_pneu option');
    var ps = '';
    var small = $('#frm_pneu small')[0];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = pneu[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var p = _step3.value;

            if (p.selected === true) {
                ps = p.value;
                small.innerHTML = '';
                break;
            } else {
                small.innerHTML = 'Selecione um pneu';
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return ps;
};
var verificaObs = function verificaObs() {
    var obs = $('#frm_textarea textarea')[0].value;
    var obsResp = '';
    var small = $('#frm_textarea small')[0];
    if (obsPattern.test(obs) && obs.length > 0 && obs.length <= 600) {
        obsResp = obs;
    } else {
        small.innerHTML = 'Preencha a observação com no máximo 600 caracteres';
    }
    return obsResp;
};

var limpaForm = function limpaForm(e) {
    e.preventDefault();
    var cor = $('#frm_unico input');
    var roda = $('#frm_aro option');
    var pneu = $('#frm_pneu option');
    var small = $('small');

    $('#frm_nome input')[0].value = '';
    $('#frm_email input')[0].value = '';
    $('#frm_cpf input')[0].value = '';
    $('#frm_multiplo_1 input')[0].checked = false;
    $('#frm_textarea textarea')[0].value = '';

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = cor[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var c = _step4.value;
            c.checked = false;
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = roda[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var r = _step5.value;
            r.selected = false;
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = pneu[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var p = _step6.value;
            p.selected = false;
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = small[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var s = _step7.value;
            s.innerHTML = '';
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    $('#frm_nome input')[0].focus();
};
var refMask = function refMask() {
    setTimeout(valMask(), 1);
};
var valMask = function valMask() {
    cpf.value = cpfMask(cpf.value);
};
var cpfMask = function cpfMask(cpf) {
    if (cpf.length > 0 && cpf.length <= 14) {
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        while (cpf.length > 14) {
            cpf = cpf.replace(/.$/g, "");
        }
    }
    return cpf;
};

$('#frm_cpf input')[0].addEventListener('keyup', refMask);
$('#frm_textarea textarea')[0].addEventListener('keyup', function () {
    var ob = $('#frm_textarea textarea')[0].value;
    $('#frm_textarea small')[0].innerHTML = ob.length + ' de 600 caracteres';
});
btnEnv.addEventListener('click', validaForm);
btnReset.addEventListener('click', limpaForm);