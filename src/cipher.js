window.cipher = {
  encode: (offset, string) => {
    let cifrado = '';
    offset = offset % 26;
    for(let i = 0; i < string.length; i++){
      let ascii = string.charCodeAt(i);
      
      let formula;
      if((ascii >= 65) && (ascii <= 90)){
        formula = (ascii - 65 + offset)%26+65;
      } else if((ascii >= 97) && (ascii <= 122)){
        formula = (ascii - 97 + offset) % 26 + 97;
      } else{
        formula = ascii;
      }
      cifrado += String.fromCharCode(formula);
    }
    return cifrado;
  },

  decode: (offset, string) =>{
    let descifrado = '';
    offset = offset % 26;
    for(let i=0; i < string.length; i++){
      let ascii = string.charCodeAt(i);
    
      let formula;
      if((ascii >= 65) && (ascii <= 90)){
        formula = (ascii - 65 - offset + 26) % 26 + 65;
      } else if((ascii >= 97) && (ascii <= 122)){
        formula = (ascii - 97 - offset + 26) % 26 + 97;
      }else{
        formula = ascii;
      }
      descifrado += String.fromCharCode(formula);
    }
    return descifrado;
  },
   
  createCipherWithOffset: (offset) => {
    
  return{
      encode:(string) => {
             return cipher.encode(offset, string);
          },
          
      decode:(string) => {
           return cipher.decode(offset, string);
          }
        };
  }
};
