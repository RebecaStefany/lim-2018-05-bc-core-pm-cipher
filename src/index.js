
function cipher(){

    var textoCifrar = document.getElementById('textoCifrar').value;
    var valorDesplazar = document.getElementById('numeroDesplazar').value;
    var resultados = document.getElementById('Resultados');
    var cifradas = '';

    for (var i=0; i<textoCifrar.length; i++){
      var formula = (textoCifrar.toUpperCase().charCodeAt(i) - 65 + valorDesplazar) % 26 + 65;
      console.log(formula);
      var cifrado = String.fromCharCode(formula);
      cifradas += cifrado;
      console.log(cifradas);
     }
     resultados.innerHTML = cifradas;
   }

   function decipher(){

    var textoDescifrar = document.getElementById('textoCifrar').value;
    var valorDesplazar = document.getElementById('numeroDesplazar').value;
    var resultados = document.getElementById('Resultados');
    var descifradas = '';

    for (var j=0; j<textoDescifrar.length; j++){
      var formulaDes = (textoDescifrar.toUpperCase().charCodeAt(j) + 65 - valorDesplazar) % 26 + 65;
      var descifrado = String.fromCharCode(formulaDes);
      descifradas += descifrado;
     }
     resultados.innerHTML = descifradas;
   }