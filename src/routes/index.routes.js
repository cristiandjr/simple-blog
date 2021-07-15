const { Router } = require('express');
const router = Router();

const { renderIndex, renderPostById } = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/posts/post/:id', renderPostById);

module.exports = router;