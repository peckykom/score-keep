import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {



    //class Person {
    //    constructor(name = "Anonymous", age = 0) {
    //       this.name = name;
    //       this.age = age;
    //    }
    //    getGreeting() {
    //        return "Hi I am " + this.name + ".";
    //    }
    //    getAge(){
    //        return "I am " + this.age + "years old.";
    //    }
    //    getPersonDescription(){
    //        return "I am " + this.name + " and I am " + this.age + "years old.";
    //    }
    //}
    //
    //class Employee extends Person {
    //    constructor(name, age, title) {
    //        super(name, age);
    //        this.title = title;
    //    }
    //    hasJob() {
    //        return  !!this.title;
    //    }
    //    getGreeting(){
    //        if (this.title) {
    //            return "HI Iam " + this.name + " I work as " + this.title;
    //        } else {
    //            return super.getGreeting();
    //        }
    //    }
    //}
    //
    //class Programmer extends Person {
    //    constructor(name, age, language = "assambly") {
    //        super(name, age);
    //        this.language = language;
    //    }
    //    getGreeting(){
    //        return "Hi I am " + this.name + " I am programmer " + this.language;
    //    }
    //}
    //
    //let me = new Employee("Andrew", 25);
    //console.log(me.getGreeting(), me.getAge());
    //console.log(me.hasJob());
    //console.log(me.getGreeting());
    //
    //
    //let person = new Employee("Mike", 38, "db admin");
    //console.log(person.getPersonDescription());
    //console.log(person.hasJob());
    //console.log(person.getGreeting());
    //
    //let userOne = new Programmer("Andrew", 20, "JavaScript");
    //console.log(userOne.getGreeting());
});

