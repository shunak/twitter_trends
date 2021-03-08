var Twitter = require('twitter');


var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
});
// Japan WOEID is 23424856
var params = { id: 23424856 };
client.get('trends/place.json', params, function (error, tweets, response) {
    if (!error) {
        console.log(JSON.stringify(tweets, null, "\t"));
    }
});


