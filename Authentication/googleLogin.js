const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL,
        passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        console.log("accessToken", accessToken)
        console.log("refreshToken", refreshToken)
        console.log("profileData", profile)
            return done(null, profile);
    }
));

module.exports = passport;