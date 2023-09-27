const mongoose = require('mongoose');

const {Schema} = mongoose;

const commentSchema = new Schema({
    content: {type: String, required: true},
    blog: {type: mongoose.SchemaTypes.ObjectId, ref: 'Blog'},//value passed here in reference is our "Model Name"
    author: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}//value passed here in reference is our "Model Name"
},
    {timestamps: true}
);

module.exports = mongoose.model('Comment', commentSchema, 'comments');

