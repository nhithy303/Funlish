const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Menu = new Schema(
    {
        name: { type: String },
        image: { type: String },
        link: { type: String },
        active: { type: Boolean },
    },
);

// Add plugins
// mongoose.plugin(slug);
// Course.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all',
// });

module.exports = mongoose.model('Menu', Menu);
