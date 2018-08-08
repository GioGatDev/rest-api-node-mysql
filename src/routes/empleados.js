const express = require('express');
const router = express.Router();
const mysqlConection = require('../database');
router.get('/', (req, res) => {
    mysqlConection.query / ('SELECT * FROM empleados', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
module.exports = router;