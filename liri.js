require("dotenv").config();

var request = require('request');

const inquirer = require('inquirer')

var keys = require("./keys");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);


// Prompts

inquirer.prompt([{
        type: "list",
        message: "What do you want to search for?",
        name: "choices",
        choices: ["spotify-this-song", "movie-this", "concert-this"]
    },
    {
        type: "input", 
        message: "type name",
        name: "name"
    }
   
]).then(response => {
    // add if/else statements to pull in the functions 
    if (response.choices === "spotify-this-song") {
        console.log("")
    }
    if (response.choices === "movie-this") {
        console.log(omdb)
    }
    if (response.choices === "concert-this") {
        console.log("fine")
    }
});




// Functions 

function songChoice(spotifySong) {
    spotify.search({
        type: 'track',
        query: spotifySong
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log("Song Name: " + JSON.parse(body).name + "\nArtists: " + JSON.parse(body).artists +
                "\nAlbum: " + JSON.parse(body).album + "\nPreview Song: " + JSON.parse(body).preview_url)
        }
        if (!spotifySong) {
            songName = "The Sign";
            artists = "Ace of Base";
        }
    });

}

function movieChoice(omdb) {
    // used own api key 
    const apiKey = 'e3034019';
    var queryURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e3034019';

    request(queryURL, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title + "\nYear " + JSON.parse(body).Year +
                "\nIMDB Rating: " + JSON.parse(body).imdbRating + "\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings.RottenTomatoes +
                "\nCountry Produced: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language +
                "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors);
        } else(
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/. It's on Netflix!")

        )
    })
};


function concertChoice(bands) {
    // used api provided in instructions 
    const apiURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(apiURL, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log("Venue: " + JSON.parse(body).VenueData.name + "\nLocation: " + JSON.parse(body).VenueData.city +
                "\nDate :" + JSON.parse(body).EventData.datetime);
        }
    })
}