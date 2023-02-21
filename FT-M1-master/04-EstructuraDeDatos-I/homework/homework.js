'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if ( n<0 ) return 'Es un valor negativo'
   if ( n===0 || n===1) return 1
   return n * nFactorial(n-1)
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n < 0) return 'Es un valor negativo'
   if (n===0 || n===1) return n
   return nFibonacci(n-1) + nFibonacci(n-2)
}

// EJERCICIO 3
//clases ECMAscript 2015
class Queue {
   constructor () {
      this.array = []
   }
   enqueue (elemento) {
      return this.array.push(elemento)
   }
   dequeue () {
      return this.array.shift()
   }
   size () {
      return this.array.length
   }
}

// //funcion constructura
// function Queue() {
//    this.array = [];
// }
// Queue.prototype.enqueue = function(elemento) {
//    return this.array.push(elemento);
// }
// Queue.prototype.dequeue = function() {
//    return this.array.shift();
// }
// Queue.prototype.size = function() {
//    return this.array.length;
// }
// let laFilaDelBanco = new Queue()


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
