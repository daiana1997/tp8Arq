$(function() {

    $('#cargar').click(function(){
        id = ID;
        if($('#cadena').val() == ""){
            $(this).popover('show');
            return false;
        }else{
            $(this).popover('hide');
            LoadString(id)
           
            Clear();
            return true;
        }
    });


});

  /******************/
 /* CORE FUNCTIONS */
/******************/



function LoadString(table){
    var cadena = $('#cadena').val();
    console.log("cadena", $('#cadena').val());


    Machines[id].Count =  $('#desplazamiento').val();

    let desplazamiento = $('#desplazamiento').val();

    if ((id=== 1) || (id === 2) ){

        let auxiliar = $('#desplazamiento').val();
        desplazamiento = parseInt(auxiliar,10);
        console.log("desplazamiento forzado a ser int");
    }

    console.log("desplazamiento", desplazamiento);
    
    console.log(id);
    let textoCifrado= "";
    switch (id) {
        case 1:
            textoCifrado = cifradorCesar(cadena, desplazamiento);
            
          break;
        case 2:
            textoCifrado = cifradorCesar(cadena, -desplazamiento);
          break;
        case 3:
            textoCifrado = cifradorVigenere(cadena, desplazamiento);
        break;
        case 4:
            textoCifrado = descifradorVigenere(cadena, desplazamiento);
          break;
        default:
          console.log('error');
      }

    console.log("Texto cifrado:", textoCifrado);
    var result = document.getElementById('resultado');
    result.textContent = textoCifrado;
      
        return true;
}




function cifradorCesar(texto, desplazamiento) {
    let resultado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
      if (caracter.match(/[a-z]/i)) {
        let codigo = texto.charCodeAt(i);
        let base = caracter.match(/[a-z]/) ? 97 : 65;
        codigo = (codigo - base + desplazamiento) % 26 + base;
        resultado += String.fromCharCode(codigo);
      } else {
        resultado += caracter;
      }
    }
  
    return resultado;
  }
  
  

  function cifradorVigenere(texto, clave) {
    let resultado = "";
    const textoNormalizado = texto.toUpperCase().replace(/[^A-Z]/g, "");
    const claveNormalizada = clave.toUpperCase().replace(/[^A-Z]/g, "");
    const longitudTexto = textoNormalizado.length;
    const longitudClave = claveNormalizada.length;
    
    for (let i = 0; i < longitudTexto; i++) {
      let caracter = textoNormalizado[i];
      let codigoCaracter = caracter.charCodeAt(0) - 65;
      let codigoClave = claveNormalizada.charCodeAt(i % longitudClave) - 65;
      let codigoCifrado = (codigoCaracter + codigoClave) % 26;
      let caracterCifrado = String.fromCharCode(codigoCifrado + 65);
      resultado += caracterCifrado;
    }
  
    return resultado;
  }
  
  
  function descifradorVigenere(textoCifrado, clave) {
    let resultado = "";
    const textoCifradoNormalizado = textoCifrado.toUpperCase().replace(/[^A-Z]/g, "");
    const claveNormalizada = clave.toUpperCase().replace(/[^A-Z]/g, "");
    const longitudTexto = textoCifradoNormalizado.length;
    const longitudClave = claveNormalizada.length;
  
    for (let i = 0; i < longitudTexto; i++) {
      let caracterCifrado = textoCifradoNormalizado[i];
      let codigoCifrado = caracterCifrado.charCodeAt(0) - 65;
      let codigoClave = claveNormalizada.charCodeAt(i % longitudClave) - 65;
      let codigoDescifrado = (codigoCifrado - codigoClave + 26) % 26;
      let caracterDescifrado = String.fromCharCode(codigoDescifrado + 65);
      resultado += caracterDescifrado;
    }
  
    return resultado;
  }
  
  