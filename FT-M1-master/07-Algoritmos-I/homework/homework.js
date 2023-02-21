'use strict';
// No cambies los nombres de las funciones.

function factorear(num) {
	// Factorear el número recibido como parámetro y devolver en un array
	// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
	// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
	// Tu código:
  if (!num) return 'Error'
  let array = [1]
  let div = 2
  console.log(div)
  while (num>1) {
    if (num%div!==0) ++div
    else {
      array.push(div)                
      num/=div
    } 
  }
  return array
}

function bubbleSort(array) {
	// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let current = array[j];
				array[j] = array[j + 1];
				array[j + 1] = current;
			}
		}
	}
  return array
}

function insertionSort(array) {
	// Implementar el método conocido como insertionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando arreglos
	// Devolver el array ordenado resultante
	// Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let temp = array[i]
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j+1] = temp
  }
  return array
}

function selectionSort(array) {
	// Implementar el método conocido como selectionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando dos arreglos
	// Devolver el array ordenado resultante
	// Tu código:
  for (let i = 0; i < array.length; i++) {
    let lowest = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }
    if (lowest !== i) {
      // Swap
      [array[i], array[lowest]] = [array[lowest], array[i]]
    }
  }
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	factorear,
	bubbleSort,
	insertionSort,
	selectionSort,
};
