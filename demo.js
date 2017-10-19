
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

function testIt() {
  my.sayHello();
}

testIt();
