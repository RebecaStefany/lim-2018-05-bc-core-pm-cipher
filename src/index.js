//Boton para realizar la Funcion de Cifrado
document.getElementById("encode").addEventListener("click", () =>{
  //Obteniendo el texto a Cifrar
  const text = document.getElementById("text").value;
  //Obteniendo el valor o posición a Cifrar
  const valor = document.getElementById("valor").value;
  //Mostrando el resultado del mensaje Cifrado
  const cifrado = document.getElementById("result");
  cifrado.innerHTML = cipher.encode(valor, text);
});
//Boton para realizar la funcion de Descifrado
document.getElementById("decode").addEventListener("click", () =>{
  //Obteniendo el texto a Descrifrar
  const text = document.getElementById("text").value;
  //Obteniendo el valor o posición a Descifrar
  const valor = document.getElementById("valor").value;
  //Mostrando el resultado del mensaje descifrado
  const descifrado = document.getElementById("result");
  descifrado.innerHTML = cipher.decode(valor, text);
});
//Boton para realizar la funcion de abrir el area de Cifrado
document.getElementById("buttonOpen").addEventListener("click", () =>{
  //Nos muestra el área de Cifrado / Descifrado
  document.getElementById("contenido").style.display = '';
  let view = document.getElementById("view");
  view.scrollIntoView();
});