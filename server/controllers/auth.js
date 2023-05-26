import User from '../models/user'
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  //  validation
  if (!name) {
    return res.status(400).send("Name is required");
  }
  if (!password || password.length < 6) {
    return res.status(400).send("password is required and should be minimum 6 character long")
  }

  let userExist = await User.findOne({ email }).exec();
  if (userExist) {
    return res.status(400).send("User Exist With This Email")
  }

  // for register
  const user = new User(req.body);

  try {
    await user.save();
    console.log("USER CREATED", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log("Create User Failed", err);
    return res.status(400).send("Error. try again");
  }
};


export const login = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).exec();

    if (!user) {
      res.status(400).send("User with that email not found");
    }

    user.comparePassword(password, (err, match) => {
      console.log("COMPARE PASSWORD IN LOGIN ERR", err);
      if (!match || err) {
        return res.status(400).send("Wrong password");
      }
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });
      res.json({
        token, user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    res.status(400).send("Signin Failed")
  }
};
