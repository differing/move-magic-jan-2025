//console.log('IT works');
//sled kato sme vaveli komnadata npm i express
import express from 'express';

const app = express();

app.get('/', (req, res)=> {
    res.send('It work!');
});

app.listen(5000, ()=> console.log('Server is listening on http:/localhost:5000...'));