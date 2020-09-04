let myTest = require("../src/person");

let person = new myTest.Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);
describe("testing function class", function() {
  it("should return name", function() {
    expect(person.name).toEqual("Ryan");
  });
  it("should return age", function() {
    expect(person.age).toEqual(30);
  });
  it("should return gender", function() {
    expect(person.gender).toEqual("male");
  });
  it("should return interests", function() {
    expect(person.interests).toEqual([
      "being a hardarse",
      "agile",
      "ssd hard drives"
    ]);
  });
});
describe("testing method which is hello", function() {
  let greeting = myTest.hello;
  it("should return hello", function() {
    expect(myTest.person).toEqual(greeting);
  });
});
