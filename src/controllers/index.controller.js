const indexCtrl = {};
const Post = require('../models/Post');

indexCtrl.renderIndex = async(req, res) => {
    const posts = await Post.find().lean();
    res.render('index', { posts });
}

indexCtrl.renderPostById = async(req, res) => {
    const post = await Post.findById(req.params.id).lean()
    res.render('post', { post });
}

module.exports = indexCtrl;