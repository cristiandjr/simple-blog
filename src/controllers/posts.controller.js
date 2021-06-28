const postsCrtl = {}
const Post = require('../models/Post');

postsCrtl.renderPostForm = (req, res) => {
    res.render('posts/new-post');
}

postsCrtl.createNewPost = async (req, res) => {
    //console.log(req.body);
    const {title, description} = req.body;
    const newPost = new Post({title, description});
    //console.log(newPost);
    await newPost.save();
    req.flash('success_msg', 'Entrada guardada con exito!');
    res.redirect('/');
    
}

postsCrtl.updatePostForm = async (req, res) => {
    const post = await Post.findById(req.params.id).lean();
    res.render('posts/edit-post', {post});
}

postsCrtl.updatePost = async (req, res) => {
    const { title, description } = req.body;
    await Post.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Entrada actualizada con exito!');
    res.redirect('/');
}

postsCrtl.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

module.exports = postsCrtl;