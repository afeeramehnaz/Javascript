class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log("My name is "+this.name+" and my age is "+this.age);
    }
}
const person=new student("AFEERA MEHNAZ",23);
person.greet();

