/**
 * This in arrow function
 */
function sayHello() {
  console.log(111111, this);

  this.name = "Tung Anh Nguyen";

  const getLanguage = () => {
    console.log(222222, this);
    console.log(333333, this.name);
  };
  getLanguage();
}

sayHello();

// avoid use arrow function in object methods
const student = {
  name: "Tung Anh",
  sayHello: () => {
    console.log("My name is", this.name); //
  },
  sayGoodbye() {
    console.log("....", this);
    console.log("Goodbye", this.name);
  },
};

student.sayHello(); // "My name is undefined"
student.sayGoodbye(); // "Goodbye Tung Anh"
