const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Corrected spelling
        trim: true
    }
}, {
    timestamps: true // automatically adds createdAt and updatedAt fields
});

const ChannelModel = mongoose.model('Channel', channelSchema);

module.exports = ChannelModel;
