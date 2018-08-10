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
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Crear un dato 
router.post('/', (req, res) => {
    const { id, name, salario } = req.body;
    const query = `
    CALL empreadosaddoredit(?, ?, ?);
    `;
    mysqlConection.query(query, [id, name, salario], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado guardado' });
        } else {
            console.log(err);
        }
    });
});
router.put('/:id', (req, res) => {
    const { name, salario } = req.body;
    const { id } = req.params;
    const query = 'CALL empreadosaddoredit(?, ?, ?)';
    mysqlConection.query(query, [id, name, salario], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado editado' });
        } else {
            console.log(err);
        }
    });

});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConection.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Empleado Eliminado' });
        } else {
            console.log(err);
        }
    });
});
module.exports = router;