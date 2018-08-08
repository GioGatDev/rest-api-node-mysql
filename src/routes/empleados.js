const express = require('express');
const router = express.Router();
const mysqlConection = require('../database');
router.get('/', (req, res) => {
    mysqlConection.query / ('SELECT * FROM epleados', (err, rows, fields) => {
        if (!err) {
            res.json(row);
        } else {
            console.log(err);
        }
    });
});
module.exports = router;