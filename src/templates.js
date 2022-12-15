const InternTemplate = engineer => {
    const name = intern.name;
    const id = intern.employee_id;
    const email = intern.email;
    const school = intern.getSchool();
    const role = intern.getRole();

    return `

    <h2>${role.toUpperCase()}</h2>
    <div>Intern Name: ${name}</div>
    <div>Intern Id: ${id}</div>
    <div>Intern Email: ${email}</div>
    <div>Intern Schooling: ${school}</div>
    <div>Intern Role: ${role}</div>
`
}

const engineerTemplate = engineer => {
    const name = engineer. name;
    const id = engineer.employee_id;
    const email = engineer.email;
    const github = engineer.getGitHub();
    const role = engineer.getRole();

    return `

    <h2>${role.toUpperCase()}</h2>
    <div>Enineer Name: ${name}</div>
    <div>Enineer Id: ${id}</div>
    <div>Enineer Email: ${email}</div>
    <div>Enineer Github: ${github}</div>
    <div>Enineer Role: ${role}</div>
`
}