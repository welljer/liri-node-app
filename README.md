# LIRI BOT

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Installation

The following NPMs were used to make this project possible:
node-spotify-api
npm request
npm moment
npm dotenv

The following APIs were used alongside the installed NPMs:
OMDB
Bands in Town

## Usage

### Spotify
node liri.js spotify-this-song 'song name here'

default:

![picture of default spotify call request](https://github.com/welljer/liri-node-app/blob/master/media/spotifyDefault.JPG)

with custom request:

![picture of spotify call with custom request](https://github.com/welljer/liri-node-app/blob/master/media/spotifyRequest.JPG)


### Bands in Town
node liri.js concert-this 'artist/band name here'

![picture of bands in town request](https://github.com/welljer/liri-node-app/blob/master/media/bandsInTown.JPG)  


### OMDB
node liri.js movie-this 'movie name here'

default:

![picture of default OMDB call request](https://github.com/welljer/liri-node-app/blob/master/media/omdbDefaut.JPG)

with custom request:

![picture of OMDB call with custom request](https://github.com/welljer/liri-node-app/blob/master/media/spotifyRequest.JPG)

