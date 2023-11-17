var Name = 'Bryan';
Name = 'Alex';

console.log(Name);

let fruit = 'apple';
fruit = 'pear';

console.log(fruit);

const animal = 'cat';

console.log(animal);

const fruitFunction = () => {
  if (true) {
    var fruit1 = 'banana'; // function scope
    let fruit2 = 'apple'; // block scope
    const fruit3 = 'pear'; // block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruitFunction();
