const Intern = require("../lib/Intern");

test("Can create a new intern object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});

test("Can set name in Intern object", () => {
  const intern = new Intern("Salma");
  expect(intern.name).toBe("Salma");
});

test("Can set Intern object_id in Intern object", () => {
  const intern = new Intern("Salma", 10);
  expect(intern.employee_id).toBe(10);
});

test("Can set email in intern object", () => {
  const intern = new Intern("Salma", 10, "salma@gmail.com");
  expect(intern.email).toBe("salma@gmail.com");
});

test("Can get school from getSchool() method", () => {
  const intern = new Intern("Salma", 10, "salma@gmail.com", "Salma");
  expect(intern.getSchool()).toBe("Salma");
});
