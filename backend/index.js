const express = require('express');
const app = express();
const { createTodo,updateTodo } = require('./type');   
const { todo } = require('./db');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.post('/todos',async (req,res) => {
    const createPayLoad = req.body;
    const PrasePayload = createTodo.safeParse(createPayLoad);
    if(!PrasePayload.success) {
        res.status(404).json({
            msg:"you send Wrong inputs"
        })   
        return;
     }
    await todo.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed : false
    })
    res.json({
        msg: "todo created successfully"
    })
        
    });

app.get('/todos',async (req,res) => {
       const todo = await todo.find({});
        res.json({
            todo
        })
    
    });//get the todo
    
app.put('/completed',async (req,res) => {
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success) {
        res.status(404).json({
            msg:"You send the wrong inputs"
        })
        return;
    }
await todo.update({
    _id : req.body.id
})
        
});

app.listen(3000,() => {
    console.log("server is running")
});