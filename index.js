const express = require('express');
const app = express();

const students = [
    { id: "37-2496", name: "Ziad Amr  Darwish", github_username: "ziadDarwish", email: "ziaddarwish97@yahoo.com" }];
app.get('/', (request, response) => {
    response.send(`<a href="/api/students">Students</a>`);
});
app.get('/api/students', (request, response) => {
    let data = "";
    students.forEach((value) => {
        const user_id = value.id;
        const user_name = value.name;
        data += `<a href="/api/students/${user_id}">${user_name}</a><br>`;
    });
    response.send(data);
});
app.get('/api/students/:id', (request, response) => {
    var data = "";
    students.forEach((value) => {
        if(value.id === request.params.id) {
            data = `Id: ${value.id}<br>Name: ${value.name}<br>Email: ${value.email}<br>Github: ${value.github_username}`;
            return;
        }
    });
    response.send(data || 'No student matches the requested id');
});
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
