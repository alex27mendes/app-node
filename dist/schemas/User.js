"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');







const UserSchema = new (0, _mongoose.Schema)({
    email: String,
    firsName: String,
    lastName: String
},{
    timestamps: true
})

UserSchema.methods.fullName = function(){
    return this.firsName + ' ' + this.lastName
}
exports. default = _mongoose.model('User', UserSchema)