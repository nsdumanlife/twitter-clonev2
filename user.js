const Tweet = require("./tweet");

module.exports = class User {
  constructor(name, email, handler) {
    this.name = name;
    this.email = email;
    this.handler = handler;
  }
  bio = "";
  profilePic = "";
  location = "";
  link = "";
  birthday = "";
  createdAt = new Date();
  following = [];
  followers = [];
  tweets = [];
  likedTweets = [];

  follow(user) {
    this.following.push(user);
    user.followers.push(this);
  }
  tweet(tweet) {
    this.tweets.push(tweet);
  }
  like(tweet) {
    this.likedTweets.push(tweet);
    tweet.likes.push(this);
  }
  retweet(originalTweet, body = "") {
    const retweet = new Tweet(this, body);
    retweet.originalTweet = originalTweet;
    this.tweets.push(retweet);
    originalTweet.retweets.push(retweet);
  }
};
