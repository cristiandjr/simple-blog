const {Schema, model} = require('mongoose');


const PostSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String, 
        require: true
    }
}, {
    timestamps: true
});

module.exports = model('Post', PostSchema);