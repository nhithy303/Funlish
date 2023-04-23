const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        username: { type: String },
        password: { type: String },
        singinAt: { type: Date, default: Date.now },
        singoutAt: { type: Date, default: Date.now },
        // action: { type: String },
    },
    // {
    //     timestamps: true,
    // },
);
// Signin.index({ first: 1, last: -1 });

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('Account', Account);
