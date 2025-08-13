const person = {
firstname: 'Jane',
lastname: 'Doe',
fullname: function() {
    return this.firstname + ' ' + this.lastname;
}
};
console.log(person.fullname())

let persons = {
firstname: 'Jane',
lastname: 'Doe',
getFullName: function () {
    return this.firstname + " " + this.lastname
},
address: {
    city: "doswell",
    zipcode: "123456",
    street: "park way"
}
}

console.log(persons.getFullName())
console.log(persons.address.city)
console.log(persons.address.zipcode)
console.log(persons.address.street)
console.log(persons.getFullName())
console.log(persons.address)
delete persons.address
console.log(persons.address)