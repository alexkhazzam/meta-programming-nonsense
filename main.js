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
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

for (const employee of company) {
  console.log(employee);
}
