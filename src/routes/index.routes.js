const {Router} = require('express');
const router = Router();

const { renderIndex, renderIndexMenuAdmin } = require('../controllers/index.controller');

router.get('/', renderIndex);

module.exports = router;