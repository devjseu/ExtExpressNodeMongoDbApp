/**
 * User: lukasz
 * Date: 10/9/13
 * Time: 8:04 PM
 */

module.exports = function (mongoose) {

    var UserSchema = new mongoose.Schema({
        email: { type: String, unique: true },
        password: { type: String },
        firstName: {type: String},
        lastName: {type: String},
        login: {type: String, unique: true }
    });

    var User = mongoose.model('User', UserSchema);

    //put custom methods here

    return {
        User: User
    }
}