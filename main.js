// Library land
const uid = Symbol("uid"); // "uid" is simply for console logging purposes

const user = {
  //   id: "p1",
  [uid]: "p1",
  name: "Alex",
  age: 16,
  [Symbol.toStringTag]: "User Object",
};

user[uid] = "p2"; // Defining Symbol in library ONLY => users will not be able to find the variable

// app land => Using library

user.id = "p2"; // this should not be possible
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["alex", "manu", "anna"],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  },
};

let employee = company.next();

while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
