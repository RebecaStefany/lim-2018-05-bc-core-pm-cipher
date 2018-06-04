// objeto Global Window
window.cipher = {
  // metodo Encode
  encode: (offset, string) => {
    // declarando 'Cifrado' para almacenar las letras Cifradas
    let cifrado = '';
    // obteniendo el residuo del Offset
    offset = offset % 26;
    // bucle para almacenar las letras cifradas
    for(let i = 0; i < string.length; i++){
      // oteniendo el valor Ascii de las letras
      let ascii = string.charCodeAt(i);
      // declarando formula para obtener la posición
      let formula;
      // obteniendo las posiciones por letras mayusculas
      if((ascii >= 65) && (ascii <= 90)){
        // almacenando la posicion de las letras
        formula = (ascii - 65 + offset)%26+65;
        // obteniendo las posiciones por letras minusculas
      } else if((ascii >= 97) && (ascii <= 122)){
        // almacenando la posicion de las letras
        formula = (ascii - 97 + offset) % 26 + 97;
        // o Devolver el mismo caracter cuando no es letra
      } else{
        formula = ascii;
      }
      // almacenando las letras cifradas y convirtiendos en string(letras)
      cifrado += String.fromCharCode(formula);
    }
    return cifrado;
  },
  // metodo Decode
  decode: (offset, string) =>{
    // declarando 'Descifrado' para almacenar las letras Descifrada
    let descifrado = '';
    // obteniendo el residuo del Offset
    offset = offset % 26;
    // bucle para almacenar las letras descifradas
    for(let i=0; i < string.length; i++){
      // obteniendo el valor Ascii de las letras
      let ascii = string.charCodeAt(i);
      // declarando formula para obtener la posición
      let formula;
      // obteniendo las posiciones por letras mayusculas
      if((ascii >= 65) && (ascii <= 90)){
        // almacenando la posicion de las letras
        formula = (ascii - 65 - offset + 26) % 26 + 65;
        // obteniendo las posiciones por letras minusculas
      } else if((ascii >= 97) && (ascii <= 122)){
        // almacenando la posicion de las letra
        formula = (ascii - 97 - offset + 26) % 26 + 97;
        // o Devolver el mismo caracter cuando no es letra
      }else{
        formula = ascii;
      }
      // almacenando las letras descifradas y convirtiendos en string(letras)
      descifrado += String.fromCharCode(formula);
    }
    return descifrado;
  },
  // metodo createCipherWithOffset
  createCipherWithOffset: (offset) => {
  // retornando un objeto con dos metodos
  return{
      // funcion encode
      encode:(string) => {
            //retornando cipher.encode con un string
             return cipher.encode(offset, string);
          },
      // funcion decode
      decode:(string) => {
          //retornando cipher.decode con un string
           return cipher.decode(offset, string);
          }
        };
  }
};
