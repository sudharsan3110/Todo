const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://msudhar007:12345678990@cluster0.7v2pfop.mongodb.net/?retryWrites=true&w=majority")
const todoschema =  mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean

})

const todo = mongoose.model('todos',todoschema);

module.exports = {
    todo
}