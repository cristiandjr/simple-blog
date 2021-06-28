const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

//console.log(User.findOne());

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    const user = await User.findOne({email});
    console.log(user);

    if(!user){
        
        return done(null, false, { message: 'No existe el usuario'});
    }else{
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        }else{
            return done(null, false, {message: 'Password incorrecto'});
        }
    }

}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})