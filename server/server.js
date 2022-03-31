const express = require('express');
const cors = require('cors');
const app = express();

const db = require('../server/db/db');
require('dotenv').config()



app.use(cors()); //allows diff routes to connect together
app.use(express.json());
//http://localhost:8080/contacts


//GET
app.get('/contacts', cors(), async (req, res) => {

    try{
        const { rows: contacts } = await db.query('SELECT * FROM contacts');
        res.status(200).json(contacts);
        } catch (e){
        return res.status(400).json({e});
        }
    });
//first_name | last_name |  email  |  cell_phone  |   address | dob  |  notes




//GET A Contact
app.get('/contacts/:id', cors(), async (req, res) => {
    try{
        const { id }= req.params;
        const contact = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);

        res.status(200).json(contact.rows[0])

    }catch(error){
        res.status(400)
    }
})


// create a contact === POST new
app.post('/contacts', cors(), async (req, res) => {

    try{

        const newContact = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            cell_phone: req.body.cell_phone,
            email: req.body.email,
            address:req.body.address,
            dob:req.body.dob,
            notes:req.body.notes

        }
        //create a contact
        const addContact = await db.query(
            //

            'INSERT INTO contacts(first_name, last_name, cell_phone, email, address, dob, notes) VALUES ($1, $2, $3, $4, $5,$6,$7) RETURNING *',
            [newContact.first_name, newContact.last_name, newContact.cell_phone, newContact.email, newContact.address, newContact.dob,newContact.notes] );

            console.log(addContact.rows[0]);
            res.status(200).json(addContact.rows[0]);

    }catch(error){
        res.send(error)
        res.status(400)
    }
});


//DELETE
app.delete('/contacts/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const deleteContact = await db.query("DELETE FROM contacts WHERE id = $1",[id])
        console.log(deleteContact.rows[0])
        res.status(200).json(deleteContact.rows[0])

    }catch(error){
        res.send(error)
    }
})


//PUT not complete yet
app.put('/contacts/:id', async(req, res)=>{
    try{
        const {id} = req.params;

        const { updated } = req.body;
        // UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition

        const updateContact = await db.query("UPDATE contacts SET (first_name=$1,last_name=$2,cell_phone=$3, email=$4,address=$5,dob=$6,notes=$7) WHERE id = $1 RETURNING *", [updated.first_name, updated.last_name, updated.cell_phone, updated.email, updated.address,updated.dob,updated.notes]);

        console.log(updateContact.rows[0])
        res.status(200).json(updateContact.rows[0])

    }catch(error){
        res.send(error)
     }
})



const PORT = process.env.PORT || 8080;
// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
