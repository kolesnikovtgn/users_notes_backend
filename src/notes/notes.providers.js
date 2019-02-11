"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notes_schema_1 = require("./notes.schema");
var constants_1 = require("../constants");
exports.notesProviders = [
    {
        provide: constants_1.NOTE_MODEL_PROVIDER,
        useFactory: function (connection) { return connection.model('Note', notes_schema_1.NoteSchema); },
        inject: [constants_1.DB_PROVIDER],
    },
];
