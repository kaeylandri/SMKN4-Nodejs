const express = require ('express');
const router = express.Router();

const {getAll, create} = require('../controllers/controller')

router.get('/', (req, res) => {
    res.send('Hello world')
});

router.get('/get', getAll);
router.post('/create', create);

module.exports = router;