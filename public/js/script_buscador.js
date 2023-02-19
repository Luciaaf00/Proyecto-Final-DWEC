

inputBuscador = document.getElementById("inputBuscador");



document.getElementById("inputBuscador").addEventListener("keyup", buscador);



function buscador() {
    filter = inputBuscador.value.toUpperCase();
    li = lista_buscar.getElementsTagName("li");
    for(i = 0; i < li.legths; i++) {
        a = li[i].getElementsTagName("a")[0];
        textoValor = a.textContent || a.innerText;

        if(textoValor.toUpperCase().indexOf(filter) > -1){
            li[i].style.display ="";
            lista_buscar.style.display="block";
            if(inputBuscador.value === ""){
                lista_buscar.style.display="none";
            }
        }else {
            li[i].style.display ="none";
        }
    }
}



function ocultar_buscador(){
    lista_buscar.style.display="none";
}