const mongoose = require('mongoose');

const failedtxSchema = mongoose.Schema({

    failedtx: {
        type: mongoose.SchemaTypes.Mixed,
        required: true
      }
}, {
    timestamps: true
});

module.exports = mongoose.model('Por', failedtxSchema);