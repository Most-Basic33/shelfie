module.exports ={
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then(products=>res.status(200).send(products))
        .catch(err=>res.status(500).send(err, "get_products in controller isn't working right"))
        
    },
    addInventory: (req, res) => {
        const db = req.app.get('db');
        const {name,price,img} = req.body
        
        console.log("if it does something funny it's because I choose to send the data back with send items instead of sendStatus like delete")
        
        db.add_inventory(name, price, img)
        .then(items=>{
            res.status(200).send(items)
        })
        .catch(err =>{
            res.status(500).send(err, "Add Inventory Database Error")
        })
    },
    deleteInventory: (req, res) => {
        const db = req.app.get('db');
            const { id } = req.params;

            db.delete_inventory(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err, "Delete is broken in controller"))
        
    },
    getInventoryByName:(req, res) =>{
const db = req.app.get('db')
const {name} = req.params;

db.get_inventory_name(name)
.then(item=>res.status(200).send(item))
.catch(err=>console.log(err))

    },
    getInventoryItem: (req, res) =>{
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_inventory_item(id)
        .then(item =>res.status(200).send(item))
        .catch(err => res.status(500).send(err, "Couldn't get item!!!"))


    }, 
    updateInventoryPrice: (req, res) => {
        const db =  req.app.get('db');
        const {id} = req.params;
        const {price} = req.body;

        db.update_inventory_price(id, price)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err, "error updating price"))
    }
    
}