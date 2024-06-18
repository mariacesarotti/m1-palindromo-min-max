function isPalindrome(frase){
  let fraseRecebida = frase;
  let tamanhoFrase = fraseRecebida.length;
  let consoleImpressao = fraseRecebida.charAt(tamanhoFrase-1);

  for(let i = tamanhoFrase - 2; i >= 0; i--){
    let letraAoContrario = fraseRecebida.charAt(i);
    consoleImpressao += letraAoContrario;
  }
  
  if(consoleImpressao === fraseRecebida){
    return true;
  }else{
    return false;
  }

}




function arrayMaxMin(arr){
}
