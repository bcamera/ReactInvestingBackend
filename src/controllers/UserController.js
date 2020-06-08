const User = require('../models/User');

module.exports = {

async index(request, response){
    const users = await User.find();

    return response.json(users);
},

async store(request, response){

    const { name, email, message, subject } = request.body;
    const user = await User.create({
        name, 
        email, 
        message, 
        subject
    })
    /* return response.json({ message: 'hello world Leonaro' }); */
    return response.json(user);
    }

};