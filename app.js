var express=require("express");
var app=express();
var mongoose=require("mongoose");

app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs");


app.get("/",function(req,res)
	{
		res.render("dashboard");
	});


app.listen("8080",function()
	{
		console.log("quiz server started");
	});