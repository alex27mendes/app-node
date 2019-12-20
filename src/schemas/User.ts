import {Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    email ?: string,
    firsName ?: string,
    lastName ?: string,
    fullName() : string
}
const UserSchema = new Schema({
    email: String,
    firsName: String,
    lastName: String
},{
    timestamps: true
})

UserSchema.methods.fullName = function(): string{
    return this.firsName + ' ' + this.lastName
}
export default model<UserInterface>('User', UserSchema)