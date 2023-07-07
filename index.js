const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
const https = require("https");

const db = require('./config/mongoose');
const Link = require('./models/links');
const { link } = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended : true}));
app.use(express.static('assets'));//It`ll go find out a folder called assets and it has subdirectories 

var contactList = [
    // {
    //     name: "Nitu",
    //     phone: "8328356215"
    // },
    // {
    //     name: 'Kasi',
    //     phone: '9440802153'
    // },
    // {
    //     name: 'Veni',
    //     phone: '9494262153'
    // }
];

app.get('/', function(req, res){
    Link.find()
    .then(Lik => {
        return res.render('home.ejs',{
            title:"Linker",
            contact_list: Lik
        });
    })
});

app.get('/delete/', function(req, res){
    Link.deleteOne({name : req.query.name})
    .then(function(){return res.redirect('/')})
    
    // .then(index => {
    //     console.log(index[0].link)
    //     
    // })
});

// app.get('/', function(req, res){
//     return res.render('home.ejs', {
//         title:"CoNtAcTs HeRe"
//     });
// })



app.get('/create', function(req, res){
    res.send("Your Contact is saved");
    // return res.render('practice', {
    //     title : "Hola Chikka"
    // });
});



app.post('/create', function(req, res){
    // const url = "https://serpapi.com/search.json?engine=google_images&q=" + req.body.name + "-logo&api_key=b217a25011acf8fc4102d997bc874d9e3874b5b9e271e38cc1ce707cb0354c3b";
    //     // https.get(url, function(resp){
    //     //     resp.on("data", function(data){
    //     //         console.log(JSON.parse(data))
    //     //         const img = gotcha.images_results[0].thumbnail
    //     //         u.soc = img;
    //     //     });
    //     // });
    //     // Code to parse large Arrays with Large JSON objects
    //     var img
    //     let finalData = '';
    //     https.get(url, function(response){
    //     response.on("data", function (data) {
    //         finalData += data.toString();
    //     });
    //     response.on("end", function() {
    //        const gotcha = JSON.parse(finalData);
    //        img = gotcha.images_results[0].thumbnail;
    //     });
    //     console.log(img);
        var u = {
            name: req.body.name,
            link: req.body.link,
            // soc: img
        }
        Link.create(u)
    // }, function(err, newLink){//Call Back
    //     if(err){
    //         console.log("No Contact Entered");
    //         return;
    //     }
    //     console.log('*********', newLink)
        .then(result => {console.log(result)});
        return res.redirect('/');
    // });
});

app.post('/modify-create', function(req, res){
        Link.create(u)
    // }, function(err, newLink){//Call Back
    //     if(err){
    //         console.log("No Contact Entered");
    //         return;
    //     }
    //     console.log('*********', newLink)
        .then(result => {console.log(result)});
        return res.redirect('/');
});

app.get('/modify/', function(req, res){
    return res.sendFile('/html/modify.html', {root: 'assets'} )
})

app.get('/intoit/', function(req, res){
    // console.log(req.query)
    Link.find({name : req.query.name})
    .then(index => {
        console.log(index[0].link)
        return res.redirect(index[0].link)
    })
    // let url = index.schema
    // 
    // return res.redirect(url)
});

app.listen(9000, function(){
    console.log("Server is up");
});
