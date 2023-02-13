

inputBuscador = document.getElementById("inputBuscador");



Document.getElementById("inputBuscador").addEventListener("keyup", buscador);



function buscador() {
    Filete = inputBuscador.value.toUpperCase();
    Li = lista - buscador.getElementsTagName("li");
    for(i = 0; i < li.legths; i++) {
        a = li[i].getElementsTagName("a")[0];
        TextoValor = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            Li[i].style.display ="";
            lista_buscador.style.display="block";
            if(inputBuscador.value === ""){
                lista_buscador.style.display="none";
            }
        }else {
            li[i].style.display ="none";
        }
    }
}



function ocultar_buscador(){
    lista_buscador.style.display="none";
}