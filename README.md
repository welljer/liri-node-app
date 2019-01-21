# LIRI BOT

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Technology and packages used

* [node.js/](https://nodejs.org/en/docs/)
* [fs.js/](https://github.com/nodejs/node/blob/master/doc/api/fs.md)

* [node-spotify-api/](https://developer.spotify.com/documentation/web-api/quick-start/)
* [npm request/](https://github.com/request/request)
* [npm moment/](https://github.com/moment/moment)
* [npm dotenv/](https://www.npmjs.com/package/dotenv-extended)

* [OMDB](https://github.com/Omertron/api-omdb)
* [Bands in Town](http://www.artists.bandsintown.com/bandsintown-api)

## How it works

### Spotify
node liri.js spotify-this-song "song name here" to return song information from Spotify. If no song is entered, a hard coded default song will return (The Sign by Ace of Base).

default:

![picture of default spotify call request](https://github.com/welljer/liri-node-app/blob/master/media/spotifyDefault.JPG)

with custom request:

![picture of spotify call with custom request](https://github.com/welljer/liri-node-app/blob/master/media/spotifyRequest.JPG)


### Bands in Town
node liri.js concert-this "artist/band name here" to return concert information from Bandsintown.

![picture of bands in town request](https://github.com/welljer/liri-node-app/blob/master/media/bandsInTown.JPG)  


### OMDB
node liri.js movie-this "movie name here" to return movie information from OMDb. If no movie is entered, a hard coded default movie will return (Mr. Nobody).

default:

![picture of default OMDB call request](https://github.com/welljer/liri-node-app/blob/master/media/omdbDefaut.JPG)

with custom request:

![picture of OMDB call with custom request](https://github.com/welljer/liri-node-app/blob/master/media/omdbCustom.JPG)

### Information Storage 
Request are stored to log.txt file

