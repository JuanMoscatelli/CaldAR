const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require ('./src/models');
const router = require('.src/routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log('conected to the database!')
    })
    .catch(err =>{
        console.log("Cannot connect to the database!",err);
        process.exit();
    });
app.use(express.static('public'));

app.use(router);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
