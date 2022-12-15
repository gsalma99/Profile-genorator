const Engineer = require('../lib/Engineer');

test('Can create a new engineer object', () => {
    const engineer = new Engineer();
    expect (typeof(engineer)).toBe('object');
});

test('Can set name in engineer object', () => {
    const engineer = new Engineer("Salma");
    expect(engineer.name).toBe("Salma")
});

test('Can set engineer object_id in engineer object', () => {
    const engineer = new Engineer("Salma", 10);
    expect(engineer.employee_id).toBe(10);
});

test('Can set email in engineer object', () => {
    const engineer = new Engineer("Salma", 10, "salma@gmail.com");
    expect(engineer.email).toBe("salma@gmail.com");
});

test('Can get github from getGitHub() method', () => {
    const engineer = new Engineer("Salma", 10, "salma@gmail.com", "Salma")
    expect(engineer.getGithub()).toBe("Salma")
});