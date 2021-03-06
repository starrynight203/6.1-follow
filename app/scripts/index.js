// var Person = require('./models/person');
var PersonCollection = require('./models/person-collection');

// var jimmy = new Person({age: 42, firstName: 'Jimmy', lastName: 'John'});
// var wendy = new Person({age: 40, firstName: 'Wendy', lastName: 'Thomas'});

var people = new PersonCollection([
  {age: 42, firstName: 'Jimmy', lastName: 'John'},
  {age: 40, firstName: 'Wendy', lastName: 'Thomas'}
]);

console.log(people);

people.add({age: 25, firstName: 'two', lastName: 'chefs'});
people.each(function(person){
  console.log(person.get('firstName'));
  person.sayName();
});

// console.log(jimmy);
// console.log(jimmy.get("age"));
// console.log(jimmy.get("firstName"));
// console.log(jimmy.get("lastName"));
// console.log(jimmy.set({"age": 65}));
// console.log(jimmy.get("age"));
// console.log(jimmy.makeSandwich());
// jimmy.sayName();
// wendy.sayName();
