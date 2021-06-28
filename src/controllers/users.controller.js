const usersCtrl = {};
const User = require('../models/User');
const passport = require('passport');

usersCtrl.renderSigninFormAdmin = async (req, res) => {
    res.render('users/signin-admin');
}

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Sesion cerrada correctamente!');
    res.redirect('/');
}

module.exports = usersCtrl;