function isPalindrome(frase){
  let fraseRecebida = frase;
  let tamanhoFrase = fraseRecebida.length;
  let indiceInversao = tamanhoFrase;
  let consoleImpressao = fraseRecebida.charAt(tamanhoFrase-1);

  for(let i = 0; i < tamanhoFrase; i++){
    let letraAoContrario = fraseRecebida.charAt(indiceInversao - 2);
    consoleImpressao += letraAoContrario;
    indiceInversao -= 1;
  }
  console.log(consoleImpressao);
  
  if(consoleImpressao === fraseRecebida){
    return true;
  }else{
    return false;
  }

}




function arrayMaxMin(arr){
    /* Seu código aqui */
}
