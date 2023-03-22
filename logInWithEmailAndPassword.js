const User = require("./database/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = 'AXSDFS';


const loginWithEmailPassword = async (email, password) => {
  const user = await User.findOne({
    where: { emailAddress: email },
  });
  console.log(user);
  if (!user) {
    return { status: 401 };
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) return { status: 500 };
  const token = jwt.sign({ user_id: user.id, email }, JWT_PRIVATE_KEY, {
    expiresIn: "2h",
  });
  return { token, user };
};

module.exports = { loginWithEmailPassword };
