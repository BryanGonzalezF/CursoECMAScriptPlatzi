function square(num) {
  // funcion normal
  console.log(num * num);
}

square(2);

const square = (num) => {
  // arrow function
  console.log(num * num);
};
square(2);

const square = (num) => num * num; // arrow function con return implicito (se utiliza cuando el bloque no es tan extenso)
console.log(square(2));

/* los tres casos son una función presentadas en diferentes metodos */
