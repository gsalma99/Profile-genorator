
const Employee = require('../lib/Employee');

test('Can create a new employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Can set name in employee object', () => {
    const employee = new Employee("Salma");
    expect(employee.name).toBe("Salma")
});
test('Can set employee_id in employee object', () => {
    const employee = new Employee("Salma", 13);
    expect(employee.employee_id).toBe(13)

});

test('Can set email in employee object', () => {
    const employee = new Employee("Salma", 13, "salmag@gmail.com");
    expect(employee.email).toBe("salmag@gmail.com")
});

test('Can get name from getName() method', () => {
    const employee = new Employee("Salma", 13, "salmag@gmail.com");
    expect(employee.getName()).toBe("Salma");
});