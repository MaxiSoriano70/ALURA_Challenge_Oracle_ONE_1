const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");
const imagen=document.querySelector(".img-muñeco");
const infoDerecha1=document.querySelector(".infoDerecha1");
const infoDerecha2=document.querySelector(".infoDerecha2");
const btnCopiar=document.querySelector(".btn-copiar");

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    imagen.style.display="none";
    infoDerecha1.style.display="none";
    infoDerecha2.style.display="flex";
    btnCopiar.style.display="block";
}

function encriptar(stringEncriptada){
    /* /i es paranque aecte tanto mayusculas como minusculas*/
    /* /g es para toda la linea o oración */
    /* /m es para que afecte multiples lineas o parrafos */
    stringEncriptada=stringEncriptada.toLowerCase();
    var txtCifrado=stringEncriptada.replace(/e/igm,"enter");
    var txtCifrado=txtCifrado.replace(/o/igm,"ober");
    var txtCifrado=txtCifrado.replace(/i/igm,"imes");
    var txtCifrado=txtCifrado.replace(/a/igm,"ai");
    var txtCifrado=txtCifrado.replace(/u/igm,"ufat");
    return txtCifrado;
}

function btnDesencriptar(){
    const textoEncriptado=desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    imagen.style.display="none";
    infoDerecha1.style.display="none";
    infoDerecha2.style.display="flex";
    btnCopiar.style.display="block";
}

function desencriptar(stringDesencriptada){
    /* /i es paranque aecte tanto mayusculas como minusculas*/
    /* /g es para toda la linea o oración */
    /* /m es para que afecte multiples lineas o parrafos */
    stringDesencriptada=stringDesencriptada.toLowerCase();
    var txtCifrado=stringDesencriptada.replace(/enter/igm,"e");
    var txtCifrado=txtCifrado.replace(/ober/igm,"o");
    var txtCifrado=txtCifrado.replace(/imes/igm,"i");
    var txtCifrado=txtCifrado.replace(/ai/igm,"a");
    var txtCifrado=txtCifrado.replace(/ufat/igm,"u");
    return txtCifrado;
}


function copiar(){
    var contenido=document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}