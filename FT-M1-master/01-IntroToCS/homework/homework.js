'use strict';
      // all ok  
function BinarioADecimal(num) {
   // let decimal = 0;
   //  for (let i = 0; i < num.length; i++) {
   //     decimal += num[i] * 2 ** (num.length - 1 - i);
   //  }
   //  return decimal;

   return parseInt(num, 2)
}

function DecimalABinario(num) {
   // let binario = [];
   // while (num != 0) {
   //    let numRedondeado = Math.floor(num/2)   
   //    let residuo = parseInt(num%2)
   //    num = numRedondeado
   //    binario.push(residuo)
   // }
   // binario.reverse()
   // binario.toString()
   // return binario.join('');

   return num.toString(2)
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
