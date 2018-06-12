let btnEnv = document.getElementsByClassName('btn-primary')[0];
let btnReset = document.getElementsByClassName('btn-light')[0];
let $ = document.querySelectorAll.bind(document);
let cpf = $('#frm_cpf input')[0];
let linha = $('.row')[0];
let cpfPattern = /^(\d{3}\.){2}\d{3}-\d{2}/;
let nomePattern = /\w{10,50}/;
let obsPattern = /\w{1,600}/;
let emailPattern = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
let result = document.createElement("div");
let texto = document.createTextNode("");   
result.appendChild(texto);
linha.appendChild(result);

const validaForm = () =>{  
    let nome = $('#frm_nome input')[0].value;
    let email = $('#frm_email input')[0].value;
    let pedido = '';   
     
    if( verificaNome(nome) && verificaEmail(email) && verificaCPF() && verificaCor() != '' 
        && verificaAcess() != '' && verificaRoda() != '' && verificaPneu() != '' 
        && verificaObs() != '' ){
        pedido = `<p>${$('#frm_nome label')[0].innerText}: ${nome}</p>
                    <p>${$('#frm_email label')[0].innerText}: ${email}</p>
                    <p>${$('#frm_cpf label')[0].innerText}: ${cpf.value}</p>
                    <p>${$('#frm_unico label')[0].innerText}: ${verificaCor()}</p>
                    <p>Acessórios: ${verificaAcess()}</p>
                    <p>${$('#frm_aro label')[0].innerText}: ${verificaRoda()}</p>
                    <p>${$('#frm_pneu label')[0].innerText}: ${verificaPneu()}</p>
                    <p>${$('#frm_textarea label')[0].innerText}: ${verificaObs()}</p>`;
                    result.innerHTML = pedido;  
    }
}
const verificaNome = nome =>{    
    let small = $('#frm_nome small')[0];
    if(nome.match(nomePattern) && nome.length <=50){  
        small.innerHTML = 'Nome valido';      
        return true;
    }else {
        small.innerHTML = 'Digite um nome valido';
        $('#frm_nome input')[0].focus();
        return false;
    }
}
const verificaEmail = email => {  
    let small = $('#frm_email small')[0];  
    if(emailPattern.test(email) && email.length >=5 && email.length <=50){ 
        small.innerHTML = 'E-mail valido';         
        return true;
    }else {
        small.innerHTML = 'Digite um e-mail valido';
        $('#frm_email input')[0].focus();
        return false;
    }
}
const verificaCPF = () => {
    let small = $('#frm_cpf small')[0];  
    if(cpfPattern.test(cpf.value)){      
        small.innerHTML = 'CPF valido';         
        return true;
    }else {
        small.innerHTML = 'Digite um CPF valido';
        $('#frm_cpf input')[0].focus(); 
        return false;
    }
}

const verificaAcess = () => {
    let acess = $('#frm_multiplo_1 input')[0];
    let small = $('#frm_multiplo_1 small')[0]; 
    if(acess.checked == false){ 
        small.innerHTML ='Selecione um acessório';
        return ''; 
    }
    else{ 
        small.innerHTML ='';
        return 'Sim';
    }
}

const verificaCor = () =>{    
    let cor = $('#frm_unico input');
    let corSel = '';
    let small = $('#frm_unico small')[0]; 
    for(let c of cor){
        if(c.checked === true){ 
            corSel = c.value;
            small.innerHTML ='';
            break; }
        else{ 
            small.innerHTML = 'Selecione uma cor';
         }
    }
    return corSel;
}
const verificaRoda = () =>{    
    let roda = $('#frm_aro option');
    let aro = '';
    let small = $('#frm_aro small')[0]; 
    for(let r of roda){
        if(r.selected === true && r.value != ''){ 
            aro = r.value;
            small.innerHTML ='ok';
            break; }
        else{ 
            small.innerHTML = 'Selecione uma roda';
         }
    }
    return aro;
}
const verificaPneu = () =>{    
    let pneu = $('#frm_pneu option');
    let ps = '';
    let small = $('#frm_pneu small')[0]; 
    for(let p of pneu){
        if(p.selected === true){ 
            ps = p.value;
            small.innerHTML ='';
            break; }
        else{ 
            small.innerHTML = 'Selecione um pneu';
         }
    }
    return ps;
}
const verificaObs = () =>{    
    let obs = $('#frm_textarea textarea')[0].value;
    let obsResp = '';
    let small = $('#frm_textarea small')[0];
    if(obsPattern.test(obs) && obs.length > 0 && obs.length <=600){
        obsResp = obs;
    }else{ 
        small.innerHTML = 'Preencha a observação com no máximo 600 caracteres' }
    return obsResp;
}

const limpaForm = e =>{  
    e.preventDefault();  
    let cor = $('#frm_unico input');
    let roda = $('#frm_aro option');
    let pneu = $('#frm_pneu option');
    let small = $('small');

    $('#frm_nome input')[0].value = '';
    $('#frm_email input')[0].value = '';
    $('#frm_cpf input')[0].value = '';
    $('#frm_multiplo_1 input')[0].checked = false;    
    $('#frm_textarea textarea')[0].value = '';

    for(let c of cor){ c.checked = false}
    for(let r of roda){ r.selected = false}
    for(let p of pneu){ p.selected = false}
    for(let s of small){ s.innerHTML = ''}


    $('#frm_nome input')[0].focus();
}
const refMask = () => {
    setTimeout(valMask(),1)
}
const valMask = () => {
    cpf.value=cpfMask(cpf.value)
}
const cpfMask = (cpf) => {
    if(cpf.length > 0 && cpf.length <= 14){
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    }else{ while(cpf.length > 14){ cpf=cpf.replace(/.$/g,"") } }
    return cpf;
}

$('#frm_cpf input')[0].addEventListener('keyup', refMask);
$('#frm_textarea textarea')[0].addEventListener('keyup', ()=>{
    let ob = $('#frm_textarea textarea')[0].value;
    $('#frm_textarea small')[0].innerHTML = `${ob.length} de 600 caracteres`;    
});
btnEnv.addEventListener('click', validaForm);
btnReset.addEventListener('click', limpaForm);