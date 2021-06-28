const {Router} = require('express');
const router = Router();
const {renderSigninFormAdmin, signin, logout} = require('../controllers/users.controller');

//Rutas para login de admin
router.get('/admin/signin-admin', renderSigninFormAdmin);
router.post('/admin/signin-admin', signin);

//Rutas para salir
router.get('/admin/logout-admin', logout);


module.exports = router;