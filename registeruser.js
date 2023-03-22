const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('./database/user');
const saltRounds = 10;

async function registerUser(user) {
    let password;
    await bcrypt.hash(user.password, saltRounds, function(err, hash) {
        if(err) {
            return { status:  500}
        } else {
            password = hash;
        }
    });

    let u = await User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.email,
        phone: user.phone,
        password: password,
        isAdmin: false,
        apiKey: uuidv4()
    });
    return u;
}

module.exports = registerUser