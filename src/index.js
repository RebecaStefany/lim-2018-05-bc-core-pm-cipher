//Devuelve una referencia al elemento por su ID
document.getElementById("encode").addEventListener("click", () =>{
  const text = document.getElementById("text").value;
  const valor = document.getElementById("valor").value;
  const cifrado = document.getElementById("result");
  cifrado.innerHTML = cipher.encode(valor, text);
});
//Devuele una referencia al
document.getElementById("decode").addEventListener("click", () =>{
  const text = document.getElementById("text").value;
  const valor = document.getElementById("valor").value;
  const descifrado = document.getElementById("result");
  descifrado.innerHTML = cipher.decode(valor, text);
});
