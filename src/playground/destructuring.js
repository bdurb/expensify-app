// object destructuring
const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Funkytown',
    temp: 107
  }
};

const {name = 'Anon', age} = person;

// if no person.name it will default to 'anon'

console.log(`${name} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
console.log(`its ${temperature} in ${city}.`);
}

// Array destructuring

const address = ['123 fake street', 'funkytown', 'somestate', '12345'];

const [street, city, state, zip] = address;

// if you wanted to skip street, you would leave street out and keep the ,
