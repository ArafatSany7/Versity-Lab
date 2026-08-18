const users = [
    {
        id: 42, name: "mokbul"
    },
    {
        id: 43, name: "Toriqul"
    }
]

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = user.find(u => u.id == id)
    res.json(user)
})