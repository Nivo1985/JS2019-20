let person;

try {
    person = Karol;    
} catch (error) {
    person = {}; //damage constrol
    console.log('error: ', error.message); // logging 
}

person.test = 'test Value';
console.log(person);
console.log('done');