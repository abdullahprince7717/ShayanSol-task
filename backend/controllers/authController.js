const authService = require('../services/authService');
const joi = require("joi");

const signUpSchema = joi.object().keys({
    userName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
})


const signInSchema = joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required(),
})

module.exports = {
    signUp: async (req, res) => {
        try {
            const validate = await signUpSchema.validateAsync(req.body);
            const signUp = await authService.signUp(validate);
            console.log("signUp", signUp);
            if (signUp?.error) {
                res.send({
                    error: "signUp error"
                })
            }
            else {
                res.send({
                    response: "signUp response"
                })
            }
        }
        catch (err) {
            console.log("err", err)
            res.send({
                error: err
            })
        }
    },
    signIn: async (req, res) => {
        try {
            const validate = await signInSchema.validateAsync(req.body);
            const signIn = await authService.signIn(validate);

            if (signIn.error) {
                res.send({
                    error: signIn.error
                });
            }
            else {
                res.send({
                    response: signIn.response
                });
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    }
}