function isPalindrome(frase){
  let fraseRecebida = frase;
  let tamanhoFrase = fraseRecebida.length;
  let consoleImpressao = fraseRecebida.charAt(tamanhoFrase-1);

  for(let i = tamanhoFrase - 2; i >= 0; i--){
    let letraAoContrario = fraseRecebida.charAt(i);
    consoleImpressao += letraAoContrario;
  }
  
  if(consoleImpressao == fraseRecebida){
    return true;
  }else{
    return false;
  }

}




function arrayMaxMin(arr){
    let arrayRecebida = arr;
    let arrayTamanho = arrayRecebida.length;
    let numeroMaior = arrayRecebida[0];
    let numeroMenor = arrayRecebida[1];
    let arrayResultado = numeroMenor + "" + numeroMaior;

    for(let i = 0; i > arrayTamanho - 1; i++){
        if(numeroMaior > numeroMenor){
          numeroMenor = arrayRecebida[arrayTamanho - i]; 
        }
    }
    return arrayResultado;
}
