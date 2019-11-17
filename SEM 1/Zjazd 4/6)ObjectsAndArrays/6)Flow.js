let apiObject = {
  getPeople: () => `[
        {
            "id":1231,
            "name":"Karol Rogowski"
        },
        {
            "id":2123,
            "name":"Jan Kowalski"
        },
        {
            "id":3111,
            "name":"Robert Lewandowski"
        }
    ]`
};

function Person(firstName, lastName, id) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
}

// let result = JSON.parse(apiObject.getPeople());
// console.log(
//   result.map(p => new Person(p.name.split(" ")[0], p.name.split(" ")[1], p.id))
// );

console.log(
  JSON.parse(apiObject.getPeople()).map(
    p => new Person(p.name.split(" ")[0], p.name.split(" ")[1], p.id)
  )
);
