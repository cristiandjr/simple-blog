const {Router} = require('express');
const router = Router();
const {renderPostForm, createNewPost, updatePostForm, updatePost, deletePost} = require('../controllers/posts.controller');
const {isAuthenticated} = require('../helpers/auth');

// Agregar nuevos posts
router.get('/posts/add', isAuthenticated, renderPostForm); //Formulario
router.post('/posts/new-post', isAuthenticated, createNewPost); //Agregar a la db lo que me viene del form

// Editar posts
router.get('/posts/edit/:id', isAuthenticated, updatePostForm); //Formulario
router.put('/posts/edit/:id', isAuthenticated, updatePost); //Agregar a la db lo que me viene del form

// Borrar posts
router.delete('/posts/delete/:id', isAuthenticated, deletePost); //Eliminar posts

module.exports = router;