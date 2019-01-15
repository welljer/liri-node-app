/* installed npms and APIs used:
Node-spotify-api
request
bands-in-town
moment
dotenv
*/

// required npms
require("dotenv").config();
var fs = require('fs');
var keys = require("./key");
var request = require('request');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// print of cmd line arguments
var action = process.argv[2];
var parameter = process.argv[3];

function switchCase(){
    switch(action){
        case 'spotify-this-song':spotSong(parameter)
        break;

        case 'concert-this':bandsInTown(parameter);
        break;

        case 'movie-this':movieInfo(parameter);
        break;

        case 'do-what-it-says':getRandom()

        default: logIt("Invalid Instruction");
        break;
    }
};

// Spotify 

function spotSong(parameter){

    var searchTrack;
    if (parameter === undefined) {
        searchTrack = "The Sign ace of base"
    }
    else {
        searchTrack = parameter
    };

    spotify.search({
        type: 'track',
        query: searchTrack
      }, function(error, data) {
        if (error) {
          logIt('Error occurred: ' + error);
          return;
        } else {
          logIt("\n----\n");
          logIt("Artist: " + data.tracks.items[0].artists[0].name);
          logIt("Song: " + data.tracks.items[0].name);
          logIt("Preview: " + data.tracks.items[3].preview_url);
          logIt("Album: " + data.tracks.items[0].album.name);
          logIt("\n----\n");
          
        }
    });
};
// Bands in Town w/moment 

function bandsInTown(parameter){

    if(action === 'concert-this'){
        var artistName="";
        for (var i = 3; i < process.argv.length; i++)
        {
            artistName+=process.argv[i];
        }
        console.log(artistName);
    }
    else{
        artistName=parameter;
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

    request(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {
      
          var JS = JSON.parse(body);
          for (i = 0; i < JS.length; i++)
          {
            var dTime = JS[i].datetime;
              var month = dTime.substring(5,7);
              var year = dTime.substring(0,4);
              var day = dTime.substring(8,10);
              var dateForm = month + "/" + day + "/" + year
        
            logIt("\n----\n");
      
              
            logIt("Date: " + dateForm);
            logIt("Name: " + JS[i].venue.name);
            logIt("City: " + JS[i].venue.city);
            if (JS[i].venue.region !== "")
            {
              logIt("Country: " + JS[i].venue.region);
            }
            logIt("Country: " + JS[i].venue.country);
            logIt("\n----\n");
      
          }
        }
    });
}

// OMBD api
function movieInfo(parameter) {


    var findMovie;
    if (parameter === undefined) {
      findMovie = "Mr. Nobody";
    } else {
      findMovie = parameter;
    };
  
    var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=f82ff5b6";

    request(queryUrl, function(err, res, body) {
        var bodyOf = JSON.parse(body);
      if (!err && res.statusCode === 200) {
        logIt("\n----\n");
        logIt("Title: " + bodyOf.Title);
        logIt("Release Year: " + bodyOf.Year);
        logIt("IMDB Rating: " + bodyOf.imdbRating);
        logIt("Rotten Tomatoes Rating: " + bodyOf.Ratings[1].Value); 
        logIt("Country: " + bodyOf.Country);
        logIt("Language: " + bodyOf.Language);
        logIt("Plot: " + bodyOf.Plot);
        logIt("Actors: " + bodyOf.Actors);
        logIt("\n----\n");
      }
    });
  };

// functions to get the information requested
function getRandom() {
    fs.readFile('random.txt', "UTF-8", function(error, data){
    
        if (error) {
            return logIt(error);
          }
    
      
        var dataArr = data.split(",");
        
        if (dataArr[0] === "spotify-this-song") 
        {
          var songcheck = dataArr[1].trim().slice(1, -1);
          spotSong(songcheck);
        } 
        else if (dataArr[0] === "concert-this") 
        { 
          if (dataArr[1].charAt(1) === ",")
          {
              var dLength = dataArr[1].length - 1;
              var data = dataArr[1].substring(2,dLength);
              console.log(data);
              bandsInTown(data);
          }
          else
          {
              var bandName = dataArr[1].trim();
              console.log(bandName);
              bandsInTown(bandName);
          }
            
        } 
        else if(dataArr[0] === "movie-this") 
        {
          var movie_name = dataArr[1].trim().slice(1, -1);
          movieInfo(movie_name);
        } 
        
        });
    
    };
    
    function logIt(dataToLog) {
    
        console.log(dataToLog);
    
        fs.appendFile('log.txt', dataToLog + '\n', function(err) {
            
            if (err) return logIt('Error logging data to file: ' + err);	
        });
    }

switchCase();