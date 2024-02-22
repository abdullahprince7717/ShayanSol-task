const router = require('express').Router();
const todoController = require('../controllers/todoController');

router.post('/create', todoController.createTodo);
router.get('/get', todoController.getTodo);
router.put('/update', todoController.updateTodo);
router.delete('/delete', todoController.deleteTodo);

module.exports = router;