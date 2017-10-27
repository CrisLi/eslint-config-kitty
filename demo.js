
class Person {

  constructor() {
    this.name = 'Chris';
    this.age = 33;
  }

  sayHello() {
    console.log(`hello, my name is ${this.name}.`);
  }

}

const my = new Person();

const { name, age } = my;

console.log(name, age);

function testIt() {
  my.sayHello();
}

testIt();
