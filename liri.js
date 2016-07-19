//input node liri.js spotify-this-song 'song name here'
var argOne = process.argv[2];



























// spotify.search({ 
// 	type: 'track',
//  	query: songName
//  	 }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
// 	}
// }
//output: 
//Artist 
//The Song's Name
//A link with a preview of the song
//The Albun that the song is from
//if error default to "The sign" by Ace of Base


// var SpotifyWebApi = require('spotify-web-api-node');

// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId : 'fcecfc72172e4cd267473117a17cbd4d',
//   clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
//   // redirectUri : 'http://www.example.com/callback'
// });




// // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', {limit: 10, offset: 20})
// //   .then(function(data) {
// //     console.log('Album information', data.body);
// //   }, function(err) {
// //     console.error(err);
// //   });


// spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
//   .then(function(data) {
//     console.log('Artist information', data.body);
//   }, function(err) {
//     console.error(err);
//   });














var spotify = require('spotify');

var argOne = process.argv[2];
var songName = process.argv[3];
 
// lookup: function({ type: 'artist OR album OR track',
// 	 id: 'Spotify ID Hash',
// 	  hollaback});

// get: function(query, hollaback) -- See http://developer.spotify.com/en/metadata-api/overview/


spotify.search({ 
	type: type,
 	query: query
 	 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }else (data){
    	console.log(data);
    }
 });
    
    console.log(spotify.type);  







	if(argOne === 'my-tweets'){
		console.log(true)	
	}else if (argOne === "spotify-this-song"){
		// var spotifyObject = JSON.parse(body);
		console.log(true)
	}else if(argOne === "movie-this"){
		console.log(true)
	}else if ('movie-this')
	    console.log(true)





