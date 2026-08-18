function checkout(req, res) {
    const { itemID, qty } = req.body;
    const item = catalog.find(i => i.id === itemID)

    if (!item || qty < 1) {
        return res.status(400).json({ error, "invalid order"});
    }
    const total = item.price * qty;
    res.json({ total, staus: "Confirmed" })
}