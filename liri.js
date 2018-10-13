require("dotenv").config();

var request = require('request');

const inquirer = require('inquirer')

var keys = require("./keys");

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify); 
 


// Prompts

inquirer.prompt([
    {
        type: "list",
        message: "What do you want to search for?",
        name: "choices",
        choices: ["spotify-this-song", "movie-this", "concert-this"]
    }
]).then(response => {
    
})


// Functions 
