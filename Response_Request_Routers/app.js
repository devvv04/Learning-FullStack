const express = require('express');
const app = express();
const port = 3000;

// Middleware to read form data (needed for POST)
app.use(express.urlencoded({ extended: true }));

// Fake database (in memory)
let users = [
    { id: 1, name: "Dev" },
    { id: 2, name: "Alex" }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/', (req, res) => {
    res.send(`
        <h1>User Dashboard</h1>
        <ul>
            <li><a href="/users">View All Users</a></li>
            <li><a href="/add">Add User</a></li>
            <li><a href="/edit/1">Edit User 1</a></li>
            <li><a href="/delete/2">Delete User 2</a></li>
        </ul>
        <p>You can change the ID in the URL for Edit/Delete.</p>
    `);
});


app.get('/add', (req, res) => {
    res.send(`
        <form method="POST" action="/users">
            <input name="name" placeholder="Enter name" required/>
            <button type="submit">Add User</button>
        </form>
    `);
});

app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.send(`User added: ${newUser.name} <br><a href="/users">See Users</a>`);
});

app.get('/edit/:id', (req, res) => {
    res.send(`
        <form method="POST" action="/update/${req.params.id}">
            <input name="name" placeholder="New name" required/>
            <button type="submit">Update User</button>
        </form>
    `);
});

app.post('/update/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.send(`User updated: ${user.name} <br><a href="/users">See Users</a>`);
    } else {
        res.send("User not found");
    }
});


app.listen(port , ()=>{
    console.log(`running at http://localhost:${port}`);
    
})