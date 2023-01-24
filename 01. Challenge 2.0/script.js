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
    let matrizCodigo=[
                        ["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]
                    ];
    stringEncriptada=stringEncriptada.toLowerCase();
    for(let i=0;i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
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
    let matrizCodigo=[
                        ["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]
                    ];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    for(let i=0;i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function copiar(){
    var contenido=document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}