const todoService = require('../services/todoService');
const joi = require("joi");

const createTodoSchema = joi.object().keys({
    title: joi.string().required(),
    body: joi.string().required(),
    id: joi.string().required()
})

const getTodoSchema = joi.object().keys({
    id: joi.string().required()
})
const updateTodoSchema = joi.object().keys({
    title: joi.string(),
    body: joi.string(),
    id: joi.string().required()
})
const deleteTodoSchema = joi.object().keys({
    id: joi.string().required(),
    todoId: joi.string().required()
})

module.exports = {
    createTodo: async (req, res) => {
        try {
            // console.log("req", req.body)
            const validate = await createTodoSchema.validateAsync(req.body);
            const createTodo = await todoService.createTodo(validate);
            if (createTodo?.error) {
                res.send({
                    error: "createTodo error"
                })
            }
            else {
                res.send({
                    response: "createTodo response"
                })
            }
        }
        catch (error) {
            console.log(error)
            res.send({
                error: err
            })
        }
    },
    getTodo: async (req, res) => {
        try {
            const validate = await getTodoSchema.validateAsync(req.body);
            const getTodo = await todoService.getTodo(validate);

            if (getTodo?.error) {
                res.send({
                    error: "getTodo error"
                });
            }
            else {
                res.send({
                    response: getTodo.response
                });
            }
        }
        catch (error) {
            console.log(error);
            res.send({
                error: error
            })
        }
    },
    updateTodo: async (req, res) => {
        try {
            const validate = await updateTodoSchema.validateAsync(req.body);
            const updateTodo = await todoService.updateTodo(validate);

            if (updateTodo?.error) {
                res.send({
                    error: "updateTodo error"
                });
            }
            else {
                res.send({
                    response: "updateTodo response"
                });
            }
        }
        catch (error) {
            console.log(error);
            res.send({
                error: error
            })
        }
    }, deleteTodo: async (req, res) => {
        try {
            const validate = await deleteTodoSchema.validateAsync(req.body);
            const deleteTodo = await todoService.deleteTodo(validate);

            if (deleteTodo?.error) {
                res.send({
                    error: "deleteTodo error"
                });
            }
            else {
                res.send({
                    response: "deleteTodo response"
                });
            }
        }
        catch (error) {
            console.log(error);
            res.send({
                error: error
            })
        }
    }
}