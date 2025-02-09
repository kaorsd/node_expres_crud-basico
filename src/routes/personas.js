import {Router} from 'express'
import pool from '../database/database.js'

const router = Router();


router.get('/add', (req, res)=>{
    res.render('personas/add');

})

router.post('/add', async(req, res)=>{
    try {

        const {name, lastname, age} = req.body;
        const newPersona = {
            name,lastname,age
        }
        await pool.query('INSERT INTO personas SET ?', [newPersona]);
        res.redirect('/list');
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.get('/list', async(req, res)=>{
    try {
        const [result] = await pool.query('SELECT * FROM personas');
        res.render('personas/list', {personas: result})
        
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.get('/edit/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const [persona] = await pool.query('SELECT * FROM personas WHERE id = ?', [id]);
        const personaEdit = persona[0];
        res.render('personas/edit',{persona: personaEdit});


    } catch (err) {s
        res.status(500).json({message:err.message});
    }
})



export default router;