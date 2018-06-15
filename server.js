const express = require('express');
const path  = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const VIEWS = path.join(__dirname, 'views');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");

app.get('/home', (req, res) => {
    res.status(200);
    res.sendFile('home.html', { root : VIEWS });
});

//----------------------------------------
//About us
//----------------------------------------
app.get('/about-us', (req, res) => {
    res.sendFile('about-us.html', {root : VIEWS});
});

app.get('/dreamteam', (req, res) => {
    res.sendFile('dreamteam.html', {root : VIEWS});
});

app.get('/visionary', (req, res) => {
    res.sendFile('visionary.html', {root : VIEWS});
});

app.get('/newspaper', (req, res) => {
    res.sendFile('newspaper.html', {root : VIEWS});
});

app.get('/center', (req, res) => {
    res.sendFile('center.html', {root : VIEWS});
});

//----------------------------------
//Memberships
//----------------------------------
app.get('/memberships', (req,res) => {
    res.sendFile('memberships.html', {root : VIEWS});
});

app.get('/council', (req,res) => {
    res.sendFile('council.html', {root : VIEWS});
});

app.get('/council-membership', (req,res) => {
    res.sendFile('council-membership.html', {root : VIEWS});
});

app.post('/council-membership', (req,res) => {
    let name = req.body.name;
    let clientEmail = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let cityCountry = req.body.cityCountry;
    let churchPosition = req.body.churchPosition;
    let chooseSem = req.body.chooseSem;
    
    //files
    let passport = req.body.passport;
    let photo = req.body.photo;
    
    let ministerRef = req.body.ministerRef;
    let neighborRef = req.body.neighborRef;
    
    let to = 'CLIENT EMAIL';
    let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'NEED CLIENTS USERNAME',
    pass: 'NEED CLIENTS EMAIL PASSWORD'
  }
});
    let mailOptions = {
        from: clientEmail,
        to: to, 
        subject: `Council registration from ${name}, ${clientEmail}`,
        text: `Phone number: ${phone}, Address: ${address}, City and Country: ${cityCountry}, 
        Church and Position: ${churchPosition}, Chosen Seminar Date: ${chooseSem}`,
        attachments: {   // stream as an attachment
        filename: 'text4.txt',
        content: fs.createReadStream('file.txt')
    }
    }
    
    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.redirect('/council-membership');
        }else{
            res.redirect('/home');
        }
    });
    
 

})

app.get('/ministers-2030', (req,res) => {
    res.sendFile('ministers-2030.html', {root : VIEWS});
});

app.get('/leaders-2030', (req,res) => {
    res.sendFile('leaders-2030.html', {root : VIEWS});
});

app.get('/association', (req,res) => {
    res.sendFile('association.html', {root : VIEWS});
});

app.get('/association-membership', (req,res) => {
    res.sendFile('association-membership.html', {root : VIEWS});
});


//----------------------------------
//INITIATIVES
//----------------------------------
app.get('/initiatives', (req, res) => {
    res.sendFile('initiatives.html', {root: VIEWS});
});

app.get('/fellowship', (req, res) => {
    res.sendFile('fellowship.html', {root: VIEWS});
});

app.get('/festivals', (req, res) => {
    res.sendFile('festivals.html', {root: VIEWS});
});

app.get('/small-groups', (req, res) => {
    res.sendFile('small-groups.html', {root: VIEWS});
});

app.get('/seminars', (req, res) => {
    res.sendFile('seminars.html', {root: VIEWS});
});

app.get('/seminars-registration', (req, res) => {
    res.sendFile('seminars-registration.html', {root: VIEWS});
});


app.get('/seminary', (req, res) => {
    res.sendFile('seminary.html', {root: VIEWS});
});

app.get('/institutes', (req, res) => {
    res.sendFile('institutes.html', {root: VIEWS});
});

app.get('/care', (req, res) => {
    res.sendFile('care.html', {root: VIEWS});
});

app.get('/build', (req, res) => {
    res.sendFile('build.html', {root: VIEWS});
});

app.get('/lifeline', (req, res) => {
    res.sendFile('lifeline.html', {root: VIEWS});
});

app.get('/foodbank', (req, res) => {
    res.sendFile('foodbank.html', {root: VIEWS});
});

//----------------------------------
//Contact Us
//----------------------------------
app.get('/contact-us', (req, res) => {
   res.sendFile('contact-us.html', {root:VIEWS}); 
});

app.get('/donate501', (req, res) => {
   res.sendFile('donate501.html', {root:VIEWS}); 
});

app.get('/yourprivacy', (req, res) => {
   res.sendFile('yourprivacy.html', {root:VIEWS}); 
});

app.get('/ourpolicies', (req, res) => {
   res.sendFile('ourpolicies.html', {root:VIEWS}); 
});

app.get('/join-email', (req, res) => {
   res.sendFile('join-email.html', {root:VIEWS}); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Interchirstain site server is running");
});

module.exports = {
    app
};
