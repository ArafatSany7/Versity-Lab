app.get("/products", (req, res) => {
    const { sort, max } = req.query;
    res.json({
        sort: sort,
        max: max
    })
})