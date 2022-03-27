module.exports = class Tweet {
  constructor(author, body) {
    this.author = author;
    this.body = body;
  }
  originalTweet = null;
  likes = [];
  retweets = [];
  createdAt = new Date();
  attachments = [];
  replies = [];
};
