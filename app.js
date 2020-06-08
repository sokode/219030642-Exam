const express = require('express')

const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.render('home')
});

    app.get('/patients',(req,res)=>{
        res.render('patients')
        

});


app.get('/login',(req,res)=>{
    res.render('login')
    

});


app.get('/register',(req,res)=>{
    res.render('register')
    

});


app.get('/payment',(req,res)=>{
    res.render('payment')
    

});






const port = 3000;
app.listen(port, ()=>{
    console.log(`my application is listening on port ${'port'}...`);

});