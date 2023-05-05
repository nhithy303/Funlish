const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Lesson = new Schema(
    {
        order: { type: Number },
        name: { type: String },
        description: { type: String },
        workbook: { type: String },
        video: { type: String },
        quiz: [{ type: Schema.Types.ObjectId, ref: 'Quiz'}],
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model('Lesson', Lesson);
