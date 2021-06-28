const indexCtrl = {};
const Post = require('../models/Post');

indexCtrl.renderIndex = async (req, res) => {
    const posts = await Post.find().lean();
    res.render('index', {posts});
}

module.exports = indexCtrl;
