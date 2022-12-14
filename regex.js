// CEP
let CEP = "59900-000";
let regexCep = /^([0-9]{5})\-([0-9]{3})$/g;
    if (regexCep.test(CEP)) {
        console.log("Cep validado!");
    } else {
        console.log("Cep não validado!");
    }

// Telefone (com ou sem o digito 9)
let telefone = "9 9999-9999";
let regexTel = /^([9]{1})?([ ])([0-9]{4})\-([0-9]{4})$/g;
    if (regexTel.test(telefone)) {
        console.log("Telefone validado!");
    } else {
        console.log("Telefone não validado!");
    }

// CPF
let CPF = "999.999.999-99";
let regexCPF = /^([0-9]{3})\.([0-9]{3})\.([0-9]{3})\-([0-9]{2})$/g;
    if (regexCPF.test(CPF)) {
        console.log("CPF validado!");
    } else {
        console.log("CPF não validado!");
    }

// DATA
let data = "14/12/2022";
let regexData = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/g;
    if (regexData.test(data)) {
        console.log("Data validada!");
    } else {
        console.log("Data não validada!");
    }

//Nome completo
let nomeCompleto = "Justin Drew Bieber";
let regexNomeCompleto = /(^[A-z]{2,})/g;
    if (regexNomeCompleto.test(nomeCompleto)) {
        console.log("Nome completo validado!");
    } else {
        console.log("Nome completo não validado!");
    }

//Domínio (com ou sem o sub-dominio)
let dominio = "www.google.com";
let regexDominio = /(http(s)?)?(\:\/\/)?([a-z]{1,})\.([a-z]{1,})\.([a-z]{1,})/g;
    if (regexDominio.test(dominio)) {
        console.log("Dominio validado!");
    }  else {
        console.log("Dominio não validado!");
    }

//Email
let email = "thay7@gmail.com";
let regexEmail = /([A-z0-9]{1,})\@([A-z]{1,})\.([A-z])/g;
    if (regexEmail.test(email)) {
        console.log("Email validado!");
    }  else {
        console.log("Email não validado!");
    }

//Endereço IP
let ip = "192.168.1.1";
let regexIP = /^([0-9]{1,})\.([0-9]{1,})\.([0-9]{1,})\.([0-9]{1,})$/g;
    if (regexIP.test(ip)) {
        console.log("IP validado!");
    } else {
        console.log("IP não validado!");
    }

//Hexadecimal
let hexadecimal = "#FFFFFF";
let regexHexadecimal = /^(#)([A-f0-9]{3,})$/g;
    if (regexHexadecimal.test(hexadecimal)) {
        console.log("Hexadecimal validado!");
    } else {
        console.log("Hexadecimal não validado!");
    }
