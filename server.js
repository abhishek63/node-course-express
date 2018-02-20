const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs'); 
hbs.registerPartials(__dirname + '/views/partials'); //this link partial code directory 
app.use(express.static(__dirname + '/public')); //this directory help in use of static content

hbs.registerHelper('getCurrentYear',()=>{

	return new Date().getFullYear()

});


hbs.registerHelper('scremIt',(text)=>{

	return text.toUpperCase()
});


app.get('/',(req , res)=>{

	res.render('home.hbs',{

		pageTitle : "Home Page",
		content :" welcome to our brand new webpage"
	});

});

app.get("/login",(req,res)=>{

	res.send("<h1>Login Page</h1>");

});

app.get("/about",(req,res)=>{

	res.render("about.hbs" , {

				pageTitle : "About Page",
		

	}); //render the about.hbs page which is present in the views folder 
});


//now this page send json data

app.get('/json',(req , res)=>{

	res.send({
	    name:  'John', 
	    age:   21, 
	    alive: true,
	    siblings: [
	        {
	            name:  'Andrew', 
	            age:   23, 
	            alive: true
	        },
	        {
	            name:  'Christine',
	            age:   19,
	            alive: true
	        }
	    ]   
	});

});

app.listen(3000 ,()=>{

	console.log("webpage is running on port 3000");

});