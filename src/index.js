/* userInvesting
RfyXsWBXuz942w7W 
mongodb+srv://<username>:<password>@cluster0-chuxi.mongodb.net/<dbname>?retryWrites=true&w=majority

*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();      

mongoose.connect('mongodb+srv://bcamera:Teste123@cluster0-xcklx.mongodb.net/investing?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
