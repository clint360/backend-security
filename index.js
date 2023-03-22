const dotenv = require('dotenv');
const logInWithEmailAndPassword = require('./logInWithEmailAndPassword')
const relationships = require('./database/relationships'); 
const regUser = require('./registerUser');
const logInWithAPIKey = require('./logInWithAPIKey');


let user = {
    firstName: 'Che',
    lastName: 'Boy',
    email: 'dycjh@example.com',
    phone: '67728329',
    password: '+clint360'
}

//regUser(user);
logInWithAPIKey('8ea73248-25c6-4e98-be63-cd2f91932d9e').then(console.log)
//logInWithEmailAndPassword('clint360.rebase@gmail.com', '+Beatzboy360').then(console.log)
