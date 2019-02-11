"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    likeCount: {
        type: String,
        required: false,
    },
    tags: {
        type: String,
        required: false,
    },
    dateCreate: {
        type: String,
        required: true,
    },
});
