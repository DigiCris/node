const express = require('express');
const router = express.Router();
const handler = require("../controllers/customerHandler");

router.get('/', handler.getAll);
router.post('/add', handler.save);
router.get('/delete/:id', handler.delete);
router.get('/update/:id', handler.edit);
router.post('/update/:id', handler.update);

module.exports = router;