// Lista 5 - IAL010

//Exec 4

var A = new Array(2, 1, 0,722, 3, 46, -87, 32, 999,-66);
var B = new Array(38, -224, 467, 888, 1245, -97,-18, 255, 1000, -621);
var C = new Array();

for (i = 0; i< A.length &&  i < B.length; i++){
  C[i] = A[i] + B[i];
}

window.alert("As somas dos elementos presentes em A e e B são:"+'\n'+C);

//Exec 5

var arrMaior = new Array();
var nMaior = -Infinity;
var num;

for (i = 0; ; i++) {
  num = Number.parseInt(window.prompt("Digite um número <br> Obs:Digite 0 para parar"));

  if(num == 0){
    break;
  }

  arrMaior[i] = num;

  if(nMaior < arrMaior[i]) {
    nMaior = arrMaior[i];
  }
}

window.alert("Os números digitados foram: "+arrMaior+".\n O maior número digitado foi: "+nMaior);
