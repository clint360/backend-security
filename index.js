const dotenv = require('dotenv');
const logInWithEmailAndPassword = require('./logInWithEmailAndPassword')
const relationships = require('./database/relationships'); 
const regUser = require('./registerUser');

let user = {
    firstName: 'Che',
    lastName: 'Boy',
    email: 'dycjh@example.com',
    phone: '67728329',
    password: '+clint360'
}

regUser(user);
//logInWithEmailAndPassword('clint360.rebase@gmail.com', '+Beatzboy360').then(console.log)
