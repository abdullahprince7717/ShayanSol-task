const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = {
    signUp: async ({ email, userName, password }) => {
        try {
            const hashpassword = bcrypt.hashSync(password);
            const user = new User({ email, userName, password: hashpassword });
            await user
                .save()
                .then(() => {
                    return {
                        response: user
                    }
                })
                .catch((error) => {
                    return {
                        error: error
                    }
                });
        } catch (error) {
            return {
                error: error
            }

        }
    },
    signIn: async (body) => {
        try {
            const user = await User.findOne({ email: body.email });
            if (!user) {
                return {
                    response: "User not found. Please Sign Up First"
                }
            }
            const isPasswordCorrect = bcrypt.compareSync(
                body.password,
                user.password
            );
            if (!isPasswordCorrect) {
                return {
                    return: {
                        response: "Password is not correct"
                    }
                }
            }
            const { password, ...others } = user._doc;
            return {
                response: others
            }

        } catch (error) {
            return {
                error: error
            }
        }
    }
}


