const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({ //schema visto na documentação do mongoose
    type: {
        type: String,
        enum:['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

module.exports = PointSchema;