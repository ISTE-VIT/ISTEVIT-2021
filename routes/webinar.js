const express = require('express')
const webinarRouter = express.Router()
const axios = require('axios');
const mongoose = require("mongoose");
const message = require("../models/Message");

webinarRouter.get('/', async(req, res) => {
    try {
        const webinarAPI = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLtArheW_rmIbXtsm7Ff4eYKWut-CgC5Gr&key=AIzaSyDcf3mGnmgxqUN795MFMnc1to--M3ztn48`)
        
        res.render('index', { webinars : webinarAPI.data.items })
    } catch (err) {
        if(err.response) {
            res.render('index', { webinars : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('index', { webinars : null })
            console.log(err.requiest)
        } else {
            res.render('index', { webinars : null })
            console.error('Error', err.message)
        }
    } 
})


webinarRouter.get('/gallery', (req, res) => {
   res.render('gallery');
})

webinarRouter.get('/team', (req, res) => {
    res.render('team');
 })

 webinarRouter.get('/events', (req, res) => {
    res.render('events');
 })

 webinarRouter.get('/developers', (req, res) => {
    res.render('developers');
 })

 webinarRouter.post("/message", async(req, res) => {
    const message1 = new message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      
    });
    try {
        await message1.save();

    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }

        
    res.redirect('/');

});

webinarRouter.get('/seemessages', async(req, res) => {
    try {
        const allmessages = await message.find({});
        res.json(allmessages);
    } catch (error) {
        res.status(400).json({
            message: err.message,
        });
    }
 })


module.exports = webinarRouter 