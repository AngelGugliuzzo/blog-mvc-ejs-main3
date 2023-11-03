import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

//Configurar ejs

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'src/views'));

const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.redirect('/ejs');
});

app.get('/ejs', (req, res)=> {
    const nombre='Angel';
    res.render('home/index',{ nombre });
   
});


app.listen(port, () => {
    console.log(`servidor express funcionando en http://localhost:${port}`);
});
