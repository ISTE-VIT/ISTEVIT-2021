const express = require('express')
const webinarRouter = express.Router()
const axios = require('axios')

webinarRouter.get('/', async(req, res) => {
    try {
        const webinarAPI = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLtArheW_rmIbXtsm7Ff4eYKWut-CgC5Gr&key=AIzaSyDcf3mGnmgxqUN795MFMnc1to--M3ztn48`)
        console.log(webinarAPI.data.items[0].link);
        res.render('webinars', { webinars : webinarAPI.data.items })
    } catch (err) {
        if(err.response) {
            res.render('webinars', { webinars : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('webinars', { webinars : null })
            console.log(err.requiest)
        } else {
            res.render('webinars', { webinars : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = webinarRouter 