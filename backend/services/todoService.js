const User = require("../models/userModel");
const TodoList = require("../models/todoModel");


module.exports = {
    createTodo: async ({ title, body, id }) => {
        try {
            const existingUser = await User.findById(id);
            if (existingUser) {
                const todoList = new TodoList({ title, body, user: existingUser });
                await todoList.save().then(
                    () => {
                        existingUser.todoList.push(todoList);
                        existingUser.save();
                        return {
                            response: todoList
                        }
                    }
                );
            }
        } catch (error) {

            return {
                error: error
            }

        }
    },
    getTodo: async ({ id }) => {
        try {
            const todoList = await TodoList.find({ user: id }).sort({
                createdAt: -1,
            });
            if (todoList.length !== 0) {
                return {
                    response: todoList
                }
            }
        } catch (error) {
            return {
                error: error
            }

        }
    },
    updateTodo: async ({ id, title, body }) => {
        try {
            const todoList = await TodoList.findByIdAndUpdate(id, { title, body });
            todoList.save().then(
                () => {
                    return {
                        response: "Task Updated"
                    }
                }
            );
        } catch (error) {

            return {
                error: error
            }

        }
    },
    deleteTodo: async ({ id, todoId }) => {
        try {
            const existingUser = await User.findByIdAndUpdate(id, {
                $pull: { todoList: { _id: todoId } }
            });

            if (existingUser) {
                await TodoList.findByIdAndDelete(todoId).then(() => {
                    return {
                        response: "Task Deleted"
                    };
                });
            }
        } catch (error) {
            return {
                error: error
            };
        }
    }
}