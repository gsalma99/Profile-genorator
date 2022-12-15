const Manager =require('../lib/Manager');

test('Can create a new manager object', () => {
    const manager = new Manager();
    expect (typeof(manager)).toBe('object');
});

test('Can set name in manager object', () => {
    const manager = new Manager("Salma");
    expect(manager.name).toBe("Salma")
});

test('Can set manager object_id in manager object', () => {
    const manager = new Manager ("Salma", 10);
    expect(manager.employee_id).toBe(10);
});

test('Can set email in manager object', () => {
    const manager = new Manager("Salma", 10, "salma@gmail.com");
    expect(manager.email).toBe("salma@gmail.com");
});

test('Can get school from getRole() method', () => {
    const manager = new Manager("Salma", 10, "salma@gmail.com", "Salma")
    expect(manager.getRole()).toBe("Salma")
});