const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Lesson = new Schema(
    {
        course_id: { type: Schema.Types.ObjectId },
        name: { type: String },
        image: { type: String },
        icon: { type: String },
        description: { type: String },
        detail: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('Lesson', Lesson);
