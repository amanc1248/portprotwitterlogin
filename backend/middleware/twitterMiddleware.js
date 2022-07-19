const express = require("express");
const dotenv = require("dotenv");
const app = express();

const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
app.use(express.json());
passport.use(
  new TwitterStrategy(
    {
      consumerKey: "c5xhtwzj0OyvjKjC4gR9HeiOw",
      consumerSecret: "k7gRe2bPxLLpcsqO2LW9pO1pdaEtiNYlbkjwpXXmXiZjLvAtVc",
      callbackURL: "http://localhost:3000/auth/twitter/callback",
    },
    function (token, tokenSecret, profile, cb) {
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  });
});
