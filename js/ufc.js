var unirest = require("unirest");

var req = unirest("GET", "https://mma-ufc-news.p.rapidapi.com/latest");

req.headers({
    "x-rapidapi-key": "2e6521b521mshdcd6ae65008ab39p1a8838jsn1aa1ebde4cba",
    "x-rapidapi-host": "mma-ufc-news.p.rapidapi.com",
    "useQueryString": true
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
