// array destructuring

let fruit = ['apple', 'banana'];

let [a, b] = fruit;

console.log(a, fruit[1]); // {manera actual,  manera antigua}

// object destructuring

let user = { username: 'Bryan', age: 24 };

let { username, age } = user;
console.log(username, user.age); // {manera actual, manera antigua}

// spread operator

let person = { name: 'Bryan', age: 24 };
let country = 'SV';

let data = { id: 1, ...person, country };

console.log(data);

// parametros rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
}

sum(2, 2, 4, 2, 1, 12, 3, 10);
