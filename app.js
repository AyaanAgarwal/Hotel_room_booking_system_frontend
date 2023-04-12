const express = require('express');

const app = express();
app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/login.html');
});


app.listen(4000, ()=>{
    console.log('App is listening on port 4000');
});