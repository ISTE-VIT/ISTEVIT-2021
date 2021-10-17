const express = require('express')
const webinarRouter = express.Router()
const axios = require('axios')

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


module.exports = webinarRouter 