console.log("The bot is active!");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', someone_followed);

function someone_followed(event){
  var name = event.source.name;
  var handle = event.source.screen_name;
  tweet_this('Hey @' + handle + ' Thanks for following! Much appreciated. :)');
}

function tweet_this(str){
  T.post('statuses/update', { status: str }, function(err) {
    if(err){
      console.log("Something went wrong!");
    }
    else{
      console.log("Tweeted!");
    }
  })
}
