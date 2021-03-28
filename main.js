const uid = Symbol("uid");

const user = {
  [uid]: "p1",
  name: "Alex",
  age: 16,
  [Symbol.toStringTag]: "User Object",
};

user[uid] = "p2";

user.id = "p2";
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

const course = {
  title: "rubberDuck",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course.toString());
Reflect.deleteProperty(course, "title");

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title, pCourse.length);
pCourse.rating = 5;

const obj = {
  name: "alex",
};
