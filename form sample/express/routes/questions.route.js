const express = require('express');
const router = express.Router();
// const guard = require('../services/guard');

const Questions = require('../models/questions.model');





//List of questions
router.get('/',(req,res) => {
    Questions
        .find({})
        .then(questions => {
            res.json({
                status: true,
                data: questions,
                msg: "listing users success"
            });
        })
        .catch(err => {
            throw new Error(err);
        })

});


//post new
router.post('/',(req,res) => {
    const {title} = req.body;

    if(title){
        Questions
            .findOne({title})
            .then(question => {
               if (!question){
                let newQuestion = new Questions(req.body);
                newQuestion
                    .save()
                    .then(question => {
                        res.json({
                            status: true,
                            data: question,
                            msg: 'adding book successful'
                        });
                    })
                    .catch(err => {
                        res.status(500).send({
                            status: false,
                            msg: 'Error adding book'
                        });
                        throw new Error(err);
        
                    })

               }else{
                res.status(409).send({
                    status: false,
                    msg: 'book already exists'
                });
               }
            })

        
    }else{
        res.status(500).send({
            status: false,
            msg: 'error happened'
        });
    }

});


module.exports = router;