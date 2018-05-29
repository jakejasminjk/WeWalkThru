const express = require('express');
const path  = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const VIEWS = path.join(__dirname, 'views');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "html");
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => {
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
    res.sendFile('membership.html', {root : VIEWS});
});

app.get('/council', (req,res) => {
    res.sendFile('council.html', {root : VIEWS});
});

app.get('/council-membership', (req,res) => {
    res.sendFile('council-membership.html', {root : VIEWS});
});

app.get('/ministers-2030', (req,res) => {
    res.sendFile('ministers-2030.html', {root : VIEWS});
});

app.get('leaders-2030', (req,res) => {
    res.sendFile('leaders-2030.html', {root : VIEWS});
});

app.get('association', (req,res) => {
    res.sendFile('association.html', {root : VIEWS});
});

app.get('association-membership', (req,res) => {
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

app.post('/contact-us', (req,res) => {
    let name = req.body.name
    let clientEmail = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    
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
        subject: subject,
        text: message
    }
    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            res.redirect('/home');
        }
    });
    
 

})

app.get('/donate-501c3', (req, res) => {
   res.sendFile('donate-501c3.html', {root:VIEWS}); 
});

app.get('/your-privacy', (req, res) => {
   res.sendFile('your-privacy.html', {root:VIEWS}); 
});

app.get('/our-policy', (req, res) => {
   res.sendFile('our-policy.html', {root:VIEWS}); 
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
