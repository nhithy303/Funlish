const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, unique: true },
        name: { type: String, default: '' },
        avatar: { type: String, default: 'https://cdn.pixabay.com/animation/2022/07/30/22/02/22-02-02-999_640.png' },
        birthday: { type: Date, default: Date.now },
        email: { type: String, default: '' },
        phone: { type: String, default: '' },
        // status: { type: String, default: 'inactive'},
        // type_regis: { type: String },
        // action: { type: String, default: 'System' },

        // deleteAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);
User.index({ username: 1 });

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('User', User);
