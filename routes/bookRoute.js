//create routes here

const express= require('express');

//import controller that u have created in controllers
const bookController = require('../controllers/bookController')

const router = express.Router();

router.get('/books',bookController.getBooks);

router.post('/books/:id',bookController.createBook);

router.put('/books/:id',bookController.updateBook);

router.delete('/books/:id',bookController.deleteBook);

module.exports =router;