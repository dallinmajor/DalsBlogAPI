const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    text: {
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date
    }
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;