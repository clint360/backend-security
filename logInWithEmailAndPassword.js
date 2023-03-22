const User = require("./database/user");
const bcrypt = require('bcrypt');

 async function logInWithEmailAndPassword(email, password) {
   const user = await User.findOne({ where: { emailAddress: email } });
   if (!user) {
   return {
      status: 401
   }; 
   } else {
      bcrypt.compare(password, user.password, function(err, result) {
         if(err) {
            return {
               status: 500,
            }
         } else {
            return user
         }
     });
   }
}

module.exports = logInWithEmailAndPassword