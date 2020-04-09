/////////////////////////////
// Lecture: Function constructor

var john = {
    name: "John",
    yearOfBirth: 1990,
    job: "teacher"
};

var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.caoculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    }
}

Person.prototype.caoculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastname = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.caoculateAge();
jane.caoculateAge();
mark.caoculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);

















