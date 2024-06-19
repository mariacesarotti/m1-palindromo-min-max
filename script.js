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
  const arrayRecebida = arr;
  let tamanhoArray = arrayRecebida.length;
  let arrayMin = arrayRecebida[0];
  let arrayMax = arrayRecebida[1];

  for(let i = tamanhoArray - 1; i < 0; i--){
    if(arrayMin > arrayMax){
      arrayMax = arr[i];
    }else{
      arrayMin[i];
    }
  }
  let consoleLogImpressao = arrayMax + "," + arrayMin;
  return consoleLogImpressao;
}




// function arrayMaxMin(arr){
//     let arrayRecebida = arr;
//     let arrayTamanho = arrayRecebida.length;
//     let numeroMaior = arrayRecebida[0];
//     let numeroMenor = arrayRecebida[1];
//     let arrayResultado = numeroMaior + "," + numeroMenor;

//     for(let i = 0; i > arrayTamanho - 1; i++){
//         while(numeroMaior > numeroMenor){
//         numeroMenor = arrayRecebida[arrayTamanho - i];   
//         if(numeroMenor > numeroMaior){
//           numeroMaior = arrayRecebida[arrayTamanho - i];  
//         }  
//       }
//     }
//     return arrayResultado;
//   }
  
