//Devuelve una referencia al elemento por su ID de la función de Encode
document.getElementById("encode").addEventListener("click", () =>{
  //Extraemos el texto de através del elemento ID y lo almacenamos
  const text = document.getElementById("text").value;
  //Extraemos el texto de através del elemento ID y lo almacenamos
  const valor = document.getElementById("valor").value;
  //Imprimimos el valor devuelvo al momento de Cifrar
  const cifrado = document.getElementById("result");
  cifrado.innerHTML = cipher.encode(valor, text);
});
//Devuele una referencia al elemento por su ID de la función de Decode
document.getElementById("decode").addEventListener("click", () =>{
  //Extraemos el texto de através del elemento ID y lo almacenamos
  const text = document.getElementById("text").value;
  //Extraemos el texto de através del elemento ID y lo almacenamos
  const valor = document.getElementById("valor").value;
  //Imprimimos el valor devuelvo al momento de Descifrar
  const descifrado = document.getElementById("result");
  descifrado.innerHTML = cipher.decode(valor, text);
});
