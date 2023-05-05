const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Student = new Schema(
    {
        username: { type: String, unique: true },
        name: { type: String, default: '' },
        avatar: { type: String, default: 'https://drive.google.com/uc?export=view&id=1wGcR2ACFUCjJyib9CWt_UmXzn5tFjTFN' },
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
Student.index({ username: 1 });

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('Student', Student);
