const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const cardModel = require('./models/card')

app.set("view engine", 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => 
    res.render('index'))


app.post('/create', async(req, res) => {
    let {name,email,image} = req.body;

    let createcard = await cardModel.create({
        name,
        email,
        image
    })
    res.redirect('/read');
})

app.get('/read', async(req, res) => {
    let cards = await cardModel.find()
    res.render('read', {cards})
});

app.get('/edit/:id', async(req, res) => {
    let cards = await cardModel.findOne({_id: req.params.id})
    res.render('edit', {cards})
});

app.post('/update/:id', async(req, res) => {
    let {name,email,image} = req.body;
    let cards = await cardModel.findOneAndUpdate({_id: req.params.id}, {image,name,email}, {new:true});
    res.redirect('/read');
});

app.get('/delete/:id', async(req, res) => {
    let cards = await cardModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
})



app.listen(port, () =>
 console.log(`Example app listening on port ${port}!`))























// app.get('/create', async (req,res) => {
//    let createuser = await userModel.create({
//         name: 'WELNN',
//         username: "welnn",
//         email: "wel@b.com"
//     })
//     res.send(createuser)

// })

// app.get('/read', async (req,res) => {
//     let readuser = await userModel.find();

//     res.send(readuser);
// })

// app.get('/update', async (req,res) => {
//    let updateuser = await userModel.findOneAndUpdate({name:"NIkhil"}, {name:'Nikhil Das'}, {new:true});

//     res.send(updateuser);

// })


// app.get('/delete', async (req,res) => {
//     let deluser = await userModel.findOneAndDelete({name: "WELNN"});

//     res.send(deluser);
// })