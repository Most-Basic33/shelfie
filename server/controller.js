module.exports ={
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_products()
        .then(products=>res.status(200).send(products))
        .catch(err=>res.status(500).send(err, "get_products in controller isn't working right"))
        
    }
}