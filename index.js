function getIMC(){
  var peso=parseFloat(document.getElementById(´Peso´)value);
  var altura=parseFloat(document.getElementById(´Altura´)value);
  var imc=Peso/(altura*altura);
  document.getElementById("imc").innerHTML=imc;
}
