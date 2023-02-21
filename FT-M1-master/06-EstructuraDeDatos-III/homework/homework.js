'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}
BinarySearchTree.prototype.insert = function (value) {
	// pregunta si el valor que se introduce por parametro es menor que el "padre" (this.value)
	if (value < this.value) {
		//Se pregunta si this.left no tiene nada o es igual a null
		if (!this.left) {
			this.left = new BinarySearchTree(value); // si no tiene nada se guarda el nuevo arbol en ese lugar
		} else {
			this.left.insert(value); // si no, llamamos a la misma función para que pregunte en el siguiente arbol
		}
	}
	// pregunta si el valor que se introduce por parametro es mayor que el "padre" (this.value)
	if (value >= this.value) {
		//se repite el código de arriba pero con right
		if (!this.right) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
};
BinarySearchTree.prototype.size = function () {
	// arriba poner como parametro node=this^
	// if (node) return 1 + this.size(node.left) + this.size(node.right);
	// return 0;
	//creamos una variable contador
	let count = 0;
	count++;
	//Si this.left existe sumar todo lo que hay en la izquierda
	if (this.left) {
		count += this.left.size();
	}
	//Si this.right existe sumar todo lo que hay en la izquierda
	if (this.right) {
		count += this.right.size();
	}
	return count;
};

BinarySearchTree.prototype.contains = function (value) {
	//si contiene el valor retornar true
	if (value === this.value) return true;
	//si el valor que se pasa por parametro es menor que this.value y this.left existe, recorremos por la izquierda
	if (value < this.value && this.left) {
		//preguntamos si contiene el valor, pero solo retornamos en caso de que sea true
		if (this.left.contains(value)) return true;
	}
	//si el valor que se pasa por parametro es mayor que this.value y this.right existe, recorremos por la derecha
	if (value >= this.value && this.right) {
		//preguntamos si contiene el valor, pero solo retornamos en caso de que sea true
		if (this.right.contains(value)) return true;
	}
	return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
	if (order === 'in-order' || !order) {
		if (this.left) this.left.depthFirstForEach(cb, order);
		cb(this.value);
		if (this.right) this.right.depthFirstForEach(cb, order);
	}
	if (order === 'pre-order') {
		cb(this.value);
		if (this.left) this.left.depthFirstForEach(cb, order);
		if (this.right) this.right.depthFirstForEach(cb, order);
	}
	if (order === 'post-order') {
		if (this.left) this.left.depthFirstForEach(cb, order);
		if (this.right) this.right.depthFirstForEach(cb, order);
		cb(this.value);
	}
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   cb(this.value);

	if (this.left) {
		array.push(this.left);
	}

	if (this.right) {
		array.push(this.right);
	}

	let nextNode = array.shift();
	if (nextNode) {
		nextNode.breadthFirstForEach(cb, array);
	}
};

// const tree = new BinarySearchTree(30)
// tree.insert(20)
// tree.insert(50)
// tree.insert(35)
// console.log(tree.size())
// console.log(tree.contains(30))
// console.log(tree.contains(35))
// tree

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree,
};
