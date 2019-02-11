"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var notes_controller_1 = require("./notes.controller");
var notes_service_1 = require("./notes.service");
var notes_providers_1 = require("./notes.providers");
var database_module_1 = require("../database/database.module");
var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule],
            controllers: [notes_controller_1.NotesController],
            components: [
                notes_service_1.NotesService
            ].concat(notes_providers_1.notesProviders),
        })
    ], NotesModule);
    return NotesModule;
}());
exports.NotesModule = NotesModule;
