const bcrypt = require('bcrypt');

function hash(password) {
 const saltRounds = 10;

const hash = bcrypt.hash(password, saltRounds, function(err, hash) {
    if(err) {
        return { status:  500}
    } else {
        return hash
    }
})

return hash

}

console.log(hash('+Beatzboy36dfg0'));

