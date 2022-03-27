const User = require("./user");
const Tweet = require("./tweet");
const Database = require("./database");

// const numan = new User("numan duman", "nsduman@gmail.com", "@nsduman");
// const omer = new User("omer faruk", "ofduman@gmail.com", "@ofd");
// Database.save('users', numan)
// Database.save('users', omer)

// const tweet2 = new Tweet(numan, "this is the tweet!");

// numan.tweet(tweet2);
//omer.retweet(tweet1);

//console.log(numan, omer, tweet1);

// Database.save("tweets.json", tweet2);
// const gizem = new User('gizem z', 'gizemz@gmail.com', '@gizemz')
// Database.insert('users', gizem)

// Database.remove('users', 1) // removed gizem

const loadedFile = Database.load("tweets");
const loadedFile2 = Database.load("users");

console.log(loadedFile,loadedFile2);
